'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import clsx from 'clsx';

interface Characters {
  boundingBox: {
    topLeft: {
      x: null | number;
      y: null | number;
    };
    bottomRight: {
      x: null | number;
      y: null | number;
    };
  };
  name: null | string;
  _id: null | string;
}

interface Coordinates {
  x: null | number;
  y: null | number;
}

interface BlurEffectProps {
  isBlurred: boolean;
}

interface NavProps {
  characters: Characters[];
  isBlurred: Record<string, boolean>;
  timer: number;
  setTimer: (time: number) => void;
  gameEnded: boolean;
}

const CharacterImage = ({
  isBlurred,
  src,
  alt,
}: BlurEffectProps & { src: string; alt: string }) => {
  return (
    <div className={`${isBlurred ? 'brightness-50 filter' : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        priority
        className="rounded"
      />
    </div>
  );
};

const CharacterName = ({
  name,
  isBlurred,
}: BlurEffectProps & { name: string }) => {
  return <div className={`${isBlurred ? 'line-through' : ''}`}>{name}</div>;
};

export default function Nav({
  characters,
  isBlurred,
  timer,
  setTimer,
  gameEnded,
}: NavProps) {
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!gameEnded) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [gameEnded, setTimer]);

  const formatTimer = () => {
    const minutes = Math.floor(timer / (60 * 1000));
    const seconds = Math.floor((timer % (60 * 1000)) / 1000);
    const milliseconds = timer % 1000;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}:${String(milliseconds).padStart(3, '0')}`;
  };

  return (
    <>
      <nav
        className={clsx(
          'sticky top-0 z-10 flex h-20 w-screen items-center bg-stone-900 px-8 text-white',
          { 'brightness-50': gameEnded },
        )}
      >
        <a
          href="/"
          className="cursor-pointer rounded-md px-3 py-2 text-2xl font-medium hover:bg-stone-800"
        >
          Pirate
          <span className="text-yellow-400">Hunt</span>
        </a>
        <div key={'Zoro'} className="ml-5 flex items-center gap-4 px-2">
          <CharacterImage
            src={`/Zoro.png`}
            alt={'Zoro' as string}
            isBlurred={isBlurred['Zoro' as string]}
          />
          <CharacterName
            name={'Zoro' as string}
            isBlurred={isBlurred['Zoro' as string]}
          />
          <CharacterImage
            src={`/Law.png`}
            alt={'Law' as string}
            isBlurred={isBlurred['Law' as string]}
          />
          <CharacterName
            name={'Law' as string}
            isBlurred={isBlurred['Law' as string]}
          />
          <CharacterImage
            src={`/Hancock.png`}
            alt={'Hancock' as string}
            isBlurred={isBlurred['Hancock' as string]}
          />
          <CharacterName
            name={'Hancock' as string}
            isBlurred={isBlurred['Hancock' as string]}
          />
        </div>
        {characters && <div className="ml-auto">{formatTimer()}</div>}
      </nav>
    </>
  );
}

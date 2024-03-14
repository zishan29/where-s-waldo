'use client';

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
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  gameEnded: boolean;
}

const CharacterImage = ({
  isBlurred,
  src,
  alt,
}: BlurEffectProps & { src: string; alt: string }) => {
  return (
    <div className={`${isBlurred ? 'brightness-50 filter' : ''}`}>
      <img src={src} alt={alt} width={40} height={40} className="rounded" />
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
          'sticky top-0 z-10 hidden h-20 w-screen items-center bg-stone-900 px-8 text-white md:flex',
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
        <div className="ml-5 flex items-center gap-4 px-2">
          <CharacterImage
            src={
              'https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/Zoro.png?alt=media&token=cb7648b6-660d-435b-91d5-0c1e81cba135'
            }
            alt={'Zoro' as string}
            isBlurred={isBlurred['Zoro' as string]}
          />
          <CharacterName
            name={'Zoro' as string}
            isBlurred={isBlurred['Zoro' as string]}
          />
          <CharacterImage
            src={
              'https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/Law.png?alt=media&token=ea6e57d5-4e71-41da-8338-47baa3349bd8'
            }
            alt={'Law' as string}
            isBlurred={isBlurred['Law' as string]}
          />
          <CharacterName
            name={'Law' as string}
            isBlurred={isBlurred['Law' as string]}
          />
          <CharacterImage
            src={
              'https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/Hancock.png?alt=media&token=115303f5-7fa6-459b-9b81-864cca8f7160'
            }
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

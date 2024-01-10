'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Coordinates {
  x: null | number;
  y: null | number;
}
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

export default function Start() {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    x: null,
    y: null,
  });
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(
          'https://wheres-waldo-api.adaptable.app/characters',
        );
        if (res.ok) {
          let data = await res.json();
          setCharacters(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  useEffect(() => {
    console.log(characters);
  }, [characters]);

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const image = event.target as HTMLImageElement;
    const boundingRect = image.getBoundingClientRect();

    const xPercentage =
      ((event.clientX - boundingRect.left) / boundingRect.width) * 100;
    const yPercentage =
      ((event.clientY - boundingRect.top) / boundingRect.height) * 100;

    characters.map((character) => {
      const { topLeft, bottomRight } = character.boundingBox;
      if (
        topLeft.x !== null &&
        topLeft.y !== null &&
        bottomRight.x !== null &&
        bottomRight.y !== null
      ) {
        const withinBoundingBox =
          xPercentage >= topLeft.x &&
          xPercentage <= bottomRight.x &&
          yPercentage >= topLeft.y &&
          yPercentage <= bottomRight.y;

        if (withinBoundingBox) {
          console.log(`You found ${character.name}!`);
        } else {
          console.log('Try again!');
        }
      }
    });

    setCoordinates({ x: xPercentage, y: yPercentage });

    console.log({ xPercentage, yPercentage });
  };
  return (
    <>
      <nav className="sticky top-0 z-10 flex h-20 w-screen items-center justify-center bg-white">
        <a href="#">One Piece X Where&lsquo;s Wally</a>
      </nav>
      <div className="relative bg-my-green">
        <div className="">
          <Image
            src="/onepiece.png"
            alt=""
            width={2000}
            height={2000}
            className="cursor-crosshair"
            onClick={handleImageClick}
            priority
          />
        </div>
      </div>
    </>
  );
}

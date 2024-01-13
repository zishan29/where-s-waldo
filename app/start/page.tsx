'use client';

import { useState, useEffect, use } from 'react';
import CustomContextMenu from '../components/CustomMenu';
import Nav from '../components/Nav';
import clsx from 'clsx';
import Form from '../components/Form';

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

interface MenuState {
  isOpen: boolean;
  position: Coordinates;
}

export default function Start() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [menuState, setMenuState] = useState<MenuState>({
    isOpen: false,
    position: { x: 0, y: 0 },
  });
  const [selectedCharacter, setSelectedCharacter] = useState<Characters | null>(
    null,
  );
  const [isBlurred, setIsBlurred] = useState<Record<string, boolean>>({});
  const [charactersFoundCount, setCharactersFoundCount] = useState(0);
  const [timer, setTimer] = useState<number>(0);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [message, setMessage] = useState<null | string>(null);

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
          setSelectedCharacter(character);
        }
      }
    });

    setMenuVisibility(true);
    setMenuState({
      isOpen: true,
      position: { x: event.clientX, y: event.clientY },
    });
  };

  function handleItemClick(id: string) {
    if (selectedCharacter !== null && selectedCharacter._id === id) {
      showMessage(`You found ${selectedCharacter.name}!`);
      setIsBlurred((prevIsBlurred) => ({
        ...prevIsBlurred,
        [selectedCharacter.name as string]: true,
      }));
      setCharactersFoundCount((prevCount) => prevCount + 1);
    } else {
      showMessage('Try again!');
    }
    if (menuVisibility) {
      setMenuState({ isOpen: false, position: { x: 0, y: 0 } });
    }
  }

  useEffect(() => {
    if (menuVisibility) {
      const closeMenu = () => {
        setMenuVisibility(false);
        setMenuState({ isOpen: false, position: { x: 0, y: 0 } });
      };
      document.addEventListener('click', closeMenu);

      return () => {
        document.removeEventListener('click', closeMenu);
      };
    }
  }, [menuVisibility]);

  useEffect(() => {
    if (charactersFoundCount === 3) {
      setGameEnded(true);
    }
  }, [charactersFoundCount, setGameEnded]);

  useEffect(() => {
    if (gameEnded) {
      document.body.classList.add('game-ended');
    } else {
      document.body.classList.remove('game-ended');
    }

    return () => {
      document.body.classList.remove('game-ended');
    };
  }, [gameEnded]);

  const showMessage = (text: string) => {
    setMessage(text);

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <>
      {characters && (
        <Nav
          characters={characters}
          isBlurred={isBlurred}
          timer={timer}
          setTimer={setTimer}
          gameEnded={gameEnded}
        />
      )}
      <div
        className={clsx(
          'relative flex h-screen items-start justify-center bg-page-yellow',
          { 'brightness-50': gameEnded },
        )}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/onepiece.png?alt=media&token=4574a1c6-1fc7-4d62-aaa8-fa2ffbf87daf"
          alt=""
          width={2000}
          height={2000}
          className="cursor-crosshair"
          onClick={handleImageClick}
        />
      </div>
      <CustomContextMenu
        characters={characters}
        handleItemClick={handleItemClick}
        menuState={menuState}
        isBlurred={isBlurred}
      />
      <Form gameEnded={gameEnded} timer={timer} />
      {message && (
        <div className="fixed left-1/2 top-32 z-10 -translate-x-1/2 transform rounded bg-stone-900 px-4 py-2 text-white">
          {message}
        </div>
      )}
    </>
  );
}

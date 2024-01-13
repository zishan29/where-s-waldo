import { useState } from 'react';
import Image from 'next/image';

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

interface CustomContextMenuProps {
  characters: Characters[];
  handleItemClick: (id: string) => void;
  menuState: {
    isOpen: boolean;
    position: Coordinates;
  };
  isBlurred: Record<string, boolean>;
}

const CustomContextMenu: React.FC<CustomContextMenuProps> = ({
  characters,
  handleItemClick,
  menuState,
  isBlurred,
}) => {
  const remainingCharacters = characters.filter(
    (item) => !isBlurred[item.name as string],
  );

  const getMenuPosition = () => {
    if (menuState.isOpen) {
      const menuWidth = 200; // Set your desired menu width
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const spaceFromEdge = 20; // Set your desired space from the edge

      const menuPosition = {
        top: menuState.position.y! + window.scrollY,
        left: menuState.position.x! + window.scrollX,
      };

      if (
        menuState.position.x! + menuWidth >
        viewportWidth + window.scrollX - spaceFromEdge
      ) {
        menuPosition.left = Math.max(
          window.scrollX + spaceFromEdge,
          viewportWidth - menuWidth + window.scrollX - spaceFromEdge,
          menuState.position.x! - menuWidth + window.scrollX,
        );
      }

      if (
        menuState.position.y! + 200 + window.scrollY >
        viewportHeight + window.scrollY - spaceFromEdge
      ) {
        menuPosition.top = Math.max(
          window.scrollY + spaceFromEdge,
          viewportHeight - 200 + window.scrollY - spaceFromEdge,
        );
      }

      return menuPosition;
    }

    return null;
  };

  return (
    <>
      {menuState.isOpen && (
        <div className="absolute z-10" style={getMenuPosition()}>
          <div className="transform rounded-md  bg-stone-900 transition">
            {remainingCharacters.map((item: Characters) => (
              <div
                key={item._id}
                onClick={() => handleItemClick(item._id as string)}
                className="flex cursor-pointer items-center gap-2 p-4 text-white"
              >
                <Image
                  src={`/${item.name}.png`}
                  alt={`${item.name}`}
                  width={40}
                  height={40}
                  priority
                  className="rounded"
                />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomContextMenu;

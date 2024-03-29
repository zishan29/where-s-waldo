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

  const menuPosition: { top: number; left: number } | null = getMenuPosition();

  const getImage = (name: string | null) => {
    if (name !== null) {
      if (name === 'Zoro') {
        return 'https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/Zoro.png?alt=media&token=cb7648b6-660d-435b-91d5-0c1e81cba135';
      }
      if (name === 'Law') {
        return 'https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/Law.png?alt=media&token=ea6e57d5-4e71-41da-8338-47baa3349bd8';
      }
      if (name === 'Hancock') {
        return 'https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/Hancock.png?alt=media&token=115303f5-7fa6-459b-9b81-864cca8f7160';
      }
    }
  };

  return (
    <>
      {menuState.isOpen && (
        <div
          className="absolute z-10"
          style={menuPosition ? menuPosition : undefined}
        >
          <div className="transform rounded-md  bg-stone-900 transition">
            {remainingCharacters.map((item: Characters) => (
              <div
                key={item._id}
                onClick={() => handleItemClick(item._id as string)}
                className="flex cursor-pointer items-center gap-2 p-4 text-white"
              >
                <img
                  src={getImage(item.name) as string}
                  alt={`${item.name}`}
                  width={40}
                  height={40}
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

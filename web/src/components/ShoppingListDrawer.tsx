import { Dispatch, SetStateAction } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const ShoppingListDrawer: React.FC<Props> = ({ drawerOpen }) => {
  const SIDEBAR_WIDTH_REM = 4;
  const isSm = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div
      className={`${
        isSm ? 'absolute' : 'static'
      } h-full top-0 right-0 bg-pink-200 overflow-hidden p-6 py-10 z-0
      translate duration-1000 ease-in-out flex-none`}
      style={{
        transform: `translateX(${
          isSm ? (drawerOpen ? '0px' : '100%') : '0px'
        })`,
        width: isSm ? `calc(100% - ${SIDEBAR_WIDTH_REM}rem)` : '21rem',
      }}
    >
      <div className="relative bg-pink-700 h-32 p-5 rounded-3xl flex">
        <img
          className="absolute w-20 -top-6 left-4"
          src="/assets/images/bottle.svg"
          alt="Bottle"
        />
        <div className="pl-24 flex flex-col">
          <p className="text-white mb-2">Didn't find what you need?</p>
          <button className="bg-white text-pink-800 rounded p-1">
            Add item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListDrawer;

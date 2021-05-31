import React from 'react';

interface Props {}

const ShoppingListDrawer: React.FC<Props> = () => {
  return (
    <div className="flex-none w-84 bg-pink-200 overflow-hidden p-6 py-10 z-0">
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

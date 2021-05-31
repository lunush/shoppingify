import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import IconLinksContainer from './IconLinksContainer';

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <div className="bg-white h-full flex-none flex flex-col py-4 items-center justify-between z-10">
      <Image src="/assets/images/logo.svg" alt="Logo" width={40} height={40} />
      <IconLinksContainer />
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="relative rounded-full bg-yellow-500 p-2 text-white hover:bg-yellow-400"
      >
        <div
          className="-top-2 -right-2 absolute bg-red-500 text-white rounded w-5 h-5
          text-sm"
        >
          3
        </div>
        <FiShoppingCart fontSize="1.2rem" />
      </button>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import IconLinksContainer from './IconLinksContainer';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex">
      <Head>
        <title>Shoppingify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white h-full flex flex-col py-4 items-center justify-between">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        <IconLinksContainer />
        <button className="relative rounded-full bg-yellow-500 p-2 text-white hover:bg-yellow-400">
          <div
            className="-top-2 -right-2 absolute bg-red-500 text-white rounded w-5 h-5
          text-sm"
          >
            3
          </div>
          <FiShoppingCart fontSize={20} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;

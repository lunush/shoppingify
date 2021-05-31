import Head from 'next/head';
import { useState } from 'react';
import ShoppingListDrawer from './ShoppingListDrawer';
import Sidebar from './Sidebar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="relative bg-gray-100 h-screen w-screen flex overflow-hidden">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="flex-grow z-0 overflow-y-scroll">{children}</div>
      <ShoppingListDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </div>
  );
};

export default Layout;

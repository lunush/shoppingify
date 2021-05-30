import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import IconLink from '../components/IconLink';
import { motion } from 'framer-motion';
import useDimensions from 'react-cool-dimensions';
import { useRouter } from 'next/router';

interface Props {}

const IconLinksContainer: React.FC<Props> = () => {
  const { observe, height } = useDimensions<HTMLDivElement>();
  const router = useRouter();
  const [sliderPosition, setSliderPosition] = useState(0);

  const pageSliderPosition: { [key: string]: () => number } = {
    '/items': () => 0,
    '/history': () => height / 2 - height / 6,
    '/statistics': () => height - height / 3,
  };

  // Set proper sliderPosition on render
  useEffect(() => {
    setSliderPosition(pageSliderPosition[router.asPath]());
  }, [height]);

  return (
    <div
      className="relative h-1/3 w-16 flex flex-col justify-between"
      ref={observe}
    >
      <motion.div
        className="absolute left-0 top-0 grid place-items-center"
        style={{ x: -3, y: sliderPosition, height: height / 3, width: 10 }}
        animate={{ y: sliderPosition }}
      >
        <div className="bg-yellow-500 rounded w-full" style={{ height: 50 }} />
      </motion.div>
      <IconLink
        title="items"
        href="/items"
        Icon={GiHamburgerMenu}
        setSliderPosition={setSliderPosition}
        enterValue={pageSliderPosition['/items']()}
        leaveValue={pageSliderPosition[router.asPath]()}
      />
      <IconLink
        title="history"
        href="/history"
        Icon={BsArrowCounterclockwise}
        setSliderPosition={setSliderPosition}
        enterValue={pageSliderPosition['/history']()}
        leaveValue={pageSliderPosition[router.asPath]()}
      />
      <IconLink
        title="statistics"
        href="/statistics"
        Icon={GoGraph}
        setSliderPosition={setSliderPosition}
        enterValue={pageSliderPosition['/statistics']()}
        leaveValue={pageSliderPosition[router.asPath]()}
      />
    </div>
  );
};

export default IconLinksContainer;

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import IconLink from '../components/IconLink';
import { motion } from 'framer-motion';
import useDimensions from 'react-cool-dimensions';

interface Props {}

const IconLinksContainer: React.FC<Props> = () => {
  const { observe, height } = useDimensions();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [currentPageSliderPosition] = useState(0);
  return (
    <div className="relative h-1/3 flex flex-col justify-between" ref={observe}>
      <motion.div
        className="absolute left-0 top-0 grid place-items-center"
        style={{ x: -27, y: sliderPosition, height: height / 3, width: 10 }}
        animate={{ y: sliderPosition }}
      >
        <div className="bg-yellow-500 rounded w-full" style={{ height: 50 }} />
      </motion.div>
      <IconLink
        title="items"
        Icon={GiHamburgerMenu}
        setSliderPosition={setSliderPosition}
        enterValue={0}
        leaveValue={currentPageSliderPosition}
      />
      <IconLink
        title="history"
        Icon={BsArrowCounterclockwise}
        setSliderPosition={setSliderPosition}
        enterValue={height / 2 - height / 6}
        leaveValue={currentPageSliderPosition}
      />
      <IconLink
        title="analytics"
        Icon={GoGraph}
        setSliderPosition={setSliderPosition}
        enterValue={height - height / 3}
        leaveValue={currentPageSliderPosition}
      />
    </div>
  );
};

export default IconLinksContainer;

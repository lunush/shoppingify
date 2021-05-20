import { useDebouncedState } from '@/utils/useDebouncedState';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  setSliderPosition: Dispatch<SetStateAction<number>>;
  enterValue: number;
  leaveValue: number;
  Icon: IconType;
}
const NavLink: React.FC<Props> = ({
  title,
  setSliderPosition,
  enterValue,
  leaveValue,
  Icon,
}) => {
  const [opacity, setOpacity, setOpacityNow] = useDebouncedState(0, 500);
  return (
    <div className="relative w-full h-1/3">
      <motion.div
        className="absolute transform -translate-y-1/2 -translate-x-1/2 bg-black
          text-white rounded text-center text-sm"
        style={{ left: 80, top: '50%', width: 80, opacity }}
        animate={{ opacity }}
      >
        {title}
      </motion.div>
      <NextLink href={`/${title}`}>
        <a
          onMouseEnter={() => {
            setSliderPosition(enterValue);
            setOpacity(1);
          }}
          onMouseLeave={() => {
            setSliderPosition(leaveValue);
            setOpacityNow(0);
          }}
          className="inline-grid place-items-center w-full h-full"
        >
          <Icon fontSize={26} />
        </a>
      </NextLink>
    </div>
  );
};

export default NavLink;

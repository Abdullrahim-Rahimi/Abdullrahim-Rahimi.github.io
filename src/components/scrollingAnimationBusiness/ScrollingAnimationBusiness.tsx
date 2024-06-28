'use client';
import { CheckIcon } from '@/assets/icons/checkIcon/CheckIcon';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ScrollingAnimationBusiness = ({
  image,
  title,
  className,
  classMotion,
  initialMotion,
  whileMotion,
  imageClassName,
}: {
  image?: any;
  title: string;
  className?: string;
  classMotion: string;
  initialMotion: any;
  whileMotion: any;
  imageClassName: string;
}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="pt-16">
      <div className="w-full relative bg-primaryBtn overflow-hidden rounded-[9px] h-[350px]">
        <div className={className} style={{ backgroundSize: '50%' }}></div>
        <motion.div
          initial={initialMotion}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          // viewport={{ once: true }}
          //   animate={{ y: 0 }}
          whileInView={whileMotion}
          className={classMotion}
        >
          <Image src={image!} alt="aaa" className={imageClassName} />
        </motion.div>
      </div>
      <h5 className="text-[#F2DAD4] pt-8 text-base leading-6">FEATURES</h5>
      <h2 className="pt-2 text-white leading-10 text-3xl">{title}</h2>
      <p className="font-montserrat font-medium text-xl pt-3 leading-8 text-[#D5D9D9]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-8"
      >
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <motion.li key={index} variants={item}>
              <Button
                variant="navigation"
                className="w-full justify-start mt-4 font-semibold text-base text-[#D5D9D9]"
              >
                <CheckIcon className="mr-2" />
                Lorem ipsum dolor
              </Button>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

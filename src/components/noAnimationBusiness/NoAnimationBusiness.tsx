'use client';
import { CheckIcon } from '@/assets/icons/checkIcon/CheckIcon';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';

export const NoScrollingAnimationBusiness = ({
  image,
  title,
  className,
  imageClassName,
  imageBg,
  imageBgTwo,
  imageClassNameBg,
  imageClassNameBgSecond,
  subtitle,
  desription,
  list,
  imageWidth,
  imageHeight,
  sizeImage,
  styleFirstBgJSON,
  styleSecondBgJSON,
  styleBgMobileSecond,
}: {
  image?: any;
  title: string;
  className?: string;
  imageClassName?: string;
  imageBg: any;
  imageBgTwo?: any;
  imageClassNameBg: string;
  imageClassNameBgSecond?: string;
  subtitle: string;
  desription: string;
  list: string[];
  imageWidth: any;
  imageHeight: any;
  sizeImage?: any;
  styleFirstBgJSON: any;
  styleSecondBgJSON: any;
  styleBgMobileSecond?: any;
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
    <div className="pt-16 bg-primary px-4 pb-[64px]">
      <div className="w-full relative bg-primaryBtn overflow-hidden rounded-[9px] h-[340px]">
        {!imageBg.includes(undefined) && (
          <Image
            src={imageBg}
            style={styleFirstBgJSON}
            alt="bg"
            className={imageClassNameBg}
            width={1000}
            height={1000}
          />
        )}
        {!imageBgTwo.includes(undefined) && (
          <Image
            src={imageBgTwo}
            style={styleBgMobileSecond}
            alt="bgtwo"
            className={imageClassNameBgSecond}
            width={1000}
            height={1000}
          />
        )}
        {!image.includes(undefined) && (
          <Image
            src={image!}
            alt="photo"
            className={imageClassName}
            width={imageWidth || 1000}
            height={imageHeight || 1000}
            style={sizeImage}
          />
        )}
      </div>
      <h5 className="text-[#F2DAD4] pt-8 text-base leading-6 uppercase">
        {subtitle}
      </h5>
      <h2 className="pt-2 text-white leading-10 text-3xl capitalize">
        {title}
      </h2>
      <p className="ltr:font-montserrat font-medium text-xl pt-3 leading-8 text-[#D5D9D9] capitalize">
        {desription}
      </p>
      {list ? (
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8"
        >
          {list.map((items: any, index: number) => {
            return (
              <motion.li key={index} variants={item}>
                <Button
                  variant="navigation"
                  className="w-full justify-start mt-4 font-semibold text-base text-[#D5D9D9]"
                >
                  <CheckIcon className="ltr:mr-2 rtl:ml-2" />
                  {items}
                </Button>
              </motion.li>
            );
          })}
        </motion.ul>
      ) : (
        <div className="grid mt-4  w-full">
          <>
            <div className="flex flex-col justify-between border-primaryBtn  ">
              <PlayMarketButton className="mb-2 w-full" />
              <AppStoreButton />
            </div>
          </>
        </div>
      )}
    </div>
  );
};

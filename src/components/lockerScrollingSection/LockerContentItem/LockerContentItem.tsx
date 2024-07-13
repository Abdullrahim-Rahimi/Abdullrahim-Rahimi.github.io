import React, { forwardRef } from 'react';
import styles from './LockerContentItem.module.css';
import { PlayMarketButton } from '@/components/buttonApp/PlayMarketButton';
import { AppStoreButton } from '@/components/buttonApp/AppStoreButton';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { baseURLImage } from '@/helpers/axiosConfig';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@/assets/icons/checkIcon/CheckIcon';

const LockerContentItem = forwardRef(
  (
    { objectId, text, index, description, storeBurron, listSub }: any,
    ref: any,
  ) => {
    const qrCode = new URL(
      '/uploads/QR_https_daisylnk_com_install_app_6524ba7590.svg',
      baseURLImage,
    ).href;
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
      <div
        className={styles.locker__section}
        data-objectid={objectId}
        ref={(el) => {
          ref.current[objectId] = el;
        }}
      >
        <h1 className="text-white text-5xl leading-[60px] capitalize">
          {text}
        </h1>
        <p className="ltr:font-montserrat font-medium leading-[30px] text-xl text-[#D5D9D9] mt-3">
          {description}
        </p>
        <Separator className="my-8 bg-primaryBtn" />
        {storeBurron ? (
          <div className="grid grid-cols-[148px_1fr]  w-full">
            <>
              <div className="mr-6  hidden md:block bg-primaryBtn rounded-[8px] w-[148px] h-[148px]">
                <Image
                  width={2000}
                  height={2000}
                  src={qrCode}
                  alt="qrCode"
                  className="p-4 w-[180px] h-[150px]"
                />
              </div>
              <div className="flex flex-col justify-between border-primaryBtn ml-6 rtl:mr-[40px] ">
                <PlayMarketButton className="mb-2 w-full" />
                <AppStoreButton />
              </div>
            </>
          </div>
        ) : (
          <>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 w-full"
            >
              {listSub?.map((items: any, index: number) => {
                return (
                  <motion.li key={index} variants={item}>
                    <Button
                      variant="navigation"
                      className="!w-full justify-start mt-4 font-semibold text-base text-[#D5D9D9]"
                    >
                      <CheckIcon className="mr-2 rtl:mr-0 rtl:ml-2" />
                      {items}
                    </Button>
                  </motion.li>
                );
              })}
            </motion.ul>
          </>
        )}
      </div>
    );
  },
);

LockerContentItem.displayName = 'LockerContainerItem';

export default LockerContentItem;

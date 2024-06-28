import React from 'react';
import styles from './LockerImageItem.module.css';
import Image from 'next/image';

const LockerImageItem = ({ isActive, imageUrl }: any) => {
  return (
    <Image
      src={imageUrl}
      className={styles.image + (isActive ? ' ' + styles.active : '')}
      alt="daw"
      width={100}
      height={100}
    />
  );
};

export default LockerImageItem;

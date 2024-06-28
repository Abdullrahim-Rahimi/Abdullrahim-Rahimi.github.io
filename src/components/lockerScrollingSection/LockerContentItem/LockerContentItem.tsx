import React, { forwardRef } from 'react';
import styles from './LockerContentItem.module.css';
import { formatNumberToTwoDigits } from '@/lib/format';

const LockerContentItem = forwardRef(
  ({ objectId, text, index }: any, ref: any) => {
    return (
      <div
        className={styles.locker__section}
        data-objectid={objectId}
        ref={(el) => {
          ref.current[objectId] = el;
        }}
      >
        <h3>{formatNumberToTwoDigits(index + 1)}</h3>
        <p>{text}</p>
      </div>
    );
  },
);

LockerContentItem.displayName = 'LockerContainerItem';

export default LockerContentItem;

import React, { useRef, useEffect, useState } from 'react';
import LockerImageItem from '../LockerImageItem/LockerImageItem';
import styles from './LockerContainer.module.css';
import LockerContentItem from '../LockerContentItem/LockerContentItem';
import { objects } from '@/lib/testData';

const LockerContainer = () => {
  const [activeImageId, setActiveImageId] = useState<any>();
  const textRef = useRef([]);

  useEffect(() => {
    function handleIntersection(entries: any) {
      let activeId = null;
      entries.map((entry: any) => {
        if (entry.isIntersecting) {
          // dataset properties are strings
          activeId = +entry.target.dataset.objectid;
        }
      });
      setActiveImageId(activeId);
    }

    const options = {
      threshold: [0.5, 1],
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    textRef.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.locker}>
      <div className={styles.locker__image}>
        <div className={styles.locker__container}>
          {objects.map((el) => {
            return (
              <LockerImageItem
                key={el.objectId}
                isActive={el.objectId === activeImageId}
                imageUrl={el.url}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.locker__content}>
        {objects.map((el, index) => {
          return (
            <LockerContentItem
              key={el.objectId}
              objectId={el.objectId}
              index={index}
              text={el.text}
              ref={textRef}
            />
          );
        })}
      </div>
      <div className={styles.threshold + ' ' + styles['threshold--top']}></div>
    </div>
  );
};

export default LockerContainer;

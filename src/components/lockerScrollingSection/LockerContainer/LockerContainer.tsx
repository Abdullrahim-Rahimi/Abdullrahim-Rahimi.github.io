import React, { useRef, useEffect, useState } from 'react';
import LockerImageItem from '../LockerImageItem/LockerImageItem';
import styles from './LockerContainer.module.css';
import LockerContentItem from '../LockerContentItem/LockerContentItem';

const LockerContainer = ({ listInfo }: { listInfo: any }) => {
  const [activeImageId, setActiveImageId] = useState<any>();
  const textRef = useRef([]);

  useEffect(() => {
    function handleIntersection(entries: any) {
      let activeId = null;
      entries.map((entry: any) => {
        if (entry.isIntersecting) {
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

  const sortList = listInfo.sort(
    (a: any, b: any) => a.attributes.sortId - b.attributes.sortId,
  );

  return (
    <div className={`${styles.locker} !hidden md:!grid `}>
      <div className={styles.locker__content}>
        {listInfo &&
          sortList.map((el: any, index: number) => {
            return (
              <LockerContentItem
                key={el?.attributes.infoScroll.objectId}
                objectId={el?.attributes.infoScroll.objectId}
                index={index}
                text={el?.attributes.infoScroll.text}
                ref={textRef}
                description={el?.attributes.infoScroll.description}
                storeBurron={el?.attributes.infoScroll.storeBurron}
                listSub={el?.attributes.infoScroll.listSub}
              />
            );
          })}
      </div>
      <div className={styles.locker__image}>
        <div className={styles.locker__container}>
          <div className="w-[600px] h-[600px] bg-primaryBtn rounded-[16px] relative ml-auto rtl:ml-0 rtl:mr-auto overflow-hidden">
            {listInfo &&
              sortList.map((el: any) => {
                return (
                  <LockerImageItem
                    key={el?.attributes.infoScroll.objectId}
                    isActive={
                      el?.attributes.infoScroll.objectId === activeImageId
                    }
                    imageUrl={el.url}
                    item={el}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockerContainer;

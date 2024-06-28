// components/LockerComponent.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface LockerData {
  text: string;
  image: any;
}

interface LockerComponentProps {
  data: LockerData[];
}

const LockerComponent: React.FC<LockerComponentProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window.IntersectionObserver !== 'undefined') {
      const options = {
        threshold: [0.5, 1],
      };
      const targets = document.querySelectorAll('.cb');
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setCurrentIndex(index);
          }
        });
      };
      const observer = new IntersectionObserver(handleIntersection, options);
      targets.forEach((target) => observer.observe(target));

      return () => {
        targets.forEach((target) => observer.unobserve(target));
      };
    }
  }, []);

  return (
    <div>
      <div className="text h-screen flex flex-col items-center justify-center w-full mx-auto">
        <p className="w-2/5 text-gray-600 text-sm leading-7 font-light">
          {data[0]?.text}
        </p>
      </div>
      <div className="locker relative grid grid-cols-12 gap-4 outline outline-1 outline-gray-300">
        <div className="locker__image relative col-start-2 col-end-6">
          <div className="locker__container sticky top-0 h-screen flex items-center justify-center">
            {data.map((item, index) => (
              <Image
                key={index}
                className={`image image--${index + 1} ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500 ease`}
                src={item.image}
                alt={`Locker image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="locker__content col-start-8 col-end-13">
          {data.map((item, index) => (
            <div
              key={index}
              className="locker__section cb border-t border-gray-300 h-screen flex flex-col justify-center"
              data-index={index}
            >
              <h3 className="text-2xl font-light mb-0">{`0${index + 1}`}</h3>
              <p className="w-4/5 text-gray-600 text-sm leading-7 font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text h-screen flex flex-col items-center justify-center w-full mx-auto">
        <p className="w-2/5 text-gray-600 text-sm leading-7 font-light">
          {data[1]?.text}
        </p>
      </div>
    </div>
  );
};

export default LockerComponent;

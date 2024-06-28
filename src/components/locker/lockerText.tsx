import React, { useEffect } from 'react';
import styles from './locker.module.css';
import Image from 'next/image';

const StickySection = () => {
  // useEffect(() => {
  //   if (typeof window.IntersectionObserver !== 'undefined') {
  //     const options = {
  //       root: null,
  //       threshold: [0.5, 1],
  //     };
  //     const targets = document.querySelectorAll('#cb');

  //     const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //       entries.forEach((entry) => {
  //         const targetElement = entry.target as HTMLElement;
  //         const currentClass = targetElement.dataset.swap;
  //         console.log(currentClass);
  //         if (entry.isIntersecting) {

  //             document.querySelector(`#test123 #${currentClass}`)?.classList.add('active');

  //         } else {

  //             document.querySelector(`#test123 #${currentClass}`)?.classList.remove('active');

  //         }
  //       });
  //     };

  //     const observer = new IntersectionObserver(handleIntersection, options);
  //     targets.forEach((target) => {
  //       console.log(target);
  //       observer.observe(target)

  //     });

  //     // Cleanup the observer on component unmount
  //     return () => {
  //       targets.forEach((target) => observer.unobserve(target));
  //     };
  //   } else {
  //     // Fallback logic
  //   }
  // }, []);
  useEffect(() => {
    if (typeof window.IntersectionObserver !== 'undefined') {
      let options = {
        root: null,
        threshold: [0.5, 1],
      };
      const targets = document.querySelectorAll('.cb');

      const handleIntersection = (entries: any) => {
        entries.map((entry: any) => {
          if (entry.isIntersecting) {
            entry.target.current = entry.target.dataset.swap;
            console.log(
              document.querySelector(
                '.locker__container .' + entry.target.current,
              ),
            );
            document
              .querySelector('.locker__container .' + entry.target.current)
              ?.classList.add('active');
          } else {
            document
              .querySelector('.locker__container .' + entry.target.current)
              ?.classList.remove('active');
          }
        });
      };
      const observer = new IntersectionObserver(handleIntersection, options);
      targets.forEach((target) => observer.observe(target));
    } else {
      // Fallback
    }
  }, []);

  return (
    <div className="locker">
      <div className="locker__image">
        <div className="locker__container">
          <Image
            className="image image--1 imgqqqq"
            src="https://Image-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="Image 1"
            width={600}
            height={600}
          />
          <Image
            className="image image--2 imgqqqq"
            src="https://assets.codepen.io/325536/tech.jpeg"
            alt="Image 2"
            width={600}
            height={600}
          />
          <Image
            className="image image--3 imgqqqq"
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="Image 3"
            width={600}
            height={600}
          />
          <Image
            className="image image--4 imgqqqq"
            src="https://assets.codepen.io/325536/tech-3.jpeg"
            alt="Image 4"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="locker__content">
        <div
          className="locker__section locker__section--1 cb"
          data-swap="image--1"
        >
          <h3>01</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div
          className="locker__section locker__section--2 cb"
          data-swap="image--2"
        >
          <h3>02</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div
          className="locker__section locker__section--3 cb"
          data-swap="image--3"
        >
          <h3>03</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div
          className="locker__section locker__section--4 cb"
          data-swap="image--4"
        >
          <h3>04</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="threshold threshold__top"></div>
    </div>
    // <div className={styles.locker}>
    //   <div className={styles.locker__image}>
    //     <div className={styles.locker__container}>
    //       <img
    //         className={`${styles.image} image1 imaaag`}
    //         id='image1'
    //         src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
    //         alt="image 1"
    //       />
    //       <img
    //         className={`${styles.image} image2 imaaag`}
    //                  id='image2'
    //         src="https://assets.codepen.io/325536/tech.jpeg"
    //         alt="image 2"
    //       />
    //       <img
    //         className={`${styles.image} image3 imaaag`}
    //                  id='image3'
    //         src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
    //         alt="image 3"
    //       />
    //       <img
    //         className={`${styles.image} image4 imaaag`}
    //                  id='image4'
    //         src="https://assets.codepen.io/325536/tech-3.jpeg"
    //         alt="image 4"
    //       />
    //     </div>
    //   </div>
    //   <div className={styles.locker__content} id='test123'>
    //     {['1', '2', '3', '4'].map((num) => (
    //       <div
    //         key={num}
    //         className={`${styles.locker__section} cb`}
    //         id='cb'
    //         data-swap={`image${num}`}
    //       >
    //         <h3>0{num}</h3>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //           enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    //           reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //           nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    //           sunt in culpa qui officia deserunt mollit anim id est laborum.
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    //   <div className={`${styles.threshold} ${styles.threshold__top}`}></div>
    // </div>
  );
};

export default StickySection;

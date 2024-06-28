'use client';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { ContactSupport } from '@/assets/icons/contactSupport/ContactSupport';
import { SelectTutorials } from './SelectTutorial';
import { Button } from '@/components/ui/button';
import Separator from '@/components/separator/Separator';
import { ArrowUp } from 'lucide-react';
import { TabsTutorials } from '@/components/tabsTutorials/TabsTutorials';
import { TutorialComponents } from './TutorialComponents';

export const TutorialSection = ({
  setScroll,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const withBlock = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    setScroll(blockRef);
  }, [setScroll]);

  const scrollToTopOfBlock = () => {
    if (blockRef.current) {
      blockRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (withBlock.current) {
      const { top } = withBlock.current.getBoundingClientRect();
      if (top < 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div
      className="bg-[#F8F5F3] px-4 pt-10 md:pt-20 md:pr-16 pb-28 md:flex"
      ref={blockRef}
    >
      <div className="hidden md:block" ref={withBlock}>
        <TabsTutorials />
      </div>
      <div className="flex items-center md:hidden" ref={withBlock}>
        <SelectTutorials />
      </div>
      <Separator className="my-8 bg-[#E8E9E9] md:hidden" />
      <div className="block md:hidden">
        <TutorialComponents />
      </div>
      {showScroll && (
        <div className="fixed bottom-4 right-4 flex flex-col">
          <Button className="px-[14px] py-[25px] text-primary bg-white rounded-full shadow-xl  shadow-[#101E1D1A] mb-4 md:hidden">
            <ContactSupport style="#2E4342" />
          </Button>
          <button
            onClick={scrollToTopOfBlock}
            className="p-4 text-primary bg-white rounded-full shadow-xl  shadow-[#101E1D1A]"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

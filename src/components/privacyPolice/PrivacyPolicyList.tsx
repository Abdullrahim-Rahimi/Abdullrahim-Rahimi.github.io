'use client';
import { ArrowUp } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const PrivacyPoliceList = ({
  setScroll,
  dataSection,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
  dataSection: any;
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
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
    if (blockRef.current) {
      const { top } = blockRef.current.getBoundingClientRect();
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
    <div className="py-20 px-4 md:px-16" ref={blockRef}>
      <div>
        <h2 className="capitalize font-bold text-2xl mb-10 text-primary pt-10">
          {dataSection?.titleWelcome}
        </h2>
        <p className="ltr:font-montserrat text-[#455150] mb-4">
          {dataSection?.daisyDescription}
        </p>

        <p className="ltr:font-montserrat mb-4 text-[#455150]">
          {dataSection?.theProvisionsSet}
        </p>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
          {dataSection?.titleAccepted}
        </h2>
        <ol className="list-decimal px-4 ml-4">
          {dataSection &&
            dataSection.acceptanceOfPolicy.map((item: any, index: number) => {
              return (
                <li
                  className="ltr:font-montserrat text-[#455150] mb-4"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
        </ol>

        <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8 pt-10">
          {dataSection?.collectionofData}
        </h2>
        <ol className="list-decimal px-4 ml-4 ">
          {dataSection &&
            dataSection.collectionOfDataList.map((item: any, index: number) => {
              return (
                <li
                  className="ltr:font-montserrat text-[#455150] mb-4"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {dataSection &&
            dataSection.collectionOfDataListAlpha.map(
              (item: any, index: number) => {
                return (
                  <li
                    className="ltr:font-montserrat text-[#455150] mb-4"
                    key={index}
                  >
                    {item}
                  </li>
                );
              },
            )}
        </ol>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8 pt-10">
          {dataSection?.useAndHandling}
        </h2>
        <ol className=" px-4 ml-4  list-decimal">
          {dataSection &&
            dataSection.useAndHandlingofData.map((item: any, index: number) => {
              return (
                <li
                  className="ltr:font-montserrat text-[#455150] mb-4"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {dataSection &&
            dataSection.useAndHandlingofDataAlpha.map(
              (item: any, index: number) => {
                return (
                  <li
                    className="ltr:font-montserrat text-[#455150] mb-4"
                    key={index}
                  >
                    {item}
                  </li>
                );
              },
            )}
        </ol>
        <p className="ltr:font-montserrat text-[#455150] mb-4">
          {dataSection?.publicInformationDisclosure}
        </p>
        <p className="ltr:font-montserrat mb-4 text-[#455150]">
          {dataSection?.comunicationText}
        </p>
        <ol className=" px-4 ml-4  list-decimal">
          {dataSection &&
            dataSection.subUseAndHandlingofData.map(
              (item: any, index: number) => {
                return (
                  <li
                    className="ltr:font-montserrat text-[#455150] mb-4"
                    key={index}
                  >
                    {item}
                  </li>
                );
              },
            )}
        </ol>
        <p className="ltr:font-montserrat text-[#455150] mb-4">
          {dataSection?.textAppUse}
        </p>
        <p className="ltr:font-montserrat mb-4 text-[#455150]">
          {dataSection?.handleAllPersonal}
        </p>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
          {dataSection?.disseminationofData}
        </h2>
        <p className="ltr:font-montserrat text-[#455150] mb-4">
          {dataSection?.privacyPolicy}
        </p>
        <ol className=" px-4 ml-4  list-decimal">
          {dataSection &&
            dataSection.disseminationofDataList.map(
              (item: any, index: number) => {
                return (
                  <li
                    className="ltr:font-montserrat text-[#455150] mb-4"
                    key={index}
                  >
                    {item}
                  </li>
                );
              },
            )}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {dataSection &&
            dataSection.disseminationofDataAlpha.map(
              (item: any, index: number) => {
                return (
                  <li
                    className="ltr:font-montserrat text-[#455150] mb-4"
                    key={index}
                  >
                    {item}
                  </li>
                );
              },
            )}
        </ol>
        <ol className=" px-4 ml-16 " style={{ listStyle: 'lower-roman' }}>
          {dataSection &&
            dataSection.disseminationofDataRoman.map(
              (item: any, index: number) => {
                return (
                  <li
                    className="ltr:font-montserrat text-[#455150] mb-4"
                    key={index}
                  >
                    {item}
                  </li>
                );
              },
            )}
        </ol>
      </div>
      <ol className=" px-4 ml-4  list-decimal">
        {dataSection &&
          dataSection.disseminationoSecondfData.map(
            (item: any, index: number) => {
              return (
                <li
                  className="ltr:font-montserrat text-[#455150] mb-4"
                  key={index}
                >
                  {item}
                </li>
              );
            },
          )}
      </ol>
      <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
        {dataSection &&
          dataSection.disseminationoSecondfDataAlpha.map(
            (item: any, index: number) => {
              return (
                <li
                  className="ltr:font-montserrat text-[#455150] mb-4"
                  key={index}
                >
                  {item}
                </li>
              );
            },
          )}
      </ol>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.accordingly}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        {dataSection?.consent}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.submittingorProviding}
      </p>
      <ol className=" px-4 ml-4  list-decimal">
        {dataSection &&
          dataSection.consentAndOptingOut.map((item: any, index: number) => {
            return (
              <li
                className="ltr:font-montserrat text-[#455150] mb-4"
                key={index}
              >
                {item}
              </li>
            );
          })}
      </ol>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.strictSecurity}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.bestToProtect}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.youInform}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        {dataSection?.informationRequests}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.personalnformation}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        {dataSection?.cookies}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.aplication}
      </p>
      <ol className=" px-4 ml-4  list-decimal">
        {dataSection &&
          dataSection.cookiesList.map((item: any, index: number) => {
            return (
              <li
                className="ltr:font-montserrat text-[#455150] mb-4"
                key={index}
              >
                {item}
              </li>
            );
          })}
      </ol>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.alsoPossible}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        {dataSection?.modificationofPrivacypolicy}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.thisPrivacyPolicy}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4">
        {dataSection?.checkRegularly}
      </p>
      {showScroll && (
        <button
          onClick={scrollToTopOfBlock}
          className="fixed bottom-4 right-4 p-4 text-primary bg-white rounded-full shadow-xl  shadow-[#101E1D1A]"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

'use client';
import { ArrowUp } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const TermsConditionsSection = ({
  setScroll,
  dataConditions,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
  dataConditions: any;
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
    <div ref={blockRef} className="px-4 py-28 md:py-20 md:px-16 bg-[#F8F5F3]">
      <h2 className="capitalize font-bold text-2xl mb-4  text-primary ">
        {dataConditions?.titleWelcomeDaisy}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.readTheFollowing}
      </p>
      <p className="ltr:font-montserrat mb-4 text-[#455150] text-sm">
        {dataConditions?.onlinePlatform}
      </p>
      <p className="ltr:font-montserrat mb-4 text-[#455150] text-sm">
        {dataConditions?.byDownloading}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        {dataConditions?.titleGeneral}
      </h2>
      <p className="ltr:font-montserrat mb-4 text-[#455150] bg-white p-6 rounded-[8px] text-sm">
        {dataConditions?.generalDescription}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        {dataConditions?.termsConditions}
      </h2>
      <ul className="list-disc mx-4 ltr:font-montserrat text-sm mt-4 space-y-[10px]">
        {dataConditions &&
          dataConditions.termsConditionsSetBelow.map(
            (item: any, index: number) => {
              return <li key={index}>{item}</li>;
            },
          )}
      </ul>
      <ol
        className=" mx-4 mt-4 space-y-[10px] text-[#455150]"
        style={{ listStyle: 'lower-alpha' }}
      >
        {dataConditions &&
          dataConditions.termsConditionsSetBelowAbc.map(
            (item: any, index: number) => {
              return (
                <li key={index}>
                  <span className="font-semibold">{item.title}</span>
                  {item.description}
                </li>
              );
            },
          )}
      </ol>
      <ol className="list-decimal mx-4 mt-4 ltr:font-montserrat text-sm space-y-[10px] text-[#455150]">
        {dataConditions &&
          dataConditions.termsConditionsSetBelowDef.map(
            (item: any, index: number) => {
              return <li key={index}>{item}</li>;
            },
          )}
      </ol>
      <p className="ltr:font-montserrat mb-4 text-[#455150] mt-4 text-sm">
        {dataConditions?.becomingUser}
      </p>
      <p className="ltr:font-montserrat mb-4 text-[#455150]  text-sm">
        {dataConditions?.maySuspend}
      </p>
      <p className="ltr:font-montserrat mb-4 text-[#455150]  text-sm">
        {dataConditions?.usingOurApplication}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.eligibility}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.inConsideration}
      </p>
      <ol className="list-decimal mx-4 mt-4 ltr:font-montserrat text-sm space-y-[10px] text-[#455150]">
        {dataConditions &&
          dataConditions.termsConditionsEligibility.map(
            (item: any, index: number) => {
              return <li key={index}>{item}</li>;
            },
          )}
      </ol>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.payments}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.canMakePayments}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.Cancellation}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.underObligation}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.caseUser}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.cashbackOffers}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.daisyAplication}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.refundRequests}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.loyaltyTiers}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.daisySegments}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.opinionsComments}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.usersShare}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.protecting}
      </h2>
      <ol className="list-decimal mx-4 mt-4 ltr:font-montserrat text-sm space-y-[10px] text-[#455150]">
        {dataConditions &&
          dataConditions.termsConditionsProtectiongNumber.map(
            (item: any, index: number) => {
              return <li key={index}>{item}</li>;
            },
          )}
      </ol>
      <ol
        className=" mx-4 mt-4 ltr:font-montserrat text-sm space-y-[10px] text-[#455150]"
        style={{ listStyle: 'lower-alpha' }}
      >
        {dataConditions &&
          dataConditions.termsConditionsProtectiongAbc.map(
            (item: any, index: number) => {
              return <li key={index}>{item}</li>;
            },
          )}
      </ol>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.advertisements}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.benefit}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.forceMajeure}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.termsShall}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.privacyPolicy}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.usersareRequested}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.userInformation}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.exclusion}
      </h2>
      <ol className="list-decimal mx-4 mt-4 ltr:font-montserrat text-sm space-y-[10px] text-[#455150]">
        {dataConditions &&
          dataConditions.termsConditionsExclusion.map(
            (item: any, index: number) => {
              return <li key={index}>{item}</li>;
            },
          )}
      </ol>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.warranties}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.providePersonalInformation}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.indeminity}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.fullyIndemnify}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.offsite}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.offerIncreased}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.understandandAcknowledge}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.alsoAcknowledge}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.furtherAcknowledge}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.thirdParty}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.exceptAsOtherwise}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.notices}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.chooseProvide}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.copyright}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.materialContained}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.modifications}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.providerReserves}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.yourResponsibility}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.providedShallLiable}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.amendments}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.amendmentstheTermsandConditions}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.waiver}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.failureProvider}
      </p>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.provisionTermsConditions}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.violations}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.violationsInfringement}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.jurisdiction}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.termsConditionsLegallyBinding}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        {dataConditions?.entireAgreement}
      </h2>
      <p className="ltr:font-montserrat text-[#455150] mb-4 text-sm">
        {dataConditions?.termsConditionsConstitute}
      </p>
      <p className="ltr:font-montserrat text-[#455150] text-sm">
        {dataConditions?.maySubject}
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

'use client';
import { QASection } from '@/components/QASection/QASection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangePage } from '@/store/currentPage';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const Faq = () => {
  const [dataFAQ, setDataFAQ] = useState<any>();

  const { page } = useChangePage();
  const { lang } = useChangeLanguage();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance(`/faqs?locale=${lang}`);
        setDataFAQ(response?.data?.data[0]?.attributes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);
  let currentPage = page.replace('/', '');
  const capitalizeFirstLetter = (string: string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="bg-primary">
      <HeroPage
        title={dataFAQ?.listFaq?.[currentPage]?.title}
        description={dataFAQ?.listFaq?.[currentPage]?.subtitle}
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        secondDescription={dataFAQ?.listFaq?.[currentPage]?.description}
      />
      <QASection
        pageType={capitalizeFirstLetter(currentPage)}
        styles="!bg-primary !pt-10"
        stylesAcoordion="!bg-primaryBtn text-white border-none"
        titleHidden={true}
        blockTop="!mt-0"
        stylesAccordionItem="data-[state=open]:bg-white data-[state=open]:text-primary"
        sectionFQ={true}
        titleFraque={dataFAQ?.listFaq?.[currentPage]?.subtitle}
      />
    </div>
  );
};

export default Faq;

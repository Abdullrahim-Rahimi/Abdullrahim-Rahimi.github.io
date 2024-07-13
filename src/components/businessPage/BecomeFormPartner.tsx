import { useEffect, useState } from 'react';
import { ProfileForm } from '../formBusiness/FormBusiness';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

export const BecomeFormPartner = () => {
  const [titleFormBecome, setTitleFormBecome] = useState<any>();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/become-partners?locale=${lang}`,
        );
        setTitleFormBecome(response?.data?.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [lang]);
  return (
    <div className="bg-primary px-4 border-b border-primaryBtn pb-14">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-white text-[32px] leading-10">
          {titleFormBecome?.[0]?.attributes?.title}
        </h1>
        <p className="text-center text-[#D5D9D9]  mt-3 ltr:font-montserrat">
          {titleFormBecome?.[0]?.attributes?.subtitle}
        </p>
      </div>
      <ProfileForm />
    </div>
  );
};

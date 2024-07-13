'use client';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { MailIcons } from '@/assets/icons/mailIcons/mailicons';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUpBlog = ({ style }: { style?: string }) => {
  const [textSignUp, setSignUp] = useState<any>();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/sign-up-blocks?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setSignUp(data?.attributes?.signUpText);
    })();
  }, [lang]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(null);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setError('Please write valid email');
      return;
    }

    try {
      await axiosInstance.post('/sign-up-form-emails', {
        signUpEmail: email,
      });
      setEmail('');
      toast.success(textSignUp?.succesSend);
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast.error(error);
    }
  };

  return (
    <div
      className={`bg-[#DBCCC4] py-28 px-4 md:border-[#E5E7EB] md:rounded-[16px] md:mx-20 md:flex md:items-center md:p-[48px] ${style}`}
    >
      <div className="md:mr-10 md:w-[60%]">
        <h2 className="text-primary font-bold text-[24px] leading-[30px] capitalize md:text-[32px] md:leading-10">
          {textSignUp?.title}
        </h2>
        <p className="text-[#455150] ltr:font-montserrat text-base md:mt-4">
          {textSignUp?.description}
        </p>
      </div>
      <div className="md:flex md:flex-col md:justify-start md:w-[480px]">
        <div className="flex mt-12 mb-4 md:mt-0">
          <div className="relative w-full">
            <Input
              className="ltr:rounded-r-none ltr:border-r-none rtl:rounded-l-none rtl:border-l-none ltr:font-montserrat text-[#455150] pl-[46px]"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={textSignUp?.placeholderEmail}
            />
            <MailIcons style="absolute top-[11px] left-[12px]" />
          </div>
          <Button
            className="ltr:rounded-l-none rtl:rounded-r-none ltr:font-montserrat px-4 py-[14px] font-medium"
            onClick={handleSubscribe}
          >
            {textSignUp?.subscribeText}
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <p className="ltr:font-montserrat text-sm text-[#455150]">
          {textSignUp?.about}
          <span className="font-semibold"> {textSignUp?.privacy}</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

'use client';
import { SupportSection } from '@/components/contactsPage/SupportSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/contact-pages');
        setContacts(response.data.data[0].attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <HeroPage
        hiddenArrow={true}
        visibleDescriiton={false}
        title={contacts?.heroTitle}
        description={contacts?.heroSubtitle}
        heightScreen={false}
        styleSection="pb-[100px]"
        secondDescription={contacts?.heroDescription}
      />
      <SupportSection contacts={contacts?.listContact} />
    </div>
  );
};
export default Contacts;

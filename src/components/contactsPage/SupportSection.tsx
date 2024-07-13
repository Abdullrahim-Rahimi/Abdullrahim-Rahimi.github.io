import { FormContacts } from './FormContacts';
import { MessageIcons } from '../../assets/icons/messageIcons/MessageIcons';
import { PhoneIcon } from '../../assets/icons/phoneIcon/PhoneIcon';
import { SupportIcon } from '../../assets/icons/supportIcon/SupportIcon';

export const SupportSection = ({ contacts = [] }: { contacts: any }) => {
  return (
    <div className="bg-[#F8F5F3] pb-20 ">
      <div className="w-full h-[300px] md:h-[236px] bg-primary " />
      <FormContacts style="md:-translate-y-[235px] -translate-y-[299px] " />
      <ul className="flex flex-col justify-center items-center mx-auto px-4 gap-8  md:grid md:grid-cols-3 md:items-start md:-mt-[120px] -mt-[220px]">
        <li className="flex flex-col justify-center items-center text-center">
          <MessageIcons />
          <h3 className="mt-5 ltr:font-montserrat font-medium text-xl">
            {contacts[0]?.title}
          </h3>
          <p className="mt-1 ltr:font-montserrat text-[#455150] md:px-14">
            {contacts[0]?.subtitle}
          </p>
          <p className="text-[#A67F6B] mt-1 font-semibold leading-6">
            {contacts[0]?.contact}
          </p>
        </li>
        <li className="flex flex-col justify-center items-center text-center">
          <PhoneIcon />
          <h3 className="mt-5 ltr:font-montserrat font-medium text-xl">
            {contacts[1]?.title}
          </h3>
          <p className="mt-1 ltr:font-montserrat text-[#455150] md:px-14">
            {contacts[1]?.subtitle}
          </p>

          <p className="text-[#A67F6B] mt-1 font-semibold leading-6">
            {contacts[1]?.contact}
          </p>
        </li>
        <li className="flex flex-col justify-center items-center text-center">
          <SupportIcon />
          <h3 className="mt-5 ltr:font-montserrat font-medium text-xl">
            {contacts[2]?.title}
          </h3>
          <p className="mt-1 ltr:font-montserrat text-[#455150] md:px-14">
            {contacts[2]?.subtitle}
          </p>
        </li>
      </ul>
    </div>
  );
};

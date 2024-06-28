import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { MailIcons } from '@/assets/icons/mailIcons/mailicons';

export const SignUpBlog = ({ style }: { style?: string }) => {
  return (
    <div
      className={`bg-[#DBCCC4] py-28 px-4 md:border-[#E5E7EB] md:rounded-[16px] md:mx-20 md:flex md:items-center md:p-[48px] ${style}`}
    >
      <div className="md:mr-10 md:w-[60%]">
        <h2 className="text-primary font-bold text-[24px] leading-[30px] capitalize md:text-[32px] md:leading-10">
          Sign up for our Blog
        </h2>
        <p className="text-[#455150] font-montserrat text-base md:mt-4">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
      </div>
      <div className=" md:flex md:flex-col md:justify-start md:w-[480px]">
        <div className="flex mt-12 mb-4 md:mt-0">
          <div className="relative w-full">
            <Input
              className="rounded-r-none border-r-none font-montserrat text-[#455150] pl-[46px]"
              placeholder="Enter your email"
            />
            <MailIcons style="absolute top-[11px] left-[12px]" />
          </div>

          <Button className="rounded-l-none font-montserrat px-4 py-[14px] font-medium">
            Subscribe
          </Button>
        </div>
        <p className="font-montserrat text-sm text-[#455150]">
          We care about the protection of your data. Read our
          <span className="font-semibold"> Privacy Policy. </span>
        </p>
      </div>
    </div>
  );
};

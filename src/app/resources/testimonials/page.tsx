import { TestimonialsCustomerList } from '@/components/blogPage/testimonialsPage/ListTestimonials';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import Separator from '@/components/separator/Separator';

const CustomerTestimonials = () => {
  return (
    <>
      <HeroPage
        bredCrumbTitle="Customers’ Testimonials"
        bredCrumbDesription="Resources"
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title="TRUST"
        description="Customers’ Testimonials"
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <TestimonialsCustomerList />
      <div className="px-4 md:px-20 bg-[#F8F5F3]">
        <Separator className="bg-[#D5D9D9]" />
      </div>
      <OurPartnersSection stylePartners="!bg-[#F8F5F3] !mt-0" />
    </>
  );
};
export default CustomerTestimonials;

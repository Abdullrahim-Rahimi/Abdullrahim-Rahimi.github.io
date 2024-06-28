import { GetTheAppScan } from '@/components/getTheApp/GetTheApp';
import { HeroPage } from '@/components/heroSection/HeroSection';
import Separator from '@/components/separator/Separator';

const GetTheApp = () => {
  return (
    <>
      <HeroPage
        bredCrumbTitle="Get the app"
        bredCrumbDesription="Home"
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title="GET THE APP"
        description="Scan This With Your Phone"
        heightScreen={false}
        styleSection="pb-0 pt-6 px-[16px]"
        secondDescription="With a touch of mystery and excitement, we invite you to unlock hidden treasures of relaxation, ensuring each moment spent with us is nothing short of pure bliss."
      />
      <div className="px-4 bg-primary py-[46px] md:px-[400px]">
        <Separator className="bg-[#586968] " />
      </div>
      <GetTheAppScan />
    </>
  );
};

export default GetTheApp;

import { SubBanner, BannerBg } from "./banner.styles";

const Banner = () => {
  return (
    <>
      <BannerBg> 
        <div className='top'></div>
      </BannerBg>

      <SubBanner />
    </>
  );
};

export default Banner;

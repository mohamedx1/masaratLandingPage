import React from "react";
import Slider from "react-slick";
import "./slider.css";
import landing1 from "../../images/LandingSliderAssets/LandingSlider1.png";
import landing2 from "../../images/LandingSliderAssets/LandingSlider2.png";
import landing3 from "../../images/LandingSliderAssets/LandingSlider3.png";
import sectionWafe from "../../images/sectionWave.png";
// import landing1 from "";

function CustomSlide(props) {
  const { header, text, sr } = props;
  return (
    <div className='h-1/2 flex  justify-between mb-8 text-white sm:mt-5  '>
      <div className='w-1/2  relative md:block hidden   '>
        <img
          src={require("../../images/LandingSliderAssets/landingSliderbg.png")}
          alt=''
          className='  mx-auto relative -top-1 p-1 -z-10 '
        />
        <img
          className='  mx-auto absolute top-4 left-1 w-full rounded-2xl -rotate-1 '
          src={sr}
          alt=''
        />
        <img
          src={require("../../images/LandingSliderAssets/VectorSlider1.png")}
          alt=''
          className='absolute -bottom-6 -left-0 w-28'
        />
        <img
          src={require("../../images/LandingSliderAssets/VectorSlider2.png")}
          alt=''
          className='absolute -top-0 -right-12 w-24 '
        />
      </div>
      <div
        className=' xl:w-1/3 lg:w-1/3 md:w-fit sm:w-fit   md:text-start my-auto  md:mx-auto sm:mx-auto'
        dir='rtl'
      >
        <h2 className='text-4xl font-extrabold mb-10 start-0'>{header}</h2>
        <p className='text-slate-200 text-text-lg'>{text}</p>
      </div>
    </div>
  );
}

export default function ExplainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
  };
  return (
    <>
      <div className='bg-primary-300 pt-4'>
        <div className='slider-container w-3/4 mx-auto pb-10 mb-2   '>
          <Slider {...settings}>
            <CustomSlide
              index={3}
              header={"كما تسهم ميزات التلعيب"}
              text={
                "مثل نظام المكافآت والشهادات الافتراضية، في تحفيز الطلاب وتشجيعهم على التعلم، مما يجعل من منصة مسارات خيارًا رائدًا في تقديم تعليم مرن وشامل يلبي متطلبات العصر"
              }
              sr={landing3}
            />
            <CustomSlide
              index={1}
              header={"تجمع المنصة بين التفاعل الذكي والمتابعة الفورية"}
              text={
                "لتحاكي التواصل البشري وتدعم تحسين الأداء التعليمي لجميع الأطراف"
              }
              sr={landing1}
            />
            <CustomSlide
              index={2}
              header={"صُممت المنصة لتتكيف مع احتياجات الطلاب"}
              text={
                "حيث تُحلل أداءهم وتقدم محتوى تعليمي مخصص وفقًا لأسلوب تعلم كل طالب، سواء كان بصريًا، سمعيًا، أو حسيًا"
              }
              sr={landing2}
            />
          </Slider>
        </div>
        <div className='pt-8 mt-8 '>
          <img src={sectionWafe} className='' alt='' />
        </div>
      </div>
    </>
  );
}

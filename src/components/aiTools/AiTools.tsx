import React from "react";
import Slider from "react-slick";
import slider1 from "../../images/aiSlider/slider1.png";
import slider2 from "../../images/aiSlider/slider2.png";
import slider3 from "../../images/aiSlider/sliderimg.png";
import slider4 from "../../images/aiSlider/slider3.png";
import slider5 from "../../images/aiSlider/slider4.png";

function CustomSlide(props) {
  const { header, text, sr } = props;
  return (
    <>
      <div className='h-1/2 flex  justify-between mb-8   '>
        <div className=' w-32 my-auto md:w-40 relative    '>
          <img
            className=' mx-auto left-1 w-full rounded-2xl -rotate-1 '
            src={sr}
            alt=''
          />
        </div>
        <div
          className=' xl:w-1/3 lg:w-1/3 md:w-fit sm:w-fit ps-4   my-auto border-r-4 border-primary-300 '
          dir='rtl'
        >
          <h2 className='text-text-xl font-bold mb-5 start-2'>{header}</h2>
          <p className=' text-text-md'>{text}</p>
        </div>
      </div>
    </>
  );
}
export default function AiTools() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
  };
  return (
    <>
      <div className='mt-14'>
        <div className='text-center mb-12 rtl'>
          <h2 className='text-2xl font-bold  mb-4'>أدوات الذكاء الاصطناعي</h2>
          <p className=' text-gray-600 max-w-2xl mx-auto'>
            تعتمد منصة مسارات على مجموعة من أدوات الذكاء الاصطناعي والتقنيات
            المتقدمة التي تعزز من تجربة التعلم وتوفر دعمًا مخصصًا لكل طالب
          </p>
        </div>
        <div className='slider-container w-3/4 mx-auto pb-10 mb-2 '>
          <Slider {...settings}>
            <CustomSlide
              index={1}
              header={"باستخدام تقنية الشات بوت"}
              text={
                "يمكن للطلاب التفاعل مع معلم افتراضي ذكي يقدم توجيهات فورية ويجيب على الأسئلة بشكل مستمر، مما يحاكي تواجد معلم حقيقي"
              }
              sr={slider1}
            />
            <CustomSlide
              index={2}
              header={"تقنية الرؤية الحاسوبية"}
              text={
                "فتسمح بتتبع حضور الطلاب ومدى تفاعلهم وانتباههم أثناء الدروس، حيث يمكنها تحليل التعبيرات والانطباعات، مما يساهم في تعديل المحتوى وفقًا لحالة الطالب وتحسين مستوى التفاعل"
              }
              sr={slider2}
            />
            <CustomSlide
              index={3}
              header={"خوارزميات التكيف"}
              text={
                "على تحليل بيانات أداء كل طالب وتحديد نقاط القوة والضعف، ثم تخصيص المحتوى التعليمي بشكل مستمر لضمان تحقيق تقدم فعلي"
              }
              sr={slider3}
            />
            <CustomSlide
              index={4}
              header={"التصحيح الآلي للأسئلة المقالية "}
              text={
                "ليقدم للطلاب تغذية راجعة فورية حول إجاباتهم ويساعدهم على تحسين مهارات الكتابة والتحليل"
              }
              sr={slider4}
            />
            <CustomSlide
              index={5}
              header={"ميزة النطق الآلي"}
              text={
                "التي تحول النصوص المكتوبة إلى صوت مسموع، مما يدعم أساليب التعلم السمعي ويجعل التجربة أكثر شمولًا للطلاب"
              }
              sr={slider5}
            />
          </Slider>
        </div>
      </div>
    </>
  );
}

import React from "react";
import card1 from "../../images/mainServAssets/card1.png";
import card2 from "../../images/mainServAssets/card2.png";
import card3 from "../../images/mainServAssets/card3.png";
import cut from "../../images/mainServAssets/cut.png";

export default function Mainservices() {
  const services = [
    {
      icon: card1,
      title: "التحضير للاختبارات",
      description:
        "توفر المنصة تدريبات إضافية وفرص عرض مستقبلية تتيح للطالب التحكم في التوقيت وتطوير نمط التعلم المستدام. الاختبارات تشمل تسجيل الإجابات مباشرة وكلمات تدرب موجهة لتعزيز الفهم والاستيعاب الفعال",
    },
    {
      icon: card2,
      title: "تقرير تشخيصي فجوات التعلم",
      description:
        "تعتمد المنصة على تقنيات الذكاء الاصطناعي لتحليل أداء الطالب وتحديد نقاط القوة والضعف. تستند هذه التقارير المتخصصة والطلاب على فهم الفجوات التعليمية وتقدم خطة دراسية لتحسين الأداء",
    },
    {
      icon: card3,
      title: `شرح المحتوى من خلال أدوات  تكيف المحتوى`,
      description:
        "نتيح أدوات تكييف المحتوى لتقديم شروحات متخصصة لكل طالب، سواء كان ذلك من خلال تقنيات تعليمية سواء كان نصيا أو سمعيا. في جميع هذه الأدوات، نحن نركز على تعزيز فهم الطالب للمحتوى وتقديم تجربة تعليمية تناسب احتياجاته الفردية",
    },
  ];

  return (
    <>
      <div className='bg-primary-300 pb-10  '>
        <img src={cut} alt='cut' />
        {/* Header */}
        <div className='text-center mb-12 rtl '>
          <h2 className='text-2xl font-bold text-white mb-4'>
            الخدمات الأساسية
          </h2>
          <p className='text-white/90 max-w-2xl mx-auto'>
            نقدم منصة مسارات مجموعة من الخدمات الأساسية التي تساعدكم في تعزيز
            تجربة التعلم وتحقيق أفضل النتائج التعليمية لكل طالب
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {services.map((service, index) => (
            <div key={index} className='bg-white text-center rounded-xl'>
              <div className='p-8'>
                {/* Icon */}
                <div className='w-16 h-16  mb-4  inline-block -mt-14'>
                  <img src={service.icon} alt='' />
                </div>

                {/* Content */}
                <div className=' mt-4 text-center'>
                  <h3 className='text-text-xl font-bold mb-6 w-11/12 text-center mx-auto'>
                    {service.title}
                  </h3>
                  <p className='text-text-md text-gray-800 leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

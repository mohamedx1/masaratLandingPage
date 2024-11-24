import React from "react";
import Monitor from "../../images/mainAdvSection/Monitor.png";
import Gamepad2 from "../../images/mainAdvSection/Gamepad2.png";
import Wheelchair from "../../images/mainAdvSection/Wheelchair.png";
import Globe2 from "../../images/mainAdvSection/Globe2.png";
import LineChart from "../../images/mainAdvSection/LineChart.png";
import Smartphone from "../../images/mainAdvSection/Smartphone.png";
import Database from "../../images/mainAdvSection/Database.png";

export default function MasaratMianAdv() {
  const features = [
    {
      icon: Monitor,
      title: "تكيف المحتوى",
      description:
        "نظام تعليمي يتكيف على تكيف المحتوى وفقاً للمستوى وأسلوب تعلم كل طالب، مما يضمن تلبية احتياجات التعلم الفردية لديك",
    },
    {
      icon: Gamepad2,
      title: "التلعيب",
      description:
        "دمج بين التشجيع الطلاب من خلال نظام مكافآت وتحديات افتراضية واستجابات تعليمية",
    },
    {
      icon: Wheelchair,
      title: "ذوي الاحتياجات الخاصة",
      description:
        "كما تقدم المنصة دعماً برنامجاً لذوي الاحتياجات الخاصة حيث تقدم خدمات متخصصة تضمن المحتوى التعليمي لكل فئة مستهدفة وموصولة في التوصيل",
    },
    {
      icon: Globe2,
      title: "اللغات المتعددة",
      description:
        "تدعم المنصة اللغات المتعددة بناء على احتياجات المستخدمين في المنطقة العربية والشرق الأوسط، مما يتيح تجربة تعليمية مخصصة ومناسبة للغات المختلفة فيما بينها تحت الأداء",
    },
    {
      icon: LineChart,
      title: "تحليل الأداء باستخدام الذكاء الاصطناعي",
      description:
        "البحث عن تحسين الأداء باستخدام الذكاء الاصطناعي لتقديم تحليلات تعليمية مخصصة وتحليل بيانات التقدم مما يستخدم في تحسين العملية التعليمية بشكل مستمر",
    },
    {
      icon: Smartphone,
      title: "الوصول السهل من خلال الأجهزة الذكية والمحمولة",
      description:
        "تدعم المنصة الوصول السهل من خلال الأجهزة الذكية والمحمولة مما يتيح للطالب التعلم في أي وقت وكل مكان",
    },
    {
      icon: Database,
      title: "التكامل مع نظم إدارة التعليم",
      description:
        "التكامل مع أنظمة إدارة التعلم (LMS) والأنظمة والمؤسسات التعليمية مما يسهل استخدامها وتوظيفها كجزء من المنظومة التعليمية",
    },
  ];

  return (
    <div className=' p-8'>
      {/* Header */}
      <div className='text-center mb-12 rtl'>
        <h2 className='text-2xl font-bold  mb-4'>المزايا الرئيسية للمنصة</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          تتميز منصة مسارات بمجموعة من المزايا الأساسية التي تجعلها حلاً
          تعليمياً شاملاً ومتكاملاً إلى احتياجات مختلف فئات المستخدمين، لتسهيل
          نقل المزايا
        </p>
      </div>

      {/* Features List */}
      <div className='max-w-3xl mx-auto space-y-6'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='shadow-lg   rounded-md  p-2 hover:ms-8 transition-all'
          >
            <div className='p-6'>
              <div className='flex items-start gap-6 rtl'>
                <div className='md:w-24 md:h-24 w-12 h-12 rounded-lg  flex items-center justify-center flex-shrink-0'>
                  <img src={feature.icon} alt='' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold mb-2'>{feature.title}</h3>
                  <p className='text-md text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

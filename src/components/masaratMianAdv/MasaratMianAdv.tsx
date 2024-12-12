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
        " تتميز المنصة بقدرتها على تكيف المحتوى وفقًا لمستوى وأسلوب تعلم كل طالب، مما يضمن تلبية احتياجات التعلم الفردية ",
    },
    {
      icon: Gamepad2,
      title: "التلعيب",
      description:
        "دمج بين تشجيع الطالب من خالل نظام مكافآت وشهادات افتراضية ومسابقات تعليمية.",
    },
    {
      icon: Wheelchair,
      title: "ذوي الاحتياجات الخاصة",
      description:
        "تقدم المنصة دعمًا شاملًا لذوي الاحتياجات الخاصة، حيث تتيح خدمات مخصصة تجعل المحتوى التعليمي أكثر شمولًا وسهولة في الوصول.",
    },
    {
      icon: Globe2,
      title: "اللغات المتعددة",
      description:
        "تدعم المنصة اللغات المتعددة مع التركيز على تلبية احتياجات المستخدمين في المنطقة العربية والشرق الأوسط، مما يتيح تجربة تعليمية مخصصة وملائمة للغات المختلفة.",
    },
    {
      icon: LineChart,
      title: "تحليل الأداء باستخدام الذكاء الاصطناعي",
      description:
        "تعتمد المنصة على تحليل الأداء باستخدام الذكاء الاصطناعي لتقديم توصيات تعليمية مخصصة وتحليل بيانات التقدم، مما يسهم في تحسين العملية التعليمية بشكل مستمر.",
    },
    {
      icon: Smartphone,
      title: "الوصول السهل من خلال الأجهزة الذكية والمحمولة",
      description:
        "تدعم املنصةالوصول السهل من خالل األجهزةالذكيةواملحمولة،مما يتيح للطالب التعلم في أي وقت وأي مكان",
    },
    {
      icon: Database,
      title: "التكامل مع نظم إدارة التعليم",
      description:
        "تتكامل بسلاسة مع نظم إدارةالتعليم (LMS) في المدارس والمؤسسات التعليمية،مما يسهل استخدامها و توظيفها كجزء من النظام التعليمي القائم،ويعزز من كفاءة العملية التعليمية وتكاملها.",
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

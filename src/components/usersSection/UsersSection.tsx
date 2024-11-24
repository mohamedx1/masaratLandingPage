import React, { useState } from "react";
import institutions1 from "../../images/usersSectionAssets/institutions1.png";
import institutions2 from "../../images/usersSectionAssets/institutions2.png";
import teachers2 from "../../images/usersSectionAssets/teachers1.png";
import teachers1 from "../../images/usersSectionAssets/teachers2.png";
import parents2 from "../../images/usersSectionAssets/parents1.png";
import parents1 from "../../images/usersSectionAssets/parents2.png";
import students2 from "../../images/usersSectionAssets/students1.png";
import students1 from "../../images/usersSectionAssets/students2.png";
export default function UsersSection() {
  const [activeTab, setActiveTab] = useState("institutions");

  const tabs = [
    { id: "institutions", label: "للمؤسسات التعليمية" },
    { id: "teachers", label: "للمعلمين" },
    { id: "parents", label: "لولي الأمر" },
    { id: "students", label: "للطلاب" },
  ];

  const content = {
    institutions: {
      icon1: institutions1,
      icon2: institutions2,
      title: "للمؤسسات التعليمية",
      description1:
        "منصة مسارات تدعم المدارس والمؤسسات التعليمية في تحسين الأداء التعليمي عبر أدوات متقدمة تعتمد على الذكاء الاصطناعي. تقدم تقارير شاملة وموثقة عن أداء الطلاب، مما يساعد المعلمين على تخصيص التعليم بناءً على احتياجات كل طالب.",
      description2: `كما تتيح المنصة تكاملاً سهلاً مع أنظمة
 إدارة التعليم، مما يسهل دمجها في البنية
التحتية التعليمية ويعزز من كفاءة التعليم. توفر
 بيئة تعليمية مشجعة وتنافسية
تساعد المدارس على تحقيق نتائج تعليمية أفضل
، ما يعزز مكانتها كمؤسسة تعليمية رائدة`,
    },
    teachers: {
      icon1: teachers1,
      icon2: teachers2,
      title: "للمؤسسات التعليمية",
      description1: `تساعد منصة "مسارات المعلمين" في تقديم تجربة تعليمية مخصصة تركز على احتياجات كل طالب. باستخدام أدوات الذكاء الاصطناعي المتقدمة، يستطيع المعلمون تخصيص
    المواد الدراسية لكل طالب بناءً على تحليل أدائه
    مما يسهم في سد الفجوات التعليمية `,
      description2: `توفر المنصة تقارير مفصلة عن
 أداء الطلاب، تتيح للمعلمين متابعة تقدمهم
 في الوقت الفعلي وفهم نقاط القوة والضعف. كما تدعم
 التفاعل الاجتماعي بين الطلاب عبر منتديات تعلم
 ومجموعات نقاش، مما يشجع على المنافسة
 الإيجابية ويعزز من تفاعل الطلاب ودافعيتهم للتعلم`,
    },
    parents: {
      icon1: parents1,
      icon2: parents2,
      description1: `توفر منصة مسارات لأولياء الأمور وسيلة
مبتكرة لمتابعة تقدم أبنائهم بشكل شامل وفعّال
. من خلال تقارير شاملة، يتمكن الآباء من الاطلاع على
 أداء كل طالب، مما يوضح لهم نقاط القوة والضعف
 ومستوى أبنائهم في مختلف المواد الدراسية
 لفهم احتياجاتهم التعليمية بوضوح`,
      description2: ` تتيح المنصة أيضًا تلقي توصيات تعليمية
 مخصصة توجه أولياء الأمور حول
 كيفية دعم وتحسين التعلم في المنزل، سواء
 عبر أنشطة تعليمية أو مواد إضافية
. تقدم مسارات الأدوات والمعرفة
 الضرورية لدعم الأبناء وتحقيق أفضل النتائج التعليمية`,
    },
    students: {
      icon1: students1,
      icon2: students2,
      description1: `توفر منصة مسارات للطلاب تجربة تعليمية
 تفاعلية تجمع بين الذكاء الاصطناعي
 وأساليب التعلم المتنوعة، حيث
 تتكيف مع أساليب التعلم المختلفة كالأسلوب
 البصري والسمعي والحسي والكتابي، مما
 يسمح لكل طالب بالتعلم بالطريقة الأنسب له
 لتحقيق أفضل النتائج.`,
      description2: `وتعزز المنصة حماسة الطلاب من خلال
 نظام التلعيب، الذي يمنحهم مكافآت وشهادات
افتراضية عند تحقيق أهداف تعليمية أو إتمام تحديات
. كما يدعم التعلم التكيفي فيها تحديد فجوات التعلم
 تلقائياً، مما يتيح تقديم محتوى مخصص
 يقوي نقاط الضعف ويعزز الأداء والثقة بالنفس`,
    },
  };

  return (
    <div className='bg-purple-600 p-12'>
      <div className='md:max-w-4xl max-w-4xl  mx-auto'>
        {/* Tabs */}
        <div className=' flex md:w-fit  w-full   bg-secondary-300 rounded-t-xl   rtl'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` px-2 py-1 md:py-2 md:px-4 md:font-medium  md:text-text-md text-text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-white rounded-tl-lg  text-black"
                  : "text-black bg-secondary-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className='bg-white  mx-auto grid grid-cols-1 md:grid-cols-2 rounded-l-xl rounded-b-xl md:font-bold font-regular '>
          <div className='p-6 text-center '>
            <div className='flex justify-center mb-4 '>
              <div className='md:w-24 md:h-24 w-12 h-12 flex items-center justify-center'>
                <img className='' src={content[activeTab].icon1} alt='icon' />
              </div>
            </div>
            <div>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {content[activeTab].description1}
              </p>
            </div>
          </div>

          <div className='p-6 text-center '>
            <div className='flex justify-center mb-4'>
              <div className='md:w-24 md:h-24 w-12 h-12 flex items-center justify-center'>
                <img className='' src={content[activeTab].icon2} alt='icon' />
              </div>
            </div>
            <div>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {content[activeTab].description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

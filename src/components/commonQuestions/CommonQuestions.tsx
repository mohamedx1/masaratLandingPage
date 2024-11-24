import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};
const FAQAccordion: React.FC<{ item: FAQItem; index: number }> = ({
  item,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border rounded-lg px-4 py-4 bg-white shadow-sm mb-4 transition-all '>
      <button
        className='w-full text-right flex justify-between items-center focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className='text-md font-medium'>{item.question}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      {isOpen && (
        <div id={`faq-answer-${index}`} className='mt-2 text-sm text-gray-600'>
          {item.answer}
        </div>
      )}
    </div>
  );
};
export default function CommonQuestions() {
  const faqs: FAQItem[] = [
    {
      question:
        "كيف يمكن للمنصة تخصيص المحتوى التعليمي حسب مستوى وأسلوب تعلم كل طالب؟",
      answer:
        "منصة مسارات تعتمد على الذكاء الاصطناعي لتحليل أداء الطالب وتحديد نقاط القوة والضعف، مما يتيح تخصيص المحتوى التعليمي وفقًا لأسلوب تعلمه (بصري، سمعي، حسي، إلخ) وتقديم تجارب تعليمية تناسب مستواه بشكل فوري.",
    },
    {
      question: "هل يمكن للآباء والمعلمين متابعة تقدم الطلاب من خلال المنصة؟",
      answer:
        "نعم، توفر المنصة تقارير مفصلة عن أداء الطلاب وتقدمهم الأكاديمي، مما يسمح للآباء والمعلمين بمتابعة مستوى تقدمهم، الاطلاع على نقاط القوة والضعف، وتلقي توصيات تعليمية مخصصة.",
    },
    {
      question: "هل المنصة تدعم الطلاب ذوي الاحتياجات الخاصة؟",
      answer:
        "بالتأكيد، تدعم منصة مسارات الطلاب ذوي الاحتياجات الخاصة من خلال تخصيص المحتوى التعليمي وواجهة مستخدم سهلة الوصول، مما يوفر بيئة تعليمية شاملة ومتاحة لجميع الفئات.",
    },
    {
      question: "هل تتوافق المنصة مع نظم إدارة التعليم (LMS) في المدارس؟",
      answer:
        "نعم، تتكامل منصة مسارات بسلاسة مع نظم إدارة التعليم المستخدمة في المدارس، مما يسهل دمجها ضمن البنية التعليمية القائمة ويعزز من كفاءة استخدام الموارد التعليمية.",
    },
    {
      question: "ما هي طرق تحفيز الطلاب المستخدمة في المنصة؟",
      answer:
        "تعتمد المنصة على نظام التلعيب الذي يشمل المكافآت والشهادات الافتراضية والتحديات التعليمية، مما يشجع الطلاب على تحقيق أهدافهم الدراسية ويزيد من مستوى التفاعل والتحفيز خلال مسيرتهم التعليمية.",
    },
    {
      question: "هل يمكن للطلاب الوصول إلى المنصة عبر الأجهزة المحمولة؟",
      answer:
        "نعم، منصة مسارات متوافقة مع الأجهزة الذكية والمحمولة، مما يسمح للطلاب بالوصول إلى محتوى تعليمي مرن في أي وقت وأي مكان.",
    },
    {
      question: "هل تقدم المنصة تدريبًا أو إرشادًا للاستخدام الأولي؟",
      answer:
        "توفر منصة مسارات أدلة تعليمية وإرشادات مبسطة للاستخدام الأولي، لضمان أن يتمكن الطلاب والمعلمون من استيعاب وظائف المنصة واستخدامها بكفاءة منذ البداية.",
    },
    {
      question: "هل يمكن للطلاب التفاعل مع بعضهم البعض عبر المنصة؟",
      answer:
        "نعم، تتيح المنصة مجتمعات تعلم افتراضية ومنتديات نقاش، مما يسمح للطلاب بتبادل الأفكار والتفاعل مع بعضهم البعض، مما يعزز من بيئة التعلم الجماعي.",
    },
    {
      question: "كيف تدعم المنصة الطلاب في الاستعداد للاختبارات؟",
      answer:
        "تقدم منصة مسارات تدريبات عملية واختبارات محاكية للامتحانات الفعلية، مع تصحيح فوري وتوصيات مراجعة مخصصة لمساعدة الطلاب في تحسين مستواهم قبل الاختبارات.",
    },
    {
      question: "ما هي الخيارات المتاحة للاشتراك في المنصة؟",
      answer:
        "تتوفر خيارات اشتراك مرنة تناسب الأفراد والمؤسسات التعليمية، مما يسمح بتخصيص الخدمة وفقًا لاحتياجات المستخدمين المختلفة وتوفير قيمة مضافة للجميع.",
    },
  ];

  return (
    <div className='w-full max-w-3xl mx-auto p-6 rtl'>
      <div className='text-center mb-10'>
        <h2 className='text-2xl font-bold mb-4'>الأسئلة الشائعة</h2>
      </div>

      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <FAQAccordion key={index} item={faq} index={index} />
        ))}
      </div>
    </div>
  );
}

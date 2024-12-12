import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Settings, MessageSquare, ChartNetwork, ArrowLeft } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HowMasaratWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div className='min-h-screen  p-8 overflow-hidden'>
      <motion.div
        ref={ref}
        className='max-w-6xl mx-auto relative'
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className='text-center mb-12 rtl' variants={itemVariants}>
          <h2 className='text-2xl font-bold mb-4'>كيف تعمل منصة مسارات؟</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            تقدم منصة مسارات لك تجربة تعليمية متناغمة وفريدة من خلال خطوات ثلاث
            رئيسية
          </p>
        </motion.div>

        <div className='relative'>
          {/* Decorative Path */}
          <div className='absolute right-1/2 h-[600px] w-1 bg-gradient-to-b from-purple-200 to-purple-400 hidden md:block' />

          {/* Steps */}
          <div className='space-y-11 relative'>
            {/* Step 1 - Right */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col md:flex-row-reverse items-center gap-8'
            >
              <div className='hidden md:block w-1/2' />
              <div className='p-6 md:w-1/2 shadow-lg hover:shadow-xl transition-shadow bg-white/50 backdrop-blur rounded-lg'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-purple-100 '>
                    <ChartNetwork className='w-6 h-6 text-purple-600 ' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>تحليل الأداء</h3>
                    <p className='text-muted-foreground'>
                      نحن نقوم بجمع وتحليل بيانات تعلمك بشكل المستمر لتحديد
                      احتياجاتك التعليمية لضمان تلبية القوة والضعف الفردية
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Left */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col md:flex-row items-center gap-8'
            >
              <div className='hidden md:block w-1/2' />
              <div className='p-6 md:w-1/2 shadow-lg hover:shadow-xl transition-shadow bg-white/50 backdrop-blur rounded-lg'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-orange-100'>
                    <Settings className='w-6 h-6 text-orange-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>
                      تخصيص المحتوى التعليمي
                    </h3>
                    <p className='text-muted-foreground'>
                      بناءً على احتياجاتك التعليمية، نقوم بتقديم محتوى تعليمي
                      مخصص يناسب مستوى تقدمك
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 - Right */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col md:flex-row-reverse items-center gap-8'
            >
              <div className='hidden md:block w-1/2' />
              <div className='p-6 md:w-1/2 shadow-lg hover:shadow-xl transition-shadow bg-white/50 backdrop-blur rounded-lg'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-blue-100'>
                    <MessageSquare className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>
                      تغذية راجعة فورية
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      نقدم تغذية راجعة فورية عن كل خطوة في رحلتك التعليمية،
                      ونساعدك في تحديد نقاط القوة والضعف وتطوير مهاراتك بشكل
                      مستمر
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
      </motion.div>
    </div>
  );
}

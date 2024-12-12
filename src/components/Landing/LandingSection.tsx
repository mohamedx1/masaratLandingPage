import React from "react";
import "./landing.css";
import { useModal } from "../../context/modalProvider";

export default function LandingSection() {
  const { modalIsOpen, setModalIsOpen } = useModal();
  return (
    <div className='pt-20  '>
      <div className='container text-center mt-14 flex justify-center sm:mb-4  '>
        <div className='mt-14'>
          <h1 className='font-bold text-4xl  mb-4 '>
            منصة مسارات التعلم الذكي
          </h1>
          <p className='text-gray-600 text-wrap w-96 mx-auto text-text-md '>
            تقدم تجربة تعليمية فريدة وشخصية لكل متعلم باستخدام أحدث تقنيات
            الذكاء الاصطناعي.
          </p>
          <button
            className=' mt-6 md:mb-0 mb-6 text-text-sm font-medium px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-200  transition-colors'
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            كن اول المستفيدين
          </button>
        </div>
      </div>
      <div className='md:flex  hidden justify-around gap-72  landing bg-primary-300 md:bg-no-repeat   w-full  pb-20 -mt-20   '>
        <figure className='w-80  mb-10 -mt-28 md:block hidden  '>
          <img src={require("../../images/VectorLandingGirl.png")} alt='girl' />
        </figure>
        <figure className='w-80 -mt-28 order-1 md:block hidden '>
          <img
            src={require("../../images/VectorLandingGirl2.png")}
            alt='girl'
          />
        </figure>
      </div>
    </div>
  );
}

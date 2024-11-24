import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { useModal } from "../../context/modalProvider";
export default function NavBar() {

  // const [isOpen, setIsOpen] = useState(false);
    const { modalIsOpen, setModalIsOpen } = useModal();

  const [formData, setFormData] = useState({
    userType: "",
    applicantName: "",
    position: "",
    phone: "",
    email: "",
    schoolName: "",
    country: "",
    userEmail: "",
    userPhone: "",
    consent: false,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/users/submit-application/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSuccessMessage("تم ارسال طلبك بنجاح");
        setTimeout(() => {
          setModalIsOpen(false);
          setSuccessMessage("");
        }, 2000);
        setFormData({
          userType: "",
          applicantName: "",
          position: "",
          phone: "",
          email: "",
          schoolName: "",
          country: "",
          userEmail: "",
          userPhone: "",
          consent: false,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <nav className=' p-4 fixed w-full z-50 bg-white'>
      <div className='container flex justify-between'>
        <figure className='w-20 md:w-28 flex justify-center'>
          <img src={logo} alt='masarat' className='w-full' />
        </figure>
        <div className='flex md:gap-4 gap-1 ms-4'>
          <a
            href='http://localhost:3000/masarat/survay'
            target='_blank'
            rel='noopener noreferrer'
            className='md:text-text-sm text-text-xs md:font-medium font-light md:px-2 md:py-1 px-2 py-0 border border-black text-black rounded-xl hover:border-none hover:bg-slate-200 transition-all'
          >
            تسجيل الدخول
          </a>
          <button
            onClick={() => setModalIsOpen(true)}
            className='md:text-text-sm text-text-xs md:font-medium font-light md:px-2 md:py-1 px-2 py-0 bg-primary-300 text-white rounded-xl hover:bg-primary-200 transition-colors'
          >
            كن اول المستفيدين
          </button>

          {modalIsOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-scroll overflow-x-hidden  '>
              <div className='bg-white rounded-lg p-6 max-w-md w-full  rtl relative top-24 '>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className='absolute top-4 left-4 text-gray-500 hover:text-gray-700'
                >
                  <span className='sr-only'>Close</span>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>

                <div className='text-center mb-6'>
                  <h2 className='text-xl font-bold mb-2'>كن اول المستفيدين</h2>
                  <p className='text-sm text-gray-600'>
                    ابدأ رحلتك التعليمية - كن أول المستفيدين
                  </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label className='block text-sm mb-1'>تقديم ك</label>
                    <select
                      name='userType'
                      value={formData.userType}
                      onChange={handleChange}
                      className='w-full p-2 border rounded-md'
                      required
                    >
                      <option value=''>اختر</option>
                      <option value='school'>مدرسة</option>
                      <option value='educationalsServicesCompany'>
                        شركة خدمات تعليمية
                      </option>
                      <option value='teacher'>مدرس</option>
                      <option value='parent'>ولي امر</option>
                    </select>
                  </div>

                  <div className='space-y-4'>
                    <h3 className='font-semibold'>بيانات مقدم الطلب</h3>

                    <div>
                      <label className='block text-sm mb-1'>الاسم</label>
                      <input
                        type='text'
                        name='applicantName'
                        value={formData.applicantName}
                        onChange={handleChange}
                        className='w-full p-2 border rounded-md'
                        required
                      />
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm mb-1'>
                          الوظيفة الرئيسية
                        </label>
                        <input
                          type='text'
                          name='position'
                          value={formData.position}
                          onChange={handleChange}
                          className='w-full p-2 border rounded-md'
                          required
                        />
                      </div>
                      <div>
                        <label className='block text-sm mb-1'>رقم الهاتف</label>
                        <input
                          type='tel'
                          name='phone'
                          value={formData.phone}
                          onChange={handleChange}
                          className='w-full p-2 border rounded-md'
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm mb-1'>
                        البريد الالكتروني
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full p-2 border rounded-md'
                        required
                      />
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <h3 className='font-semibold'>بيانات المدرسة</h3>

                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm mb-1'>
                          اسم المدرسة
                        </label>
                        <input
                          type='text'
                          name='schoolName'
                          value={formData.schoolName}
                          onChange={handleChange}
                          className='w-full p-2 border rounded-md'
                          required
                        />
                      </div>
                      <div>
                        <label className='block text-sm mb-1'>البلد</label>
                        <select
                          name='country'
                          value={formData.country}
                          onChange={handleChange}
                          className='w-full p-2 border rounded-md'
                          required
                        >
                          <option value=''>اختر البلد</option>
                          <option value='السعودية'>
                            المملكة العربية السعودية
                          </option>
                          <option value='الإمارات'>
                            الإمارات العربية المتحدة
                          </option>
                          <option value='عمان'>عمان</option>
                          <option value='مصر'>مصر</option>
                        </select>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm mb-1'>
                          البريد الرسمي للمدرسة
                        </label>
                        <input
                          type='email'
                          name='userEmail'
                          value={formData.userEmail}
                          onChange={handleChange}
                          className='w-full p-2 border rounded-md'
                          required
                        />
                      </div>
                      <div>
                        <label className='block text-sm mb-1'>
                          الهاتف الرسمي للمتقدم
                        </label>
                        <input
                          type='tel'
                          name='userPhone'
                          value={formData.userPhone}
                          onChange={handleChange}
                          className='w-full p-2 border rounded-md'
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      name='consent'
                      checked={formData.consent}
                      onChange={handleChange}
                      className='rounded border-gray-300'
                    />
                    <label className='text-sm'>
                      حفظ المعلومات وإرسال البيانات للمنصة
                    </label>
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors'
                  >
                    إرسال الطلب
                  </button>
                  <div
                    className={`${
                      successMessage ? "bg-green-500/90" : ""
                    } rounded-xl p-4 `}
                  >
                    {successMessage}
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

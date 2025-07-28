import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (

    <div>

      <div className='text-center text-2xl text-gray-500'>
        <p>ABOUT <span className='text-gray-700'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        {/* ----Left side---- */}
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

        {/* ----Right side---- */}
        <div className='flex flex-col justify-center gap-6 md:w2/4 text-sm text-gray-600'>
            <p>Welcome to HKCare, your trusted parter in managing your healthcare needs Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati deleniti corrupti soluta illum vitae, voluptates officiis, voluptas asperiores distinctio consectetur delectus eligendi voluptatum quaerat, mollitia impedit aperiam amet quam.</p>
            <p>HKCare is Committed in Excellence in HealthCare Technology. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipisci rerum cupiditate modi, veniam, doloremque quas voluptatum ipsa aliquam, iure officia nam dignissimos consequatur provident ducimus cum quaerat accusamus saepe.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our Vision is to create Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum a ad, veritatis neque sit saepe obcaecati, corporis architecto unde dignissimos numquam sapiente, pariatur tempora sed ratione eum iusto. Dignissimos, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Steamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
      
    </div>

  )
}

export default About

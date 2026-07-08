import React from 'react'
import Heading from '../common/Heading'
import Icon from '../common/Icon'


const Form = () => {
  return (
    <section className="bg-[url('/assets/image/webp/from-bg.webp')] lg:min-h-264.5 bg-cover bg-center lg:pt-25 md:pt-20 sm:pt-15 pt-10 lg:pb-31.5 md:pb-25 sm:pb-18 pb-10 ">
      <div className='max-w-293 w-full mx-auto flex flex-col items-center justify-center px-4'>
        <div className="flex flex-row items-center gap-4">
          <div className="w-7.5 border-2 border-orange"></div>
          <Heading heading={"Contact Us"} vari={"Primary"} />
          <div className="w-7.5 border-2 border-orange"></div>
        </div>

        <p className='max-w-182.5 w-full font-normal md:text-[18px] sm:text-[16px]  text-[14px] leading-[144.44%] text-white text-center sm:mt-6 mt-4'>Do you have a question or would you like to request a quote? Contact us using the details below. Our team is ready to assist you and provide free advice on your project.</p>

        <div className='max-w-223 w-full flex flex-wrap items-center justify-center border-b border-orange px-3 py-2.5 lg:gap-10 md:gap-8 gap-5  sm:mt-7.5 mt-4'>
          <div className='flex flex-row items-center gap-2.5'>
            <Icon icon={"checkcircle"} />

            <h3 className='font-normal text-[18px] leading-[144.44%] text-orange'>Professional Staff</h3>
          </div>

          <div className='flex flex-row items-center gap-2.5'>
            <Icon icon={"checkcircle"} />

            <h3 className='font-normal text-[18px] leading-[144.44%] text-orange'>100% Satisfaction</h3>
          </div>

          <div className='flex flex-row items-center gap-2.5'>
            <Icon icon={"checkcircle"} />

            <h3 className='font-normal text-[18px] leading-[144.44%] text-orange'>Accurate Testing</h3>
          </div>

          <div className='flex flex-row items-center gap-2.5'>
            <Icon icon={"checkcircle"} />

            <h3 className='font-normal text-[18px] leading-[144.44%] text-orange'>Transparent Pricing</h3>
          </div>
        </div>

        {/* form */}

        <div className='w-full sm:p-8 p-4 bg-orange rounded-[10px] border-none lg:mt-15 md:mt-12 sm:mt-8 mt-6'>

          <h2 className='font-bold sm:text-[32px] text-2xl leading-[134.38%] text-white'>Request A Quote</h2>

          <p className='font-normal sm:text-[18px] text-[16px] leading-[144.44%] text-white sm:mt-4 mt-2'>Complete control over products allow us to our customers the best quality<br></br>
            prices and services. We take great pride in everything that we do in Jhontraktor</p>

          <form className="mt-6">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="rounded bg-white p-4 font-medium  sm:text-[18px] text-[16px] leading-[144.44%] outline-none"
              />

              <input
                type="text"
                placeholder="Phone"
                className="rounded bg-white p-4 font-medium sm:text-[18px] text-[16px] leading-[144.44%] outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded bg-white p-4 font-medium sm:text-[18px] text-[16px] leading-[144.44%] outline-none mt-4"
            />

            <textarea
              rows="5.5"
              placeholder="Message"
              className="w-full h-38 rounded bg-white p-4 font-medium sm:text-[18px] text-[16px] leading-[144.44%] outline-none resize-none mt-4"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white sm:px-6 sm:py-4 px-3 py-2 rounded-md flex items-center font-semibold sm:text-[18px] text-[14px] leading-[100%] sm:gap-4 gap-2 mt-6 hover:bg-white transition-all duration-500 cursor-pointer"
            >
              Send Message
              
              <Icon icon={"arrowright"} />
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Form;

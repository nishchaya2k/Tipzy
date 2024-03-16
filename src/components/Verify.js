import React from 'react';
import Verify1 from "../images/page31.jpeg"
import TipzyLogo from './TipzyLogo';




const Verify = () => {


    return (
        <div className='min-h-[768px] m-2 flex flex-col items-center justify-between bg-black p-[6px] rounded-3xl'>
            <div className='h-full'>
                <div className='max-sm:w-full w-[359px] h-[340px] flex justify-center overflow-hidden rounded-3xl bg-cover bg-top bg-no-repeat relative' style={{ backgroundImage: `url(${Verify1})` }}>
                    <TipzyLogo />
                    <div className='w-[250px] absolute left-1/2 -translate-x-1/2 bottom-6 leading-tight text-center flex justify-center  text-2xl font-bold text-white'>One quick pit stop! Tune In!
                    </div>
                </div>


                <div className='w-[330px] m-auto'>
                    <div className='mt-[41px] text-[14px] leading-[16.8px] font-bold text-white'>Enter your OTP to join the party.</div>


                    <div className='m-auto mt-[20px] flex justify-between text-xs font-medium text-white'>
                        Otp send to ****909
                        <span className='text-[#5C42FF]'>00:25</span>
                    </div>

                    <div className='w-[327px] h-[41px] m-auto mt-[16px] flex gap-[16.4px]'>
                        <div className='w-[41px] h-[41px] rounded-full bg-zinc-700'></div>
                        <div className='w-[41px] h-[41px] rounded-full bg-zinc-700'></div>
                        <div className='w-[41px] h-[41px] rounded-full bg-zinc-700'></div>
                        <div className='w-[41px] h-[41px] rounded-full bg-zinc-700'></div>
                        <div className='w-[41px] h-[41px] rounded-full bg-zinc-700'></div>
                        <div className='w-[41px] h-[41px] rounded-full bg-zinc-700'></div>
                    </div>


                </div>
            </div>
            <button className='h-10 w-[327px] mb-[41px] text-white rounded-3xl overflow-hidden bg-[#5C42FF]'>Continue</button>
        </div>
    );
};

export default Verify;

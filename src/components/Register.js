import React from 'react';
import Resgister1 from "../images/page21.jpeg";
import { FcGoogle } from "react-icons/fc";
import OtpInput from 'react-otp-input';
import { SiFacebook } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import TipzyLogo from './TipzyLogo';



const Register = () => {

    const navigate = useNavigate();
    return (
        <div className='h-full m-2 flex flex-col items-center bg-black p-[6px] rounded-3xl'>
            <div className='max-sm:w-full h-[413px] w-[374px] flex justify-center'>
                <div className='w-full h-[340px] overflow-hidden rounded-3xl bg-cover        bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${Resgister1})` }}>
                    <TipzyLogo />
                    <div className='w-[300px] absolute left-1/2 -translate-x-1/2 bottom-6 leading-tight flex justify-center  text-2xl font-bold text-white'>Enjoy your party</div>
                </div>
            </div>


            <div>
                <div className='text-[12px] mb-[13px] leading-[14.4px] font-medium text-white'>Enter your Phone No.</div>
                <div className='h-[43px] w-[327px] mb-[26px] rounded-3xl overflow-hidden'><input type='text' className='w-full h-full p-2 pl-4' /></div>
                <button className='h-10 w-[327px] mb-[41px] text-white rounded-3xl overflow-hidden bg-[#5C42FF]' onClick={() => { navigate('/Verification') }}>Continue</button>
            </div>

            <div className='w-[327px] h-[29px] mb-[22px] flex items-center justify-between'>
                <div className='h-[1px] w-36 bg-white'></div>
                <div className='text-white'>Or</div>
                <div className='h-[1px] w-36 bg-white '></div>
            </div>

            <div className='flex flex-col gap-[13px]'>
                <button className='h-10 w-[327px] flex items-center justify-center gap-3 rounded-3xl overflow-hidden bg-[#FFFFFF]'>
                    <FcGoogle className='text-[23.6px]' />
                    Sign in with Google
                </button>
                <button className='h-10 w-[327px] mb-[41px] flex items-center justify-center gap-3 rounded-3xl overflow-hidden bg-[#FFFFFF]'>
                    <SiFacebook className='text-[23.6px] bg-white text-blue-600' />

                    Sign in with Facebook
                </button>
            </div>
        </div>
    );
};

export default Register;

import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import {BsSearch} from 'react-icons/bs'
import { Button, ButtonSearch } from './Button';



export default function FooterH({headerValue, onClick, onChange}) {
  return (
    <div className="bg-slate-200 flex justify-center items-center mt-10 p-10 space-x-40">
       
        <ul className="text-gray-600 font-bold"> 
            <a><li>Blog</li></a>
            <a><li>About & Contact</li></a>
            <a><li>Work with us</li></a>
        </ul>
        <div className='flex flex-col spa text-center p-[10px]'>
            <h3 className="text-gray-600 font-bold">Newsletter signup</h3>
            <p className="text-gray-600 mb-[20px]">Never miss out on the latest news and updates</p>
            <div className='space-x-5'>
                <input 
                type="text" placeholder='Email adress' 
                className='rounded-full p-1' 
                headerValue={headerValue} 
                onChange={onChange}/>
             <ButtonSearch className='bg-white mt-[15px]' />

         
        </div>
        </div>  
        <div className="social-media-icons p-[10px] m-[10px]">
                <SocialIcon network="twitter" bgColor="#de5833" className="sm-icon m-[5px]" />
                <SocialIcon network="facebook" bgColor="#de5833" className="sm-icon m-[5px]" />
                <SocialIcon network="instagram" bgColor="#de5833" className="sm-icon m-[5px]"/>
            </div>
    </div>
  )
}

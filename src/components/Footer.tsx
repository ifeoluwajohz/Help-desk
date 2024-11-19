import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import '../App.css'

const Footer = () => {
  // const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false)
  const [error, serError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isChecked) {
      console.log('Form Submitted:', {email});
      serError('');
    }else{
      serError('Please argree to the terms and conditionsbefore submitting');
    }
  }
  return (
    <div>
        <div className="footer px-2 text-gray-600 flex justify-between p-6 md:py-4">
          <div className="logo left px-2 py-8">
            <h1 className="text-3xl text-gray-600 mb-8 font-semibold">Achievements</h1>
            <p className="mb-4 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ipsa accusamus maxime asperiores eligendi dolores facilis excepturi a omnis? Optio neque magni, provident doloribus eligendi, corrupti iure reprehenderit at eius sunt quae ex itaque tempore possimus dicta! Cum, animi?</p>
            <div className="social flex flex-start">
              <svg alt="TDA gmail-address gmail-link" className="w-10 pr-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
              </svg>
              <img alt="TDA facebook-page facebook-link" className="w-10 pr-4" width="25" height="25" src="https://img.icons8.com/ios-filled/50/facebook-new.png"/>
              <img alt="TDA twitter-page twitter-link" className="w-10 pr-4" width="25" height="25" src="https://img.icons8.com/ios/50/twitterx--v2.png"/>
              <a href="https://img.icons8.com/?size=100&id=69543&format=png&color=000000" title="tweet icons"></a>
            </div>
          </div>
          <div className="info px-4 py-8">
            <h1 className="text-2xl text-gray-600 mb-10 font-semibold">Information</h1>
            <div className="flex pb-2">
              <p className="">+2348026144324</p>
            </div>
            <div className="flex pb-2">
              <p className="">Tradedreamsa@gmail.com</p>
            </div>
            <div className="flex pb-2 items-baseline">
              <p className="">No 6, Lorem ipsum dolor mi corrupti velit.</p>
            </div>
          </div>
          <div className="subscribe left px-2 py-8">
            <h1 className="text-2xl text-gray-600 mb-8 font-semibold">Subscribe Now</h1>
            <form className="mb-0 flex">
              <input type="email" className="px-4 py-1  focus:outline-gray-300" placeholder='Email Address'/>
              <button className=" w-full bg-gray-600 rounded-none text-gray-100 text-center">Send</button>
              
            </form>
            <div className="flex">
                <input className="mr-2"  required type="checkbox" name="checkbox" id="" />
                
                <p className="text-sm">I agree to the <span className="underline">terms and conditions</span></p>
              </div>
          </div>
        </div>
        <div className="last mt-1 p-0 flex text-center flex-col-revers md:flex-row  md:justify-between">
          <p className="ml:2 md:ml-10 text-left ">2024 <span className="text-black"> BrandName.</span>All Rights Reserved. </p>
          <div className="lastflex flex text-xs leading-10 items-center flex-wrap md:text-sm ml:2 md:ml-10 mb-8 md:mb-0">
            <Link to="/about"><p className="px-4">WHO WE ARE</p></Link>|
            <Link to="/service"><p className="px-4">SERVICES</p></Link>|
            <Link to="/"><p className="px-4">OUR PARTNERS</p></Link>|
            <Link to="/"><p className="px-4">CAPABILITIES</p></Link>
          </div>
        </div>
    </div>
  )
}

export default Footer
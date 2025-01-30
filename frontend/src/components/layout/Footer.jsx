import { Link } from 'react-router-dom'
import crop from '../../assets/crop.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black p-3 px-8 text-white">
        <div className="flex flex-col justify-between items-center md:flex-row gap-3">
            <img src={ crop } alt="logo image" className='w-[150px]' />
            <ul className='flex gap-4'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/games'>Games</Link>
              </li>
              <li>
                <Link to='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/terms-conditions'>Terms & Conditions</Link>
              </li>
            </ul>

            <button className='bg-amber-500 p-2 rounded-lg hover:text-white hover:bg-neutral-600 cursor-pointer transition duration-300 ease-in-out'>
              <Link to='/contact-us'>Contact Us</Link>
            </button>
        </div>
        <div className="social-icons  py-4 gap-2 flex justify-center">
            <Link  className=" bg-gray-800 p-2 inline-block hover:text-blue-400">
              <FaFacebookF size={24} />
            </Link>
            <Link  className="bg-gray-800 p-2 inline-block hover:text-blue-400">
              <FaTwitter size={24} />
            </Link>
            <Link  className="bg-gray-800 p-2 inline-block hover:text-blue-400">
              <FaInstagram size={24} />
            </Link>
            <Link  className="bg-gray-800 p-2 inline-block hover:text-blue-400">
              <FaYoutube size={24} />
            </Link>
        </div>
        <div className='flex justify-center'>
          <span className='text-yellow-400 px-1'>© 2021 WPDeveloper</span>
          <span className='uppercase'>all right reserved</span>
        </div>
    </div>
  )
}

export default Footer
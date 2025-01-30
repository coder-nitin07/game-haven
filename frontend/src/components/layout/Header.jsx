import { Link } from "react-router-dom"
import crop from '../../assets/crop.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex bg-gray-700 text-white p-3 px-8 items-center relative justify-between">
      <img src={ crop } alt="logo image" className="w-[160px]" />
      <RxHamburgerMenu className="md:hidden cursor-pointer"  onClick={toggleMenu}  />
      <ul className="flex gap-2 hidden md:flex">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/games'>Games</Link>
        </li>
        <li>
          <Link to='/merchandise'>Merchandise</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
      </ul>

      {/* Mobile Menu (show only when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900  absolute top-[100%] flex flex-col p-2 w-full left-0 z-40" >
          <Link to='/' onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to='/games' onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Games</Link>
          <Link to='/merchandise' onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Merchandise</Link>
          <Link to='/news' onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">News</Link>
          <Link to='/contact-us' onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Contact Us</Link>
        </div>
      )}
    </div>
  )
}

export default Header
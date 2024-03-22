import './header.css';
import '../../media.scss'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {useEffect, useState} from "react";
import MobileMenu from "../../components/MobileMenu";


 const Header = () => {
     const [winCount, setWinCount] = useState(0)
     const [mobilemode,setMobilemode] =  useState(false);


     useEffect(() => {
         let winCount;
         document.addEventListener('scroll',(e)=>{
             setWinCount(current=>window.scrollY)
         })
     }, []);



     return (<>
         {mobilemode?<MobileMenu/>:

    <header className='header'>
   <div id="header__logo" className={winCount<50?'':'hidden'}>Southsidescript<span id='dot'>.</span><span id='underline'>_</span></div>
    <div id='header__nav-media' onClick={()=>{
        setMobilemode(!mobilemode)
    }}><img src="./nav.png" alt="" /></div>
   <nav className={winCount<50?'header__nav':'header__nav-mod'}>
      <ul className='header__nav__list'>

        <li className='nav__list-item'><Link to='/'>// home<sup>01</sup></Link></li>
        <li className='nav__list-item'><ScrollLink
      to="expertise"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>// skills<sup>02</sup></ScrollLink></li>
        <li className='nav__list-item'><ScrollLink to='work'
        spy={true}
        smooth={true}
        duration={500}
        offset={-220}>// work<sup>03</sup></ScrollLink></li>
        <li className='nav__list-item'><Link to='/contact'>//contact<sup>04</sup></Link></li>
      </ul>
   </nav>

  </header>
         }; </>
      )
}


export default Header;

    
   
    



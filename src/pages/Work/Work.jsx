import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './Work.css';




const Work = (props) =>{
  
//Hooks
const [pos,setPos]= useState(0);
let imgRef = useRef(); //useRef создает объект ref со свойством current в котором хранится ссылка на пободии {current:ссылка}

const SLIDES = [
           <img  ref={imgRef} src="./petProjectTwoRism.png" />,
           <img  ref={imgRef} src='./tme.png'/>,
           <img  ref={imgRef} src='./pet-projectRestaurant.png'/>];

           let actImg = document.querySelector('.myworks__main img'); 

function nextSlide(){
  
   
   imgRef.current.classList.add('mod__right')

  if(pos < 2){
    setPos(pos + 1);
  }else{
    setPos(0)
  }
  setTimeout(()=>actImg.classList.remove('mod__right'),500)
  
}

function prevSlide(){
 
   imgRef.current.classList.add('mod__left')

  if(pos > 0){
    setPos(pos - 1);
  }else{
    setPos(2);
  } 

  setTimeout(()=>actImg.classList.remove('mod__left'),500)
}

  return (
    <div
    className='mywork'
    id='work'>
        <div
        initial="hidden"
         whileInView="visible"
         className='mywork__logo element-animation'>
            <div>My <br /> Work</div>
            </div>


        <div initial="hiiden"  className='mywork__works'>
          <div className='prevarrow' onClick={prevSlide}><img src="./arrow.png" alt="" /></div>
              <div className='myworks__main'>{SLIDES[pos]}</div>
           <div className='nextarrow' onClick={nextSlide}><img src="./arrow.png" alt="" /></div> 
        </div>
    </div>
  )
}

export default Work;
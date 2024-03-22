import { useState } from 'react';
import { useEffect } from 'react';
import './body.css';
import Work from '../Work/Work';
import Footer from '../Footer/footer';
import '../../media.scss'
import {useInView} from 'react-intersection-observer';
import Icon from '../../components/Icon';
import Headings from '../../components/Headings';
import '../../modules/index.css'






    
const Body = () =>{

   
    //Hooks

    
    
    const {ref,inView} = useInView({
      threshold:.3, //Видимость объекта в процентах
    })

    const [idState,setidState] = useState('none');
    
  

    useEffect(()=>{setidState('block')});


    const ICON_BASE = {
      url:[{
        name:'js',
        link:"./jspng.png"
      },
      {
        name:'html',
        link:"./html.png"
      },
      {
        name:'figma',
        link:"./figma.png"
      },
      {
        name:'css',
        link:"./css.png"
      },
      {
        name:'sass',
        link:"./sass.png"
      },
      {
        name:'react',
        link:'./pngegg.png',
        id:'reactsvg'
      },
      {
        name:'redux',
        link:'./redux.png',
        id:'reduxsvg'
      }
      
    ]
    }




    return (
    <>

    <div className='backGroundTheme'></div>
    <main className='main'>

            <div className='main__body'>
               
                 <h1>Southsidescript</h1>
               
                 <p id='main__dev'>FRONT END  REACT DEVELOPER</p>           
                 </div>
                
        
                <div className="skills__map"> 
                   <div className='expertise' id='expertise'>
                    <div
                     className="expertise__icons">
                           <Icon src={ICON_BASE.url[5].link} id={ICON_BASE.url[5].id}/>
                           <Icon src={ICON_BASE.url[6].link} id={ICON_BASE.url[6].id}/>
                    </div>      
                  
                     <p className='expertise__about'>
                      <div>
                        <Headings sideState={true}>frameworks & <br /> libraries</Headings>
                       </div>    
        
                     </p>
                   </div>    
        
                   <div className='web__skills'>
                        <div className="web__skills__icons">
                          <Icon className='hello' src={ICON_BASE.url[0].link}/>
                          <Icon src={ICON_BASE.url[1].link}/>
                          <Icon src={ICON_BASE.url[2].link} id={'figma'}/>
                          <Icon src={ICON_BASE.url[3].link}/>
                          <Icon src={ICON_BASE.url[4].link}/>
                      
                            </div>
                        
                       <div>
                        <h4  ref={ref}  className={inView?'left_mod':''}>Languages and tools</h4>
                          
                        </div>
                        
                   </div>
                 
                   <div initial="hidden" whileInView="visible" className='other'>
                    <div className='other__logo'>
                      <Headings sideState={true}>other</Headings>
                    </div>
                    <div className='other__icons'>
                        <Icon src={"./git.png"}></Icon>
                    </div>
                   </div>
                 </div>
              
        
        
                
        
                <Work/>
                <Footer/>
        </main>
    </>
    
)}

export default Body;

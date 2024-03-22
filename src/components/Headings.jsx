import React from "react";
import { useInView } from "react-intersection-observer";

const Headings = (props) =>{
 const {ref,inView,entry} = useInView({
    threshold:0.5
 })  
    
 
 return(
    <h4 ref={ref} className={inView && props.sideState?'right_mod':'left_mod'}>{props.children}</h4>
 )
     
          
    
}


export default Headings; 
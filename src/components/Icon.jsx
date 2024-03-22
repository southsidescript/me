import React from "react";

import { useInView } from "react-intersection-observer";


const Icon = (props) =>{
 const {ref,inView} = useInView({
    threshold:0.2,

 })
    return (
        <img ref={ref} src={props.src} alt={props.alt} id={props.id} className={inView?'on_mod':'off_mod'}  loading='lazy'></img>
    )

}

export default Icon;
import React , {Component} from "react";
import './contact.css';
import '../../modules/cyberpunk.css'
import sendSupport from "../../bot/support";

const  Contact = () =>{

  return <>
  <div className="contact">
  <div className="contact__items"><a href=""><img src="./instagram.svg" alt="" id='instagram' /></a></div>
  <div className="contact__items"><a href=""><img src="./github-mark-white.svg" id="githubico" alt="" /></a></div>
  <div className="contact__items"><a href="https://t.me/southsidescrip" target="blank"><img src="./tmeicon.png" alt="" id="tmeicon"/></a></div>
 </div>

<div className="supportwindow">
   <form action="">
     <input type="text" className="cyberpunk" placeholder="@yourname" id="user_name" />
     <input type="text"  className="cyberpunk" placeholder="//yourmessage" id="user_message" />
     <button type="submit" className="cyberpunk green" onClick={sendSupport}>Send request</button>
   </form>
</div>
</> 

}

export default Contact;
import React from "react";
import './footer.css';
import sendRequest from "../../bot";
import '../../modules/cyberpunk.css'
import { Link } from "react-router-dom";

const Footer = () =>{
    
    
    return (
        <footer className="footer">
            <div className="email">
            <p>southsidescript2023@gmail.com</p>
           <div><form action="">
                <input type="text" placeholder="@examplegmail your message" className="cyberpunk_email" name="text" id="entermessage"/>
                <button type="submit" className="cyberpunk green" onClick={sendRequest}>Send</button>
            </form></div> 
         </div>       
          
         <div className="otheroptions"><p>Support and even more ways to contact us <span><Link to='/contact'>here</Link></span></p> </div>
        </footer>
    )
} 
    
export default Footer;

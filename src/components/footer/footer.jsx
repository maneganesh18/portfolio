import React from 'react';
import "./footer.css"

import { Container} from "react-bootstrap";

const Footer = () => {
    return (
        
        <Container className="foot " fluid={true}>
           
            <div className="last">
            &copy; {new Date().getFullYear()} Copyright: Ganesh Mane
            </div>
        </Container>
  
    );       
   
}
 
export default Footer;
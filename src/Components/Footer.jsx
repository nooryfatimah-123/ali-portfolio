// import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.png";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/git-hub.png";
// import navIcon3 from "../assets/img/docker-icon.png";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} sm={6}>
//             <img src={logo} alt="Logo" />
//           </Col> 
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="#"><img src={navIcon1} alt="Icon" /></a>
//               <a href="#"><img src={navIcon2} alt="Icon" /></a>
//               <a href="#"><img src={navIcon3} alt="Icon" /></a>
//             </div>
//             <p> All Rights Reserved By Ali Haider</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git-hub.png";
import navIcon3 from "../assets/img/docker-icon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>All Rights Reserved By Ali Haider</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

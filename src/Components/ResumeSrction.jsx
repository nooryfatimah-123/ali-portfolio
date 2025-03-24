import { Col } from "react-bootstrap";

  export const DownloadResume = () => { 
  const handleDownloadAndOpen = () => {
  
    window.open("/resume.pdf", "_blank");

    
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "My_Resume.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500); 
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <h3>Download My Resume</h3>
        <button onClick={handleDownloadAndOpen} className="download-btn">
          Download Resume
        </button>
      </div>
    </Col>
  );
};


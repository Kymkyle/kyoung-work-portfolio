/* Preloader styles */
#preloader {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #111; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
  color: white;
  font-family: Tahoma, sans-serif;
  font-size: 40px;
  user-select: none;
}
#preloader.fade-out {
  opacity: 0;
  pointer-events: none;
}
/* Protection: Disable text selection & image dragging */
body, html, .background-image, .main-content, .why-work-with-me-content, img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  user-drag: none;
}
/* Ensure everything fits within the screen dynamically */
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  font-family: Tahoma;
    color: #1B1B1B;
    flex-shrink: 1;
}
/* Layout */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page-section.section-1 {
  padding-top: 60px;
  background: linear-gradient(135deg, #ffe6f0, #ffcce0, #ffb3d1);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-blend-mode: screen;
  display: flex;
  flex-direction: row;
}
/* Header Style */
.header-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  background: rgba(255, 255, 255, 0.8); 
  backdrop-filter: blur(10px); 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); 
}
.header-right {
  display: flex;
  justify-content: flex-end !important;
}
.header-right a {
  color: white;
  margin-top: 1rem;
  transition: text-shadow 0.3s ease, transform 0.3s ease;
  font-weight: 600;
 /* Light text shadow to lift dark text */
  text-shadow:
    1px 1px 0 #ccc,       
    2px 2px 1px #bbb,      
   -1px -1px 0 #fff,       
   -2px -2px 1px #eee;     
}
.header-right  a:hover {
  font-weight: 700;
  transform: scaleX(1.2);              
  letter-spacing: 3px;                
  cursor: pointer;
  color: #4DA8DA !important;
}
/* Typography */
.name {
  font-size: 30px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  display: inline-block;
  transition: transform 0.3s ease, letter-spacing 0.3s ease, text-shadow 0.3s ease;
}
.position {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* Light text shadow to lift dark text */
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4),
              -1px -1px 1px rgba(255, 255, 255, 0.2);
}
/* Footer styling */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; /* full width */
  display: flex;
  background-color: #1B1B1B;
  color: white;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  z-index: 1000;
}
.container-footer {
  padding: 35px;
  width: 100%;
  max-width: 1320px; /* optional, aligns with Bootstrap container */
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #ffb3d1;
  border-radius: 4px;
}
/* Main Page */
.main-content {
  padding: 50px;
  text-align: justify;
}
.title {
  font-family: "Great Vibes", cursive;
  font-size: 2rem;
  font-weight: 700;
  color: #4b0039;
}
.about-me-content {
  display: flex;
  flex-direction: row; /* or column if stacking vertically */
  justify-content: space-between; /* space out items inside */
  align-items: center; /* vertically center items */
  flex-wrap: wrap; /* allows wrapping on smaller screens */
  max-width: 100%;
  width: 1100px;
  padding: 20px;
  gap: 10px;
}
.about-me-content1 {
  padding-left: 20px;
  font-weight: 700;
}
.about-me-content2 {
  padding-left: 20px;
  padding-top: 5px;
  padding-left: 10px;
}
.about-me-content1-right-side {
  display: flex;
  gap: 50px;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
}
.image-profile {
  margin-top: 100px;
}
.btn-success {
  background-color: #4b0039;
  border: none;
}
.btn-info {
  display: flex;
  color: white;
  background-color: #d63384;
  border: none;
}
.btn-success:hover,
.btn-info:hover {
  background-color: #e75480; /* example custom color */
  color: white;
  border-color: #e75480;
  transform: scale(1.1, 1); /* stretch horizontally */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  animation: stretch 0.3s ease;
}
/* Default hamburger is hidden */
.hamburger {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}
/* Keep your original CSS here */
/* iPad Pro 12.9" Portrait (1024px) */
@media (max-width: 1024px) and (min-height: 1366px) {
  .w-100 {
    display: flex;
    flex-direction: column !important;
  }
  .name {
    font-size: 40px !important;
  }
  .position {
    font-size: 18px !important;
  }
  .header-right {
    display: flex;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    gap: 120px !important;
    font-size: 30px !important;
  }
  .text-a {
    display: flex;
    font-size: 25px !important;
    
  }
  .footer {
    font-size: 25px !important;
  }
  .page-section.section-1 {
    display: flex;
    flex-direction: column;
  }
  .main-content {
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    min-width: 980px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .title {
    font-size: 40px;
  }
  .about-me-content1,
  .about-me-content,
  .about-me-content2 {
    font-size: 25px;
  }
  .img-profile {
    width: 300px !important;
    margin-top: -120px;
    margin-left: 70px !important;
    margin-bottom: 150px !important;
  }
  .header-right a {
    font-size: 18px;
  }
  .about-me-content1-right-side {
    display: flex;
    flex-direction: column;
    gap: 30px !important;
  }
  .btn-success, .btn-info {
    font-size: 25px !important;
    justify-content: center;
  }
}
/* iPad Pro 11" Portrait (834px)(width 1194)*/
@media (max-width: 834px) {
  .w-100 {
    display: flex;
    flex-direction: column !important;
  }
  .name {
    font-size: 40px !important;
  }
  .position {
    font-size: 18px !important;
  }
  .header-right {
    display: flex;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    gap: 70px !important;
    font-size: 30px !important;
  }
  .text-a {
    display: flex;
    font-size: 25px !important;
    
  }
  .footer {
    font-size: 25px !important;
  }
  .main-content {
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    min-width: 780px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .title {
    margin-top: 10px !important;
    font-size: 40px !important;
  }
  .about-me-content1,
  .about-me-content,
  .about-me-content2 {
    font-size: 24px;
  }
  .about-me-content {
    flex-direction: column;
    padding: 15px;
  }
  .img-profile {
    width: 200px;
    margin-top: -150px !important;
    margin-left: 70px !important;
    margin-bottom: 150px;
  }
  .about-me-content1-right-side {
    display: flex;
    flex-direction: column;
    gap: 30px !important;  
  }
  .btn-info, .btn-success {
    margin-top: 30px !important;
    font-size: 25px !important;
    width: 400px;
  }
.page-section.section-1 {
  display: flex;
  flex-direction: column;
}
}
/* iPad Air Portrait (820px) */
@media (max-width: 820px) {
  .w-100 {
    display: flex;
    flex-direction: column !important;
  }
  .name {
    font-size: 40px !important;
  }
  .position {
    font-size: 18px !important;
  }
  .header-gradient {
    display: flex !important;
    flex-direction: column !important;
  }
  .header-right {
    display: flex;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    gap: 80px !important;
  }
  .text-a {
    display: flex;
    font-size: 20px !important;
    
  }
  .footer {
    font-size: 25px !important;
  }
  .page-section.section-1 {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 1.8rem;
    margin-top: -10px !important;
  }
  .about-me-content1,
  .about-me-content,
  .about-me-content2 {
    font-size: 22px;
  }
  .btn-info, .btn-success {
    font-size: 25px !important;
    font-weight: 400 !important;
    gap: 25px !important;
    margin-top: 0 !important;
  }
  .btn-success {
    margin-top: 20px !important;
  }
  .btn-info {
    width: 480px;
  }
  .img-profile {
    width: 190px;
    margin-top: -120px !important;
    margin-bottom: 150px !important;
    margin-left: 50px !important;
  }
  .header-right a {
    font-size: 17px;
  }
}
/* iPad Mini Portrait (768px) */
@media (max-width: 768px) and (min-height: 1024px) {
  .content-right {
    display: flex;
    width: 570px;
    height: 320px;
    justify-content: flex-start;
  }
  .w-100 {
    display: flex;
    flex-direction: column !important;
  }
  .header-right {
    display: flex;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    gap: 80px !important;
  }
  .text-a {
    display: flex;
    font-size: 20px !important;
  }
  .footer {
    font-size: 20px !important;
  }
  .name {
    font-size: 24px !important;
  }
  .position {
    font-size: 14px !important;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-right: 20px !important;
    padding: 0;
  }
  .image-profile {
    margin-top: 0;
  }
  .img-profile {
    margin-top: 20px !important;
    width: 180px;
  }
  .about-me-content1,
  .about-me-content,
  .about-me-content2 {
    font-size: 22px;
    min-width: 690px;
  }
  .btn-info {
    width: 450px !important; 
  }
  .btn-success {
    width: 350px !important;  
  }
  .title {
    font-size: 1.6rem;
    text-align:left !important;
    margin-top: 20px !important;
  }
  .about-me-content1-right-side {
    display: flex;
    flex-direction: column !important;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    position: static !important; /* or relative */
  }
}
/* Responsive Styles for Tablets (≤ 768px) */
@media (max-width: 768px) {
  .about-me-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    width: 700px;
    margin-bottom: 20px;
  }
  .name {
    font-size: 24px;
  }
  .position {
    font-size: 14px;
  }
  .title {
    margin-top: 30px !important;
    margin-bottom: -10px;
    font-size: 1.5rem;
    text-align:left;
  }
  .about-me-content1,
  .about-me-content,
  .about-me-content2 {
    font-size: 18px;
  }
  .img-profile {
    width: 200px;
    height: auto;
    margin-left: 50px !important;
  }
  .header-right a {
    font-size: 16px;
    margin-top: 0.8rem;
  }
  .container-footer {
    padding: 35px;
  }
  .about-me-content1-right-side {
    width: 390px;
    position: static;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    z-index: 999; /* ensures it stays above other content */
  }
  .btn-info, .btn-success {
    display: flex;
    justify-content: flex-start;
    font-size: 20px !important;
  }
}
/* Responsive Styles for Tablets (≤ 1024px) */
@media (max-width: 1024px) {
  .main-content {
    width: 80%;
    margin-right: 0;
    padding-right: 10px;
    padding-left: 10px;
  }
  .img-profile {
    width: 200px;
    height: auto;
    margin-left: -10px;
  }
  .title {
    margin-top: 10px;
    margin-left: 20px;
  }
  .about-me-content1-right-side {
    margin-top: -10px !important;
    margin-left: 30px;
  }
}
/* Responsive Styles for Tablets (≤ 1440px) */
@media (max-width: 1440px) {
  .main-content {
    margin-right: 0;
    padding-right: 10px;
    padding-left: 20px;
  }
  .img-profile {
    width: 270px;
    height: auto;
    margin-left: 0;
  }
  .title {
    margin-top: 20px;
    margin-left: 20px;
  }
  .about-me-content1-right-side {
    margin-top: 20px;
    margin-left: 20px;
  }
  .header-right a {
    font-size: 20px;
  }
}
/* On screens above 400px, show normally and hide hamburger */
@media (min-width: 401px) {
  .hamburger {
    display: none;
  }
  .header-right {
    display: flex !important;
    position: static;
    flex-direction: row;
    gap: 2rem;
    box-shadow: none;
    padding: 0;
  }
}
/* Responsive Styles for Mobile Phones (≤ 400px) */
@media (max-width: 400px) {
  .page-section.section-1 {
    display: flex;
    flex-direction: column;
  }
  .title {
    display: flex;
    justify-content:flex-start;
    margin-top: -90px !important;
    margin-left: -10px;
    font-size: 25px;
  }
  .about-me-content {
    flex-direction: column;
    text-align: justify;
    width: 350px !important;
    margin-left: -15px;
    font-size: 16px !important;
  }
  .about-me-content1,
  .about-me-content2 {
    padding: 12px;
    text-align:justify;
    font-size: 16px !important;
    width: 350px !important;
    padding: 0;
    margin-right: -20px !important;
  }
  .main-content {
    padding: 20px 15px;
    font-size: 14px;
    width: 100%;
  }
  .hamburger {
    display: block;
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 36px;
    background: none;
    border: none;
    color: #333;
    z-index: 1100;
  }
  .w-100,
  .header-gradient {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between !important;
  }
  .name {
    font-size: 24px !important;
  }
  .position {
    font-size: 14px !important;
  }
  .header-right {
    display: none !important; /* Hidden by default */
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    top: 50px;
    right: 10px;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    column-gap: 25px;
  }

  .header-right.show {
    display: flex !important;
    text-align: left;
    gap: 25px !important;
    background-color:#1B1B1B;
  }

  .header-right a {
    margin: 0;
    width: 100px;
    text-shadow: none;
    box-shadow: none;
    font-family: Tahoma, sans-serif;
    color: white !important;
    font-weight: 500;
    font-size: 16px !important;
  }
  .header-container {
    flex-direction: column;
    padding: 10px;
  }
  .text-a {
    text-align: left !important;
    line-height: 24px;
  }
  .container-footer {
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
  .about-me-content1-right-side {
    width: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: -30px !important;
    margin-bottom: -30px;
    padding-top: 30px;
    margin-left: 0;
    gap: 10px;
    color: white;
    z-index: 999; /* ensures it stays above other content */
  }
  .btn-success,
  .btn-info {
    font-size: 16px !important;
    padding: 10px 16px;
    width: auto;
  }
  .img-profile {
    margin-left: 40px !important;
    margin-top: -60px !important;
    margin-bottom: 120px !important;
    width: 250px;
    height: auto;
  }
  .about-me-content,
  .about-me-content1,
  .about-me-content2 {
    font-size: 18px;
  }
}
/* Responsive Styles for Mobile Phones (≤ 360px) */
@media (max-width: 360px) {
  .about-me-content, .about-me-content1, .about-me-content2 {
    width: 300px !important;
    margin-left: -5px;
  }
  .about-me-content1-right-side {
    display: flex;
    justify-content: center !important;
    align-items: center;
  }
  .btn-info, .btn-success {
    justify-content: center;
    width: 300px;
    font-size: 16px !important;
  }
}
/* Responsive Styles for Mobile Phones (≤ 320px) */
@media (max-width: 320px) {
  .header-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header-right {
    margin-top: auto; /* Push it to the bottom of .header-left */
    flex-direction: column;
    align-items: center;
    column-gap: 10px;
    font-size: 16px;
    line-height: 0.5px;
    display: flex;
    margin-left: 90px;
  }
  .container-footer {
    font-size: 14px;
  }
  .about-me-content1-right-side {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    gap: 10px;
    color: white;
    z-index: 999; /* ensures it stays above other content */
  }
  .btn-info, .btn-success {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 250px;
    margin-left: -70px;
  }
  .about-me-content,
  .about-me-content1,
  .about-me-content2 {
    font-size: 16px !important;
    width: 280px !important;
    margin-left: -20px;
  }
  .title {
    font-size: 25px !important;
  }
  .img-profile {
    margin-left: 30px !important;
    margin-top: -160px;
    margin-bottom: 80px;
    width: 250px;
    height: auto;
  }
  .header-left {
    display: flex !important;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
}

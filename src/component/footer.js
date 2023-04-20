import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#990019] py-5 px-[30px] md:px-[80px] lg:px-[130px]">
      <div className="wrapper reveal">
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="flex-2 text-white pr-4">
            <img src="/oaLogo.png" alt="" />
            <h4>Enriching lifes...</h4>
            <p>
              OA Initiative is a non-profit organization dedicated to improving
              the lives of individuals and families affected by sickle cell
              disease.
            </p>
          </div>
          <div className="flex-grow flex lg:flex-row md:flex-row flex-col gap-4  justify-between text-white w-full">
            <div class="box-item">
              <h4>Quick Link</h4>
              <ul>
                <li>
                  <p>How it works</p>
                </li>
                <li>
                  <p>Benefits</p>
                </li>
                {/* <li>
              <a href="#review">What customers say</a>
            </li> */}
                <li>
                  <p>FAQ</p>
                </li>
              </ul>
            </div>
            <div className="box-item">
              <h4>Contact</h4>
              <ul className="contact">
                <li>
                  <i className="fas fa-phone"></i>
                  <p>1 800 234 3432</p>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <p>10 Afeez Jakande Alausa, Ikeja, Lagos.</p>
                </li>
                <li>
                  <i class="fas fa-briefcase"></i>
                  <p>ao-initiative.com</p>
                </li>
              </ul>
            </div>
            <div className="box-item">
              <h4>Legal</h4>
              <ul>
                <li>
                  <p>Terms of Use</p>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright">© OA.Initiative 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
function Footer() {
  const socialItems = [
    {
      name: "twitter",
      logo: <i className="ri-twitter-fill col-1 social-icon"></i>,
      key: 1,
    },
    {
      name: "linkedin",
      logo: <i className="ri-linkedin-box-fill col-1 social-icon"></i>,
      key: 2,
    },
  ];
  return (
    <div className="footer-component row">
      <div className="footer-logo col-2">find me on:</div>
      <div className="footer-items col-2 row">
        {socialItems.map((m, i) => {
          return <span key={i}>{m.logo}</span>;
        })}
      </div>
      <div className="col-7"></div>
      <div className="footer-username col-1">
        @arpitj007<i className="ri-github-fill"></i>
      </div>
    </div>
  );
}

export default Footer;

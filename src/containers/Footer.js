import React from "react";

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container center footer">
        <span>Made with ❤️ by Gaurav Prakash </span>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ergauravprakash@gmail.com" target="_blank" className='footer-email'>
            <i className="fa fa-envelope" style={{fontSize:'24px',color:'rgb(4, 86, 179)'}}></i>
            <span style={{textDecoration: 'none', color: '#666'}}> : ergauravprakash@gmail.com</span>      
          </a>
      </div>
    </div>
  );
};

export default Footer;
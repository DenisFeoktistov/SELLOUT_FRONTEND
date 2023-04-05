import React from 'react'

function Footer() {
    return (
        <footer className="footer">
    <h2 className="footer__title">Footer</h2>
    <form className = "footer__form"> 
        <input type="text" name="text" className="footer__email" placeholder="Your email adress"/>
        <input type="submit" name="submit" className="footer__button" value="Sign UP"/>
      </form>
</footer>);
}

export default Footer;
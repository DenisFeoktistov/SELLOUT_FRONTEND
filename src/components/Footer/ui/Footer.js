import React, {useState} from 'react'
import telegramLogo from '../images/telegram.svg'

function Footer() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // handleEmailChange function will update the email state when the user types in the input field
    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    // handleFormSubmit function will validate the email input when the form is submitted
    const handleFormSubmit = event => {
        event.preventDefault();
        if (email === '') {
            setErrorMessage('Заполните поле');
        }
        else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setErrorMessage('Введите корректную почту');
        } else {
            setErrorMessage('');
            // Submit the form or perform any other actions you need to here
        }
    };

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__top__sellout">
                    <div className="footer__title">Sellout</div>
                    <div className="footer__top__sections">
                        <a href="/info/about" className="footer__top__one-section">О нас</a>
                        <a href="/info/blog" className="footer__top__one-section">Блог</a>
                        <a href="/info/contacts" className="footer__top__one-section">Контакты</a>
                    </div>
                </div>
                <div className="footer__top__help">
                    <div className="footer__title">Помощь</div>
                    <div className="footer__top__sections">
                        <a href="/info/how_do_we_work" className="footer__top__one-section">Как мы работаем?</a>
                        <a href="/info/garanties" className="footer__top__one-section">Гарантии</a>
                        <a href="/info/payment" className="footer__top__one-section">Оплата</a>
                        <a href="/info/return" className="footer__top__one-section">Возврат</a>
                    </div>
                </div>
                <div className="footer__top__questions">
                    <div className="footer__title">Остались вопросы?</div>
                    <div className="footer__top__sections">
                        <a href="/info/FAQ" className="footer__top__one-section">FAQ</a>
                        <div className="footer__top__one-section footer__top__one-section-nolink">Или свяжитесь с нами:</div>
                        <a href="mailto:support@sellout.su" className="footer__top__one-section">Почта: support@sellout.su</a>
                        <a href="tel:89161149227" className="footer__top__one-section">Телефон: +7(916)114-92-27</a>
                    </div>
                </div>
            </div>
            <div className="footer__middle">
                <div className="footer__middle__social">
                    <div className="footer__title">Мы в социальных сетях:</div>
                    <div className="footer__middle__sections">
                        <a href="https://t.me/markermann">
                            <img src={telegramLogo}/>
                        </a>
                        <a href="https://t.me/markermann">
                            <img src={telegramLogo}/>
                        </a>
                        <a href="https://t.me/markermann">
                            <img src={telegramLogo}/>
                        </a>
                    </div>
                </div>
                <div className="footer__middle__mail">
                    <div className="footer__title">Подпишитесь на рассылку, чтобы быть в курсе новых поступлений и акций:</div>
                    <form className="footer__middle__form" onSubmit={handleFormSubmit} noValidate>
                        <input className="footer__middle__form-input" type="email" id="email" name="email" placeholder="Ваш e-mail"
                               required value={email} onChange={handleEmailChange}/>
                        <button className="footer__middle__form-submit" type="submit"></button>
                    </form>
                    {errorMessage && <div className="footer__middle__form error-message" id="email-error">{errorMessage}</div>}
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__rights">
                    <p>© SELLOUT, 2023</p>
                </div>
                <div className="footer__bottom__docs">
                    <a href="/docs/politics">Политика конфиденциальности</a>
                    <a href="/docs/oferta">Публичная оферта</a>
                </div>
            </div>
        </footer>);
}

export default Footer;
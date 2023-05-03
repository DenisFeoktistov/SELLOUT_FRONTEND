import React, { useState } from "react";
import telegramLogo from "../images/telegram.svg";

function Footer() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // handleEmailChange function will update the email state when the user types in the input field
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // handleFormSubmit function will validate the email input when the form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      setErrorMessage("Заполните поле");
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setErrorMessage("Введите корректную почту");
    } else {
      setErrorMessage("");
      // Submit the form or perform any other actions you need to here
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__sellout}>
          <div className={styles.footer__title}>Sellout</div>
          <div className={styles.footer__top__sections}>
            <a
              href="/info/about"
              className={styles["footer__top__one-section"]}
            >
              О нас
            </a>
            <a href="/info/blog" className={styles["footer__top__one-section"]}>
              Блог
            </a>
            <a
              href="/info/contacts"
              className={styles["footer__top__one-section"]}
            >
              Контакты
            </a>
          </div>
        </div>
        <div className={styles.footer__top__help}>
          <div className={styles.footer__title}>Помощь</div>
          <div className={styles.footer__top__sections}>
            <a
              href="/info/how_do_we_work"
              className={styles["footer__top__one-section"]}
            >
              Как мы работаем?
            </a>
            <a
              href="/info/garanties"
              className={styles["footer__top__one-section"]}
            >
              Гарантии
            </a>
            <a
              href="/info/payment"
              className={styles["footer__top__one-section"]}
            >
              Оплата
            </a>
            <a
              href="/info/return"
              className={styles["footer__top__one-section"]}
            >
              Возврат
            </a>
          </div>
        </div>
        <div className={styles.footer__top__questions}>
          <div className={styles.footer__title}>Остались вопросы?</div>
          <div className={styles.footer__top__sections}>
            <a href="/info/FAQ" className={styles["footer__top__one-section"]}>
              FAQ
            </a>
            <div
              className={`${styles.footer__top__one - section} ${
                styles.footer__top__one - section - nolink
              }`}
            >
              Или свяжитесь с нами:
            </div>
            <a
              href="mailto:support@sellout.su"
              className={styles["footer__top__one-section"]}
            >
              Почта: support@sellout.su
            </a>
            <a
              href="tel:89161149227"
              className={styles["footer__top__one-section"]}
            >
              Телефон: +7(916)114-92-27
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer__middle}>
        <div className={styles.footer__middle__social}>
          <div className={styles.footer__title}>Мы в социальных сетях:</div>
          <div className={styles.footer__middle__sections}>
            <a href="https://t.me/markermann">
              <Image src="" />
            </a>
            <a href="https://t.me/markermann">
              <Image src="" />
            </a>
            <a href="https://t.me/markermann">
              <Image src="" />
            </a>
          </div>
        </div>
        <div className={styles.footer__middle__mail}>
          <div className={styles.footer__title}>
            Подпишитесь на рассылку, чтобы быть в курсе новых поступлений и
            акций:
          </div>
          <form
            className={styles.footer__middle__form}
            onsubmit=""
            noValidate=""
          >
            <input
              className={styles["footer__middle__form-input"]}
              type="email"
              id="email"
              name="email"
              placeholder="Ваш e-mail"
              required=""
              defaultValue=""
              onchange=""
            />
            <button
              className={styles["footer__middle__form-submit"]}
              type="submit"
            />
          </form>
          <div
            className={styles["footer__middle__form error-message"]}
            id="email-error"
          ></div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__rights}>
          <p>© SELLOUT, 2023</p>
        </div>
        <div className={styles.footer__bottom__docs}>
          <a href="/docs/politics">Политика конфиденциальности</a>
          <a href="/docs/oferta">Публичная оферта</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../style/Contacts.css"
// import axios from "axios";

export default function Contacts() {
  const TOKEN = "6792552927:AAEpRS9u0jwsemwtXVofm6aWnuoEg77dhO0";
  const CHAT_ID = "-1002146868687";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${e.target.name.value}\n`;
    message += `<b>Номер телефону: </b> ${e.target.tel.value}\n`;
    message += `<b>Повідомлення: </b> ${e.target.textarea.value}`;


    // eslint-disable-next-line no-undef
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        e.target.name.value = "";
        e.target.tel.value = "";
        e.target.textarea.value = "";
        setSuccessMessage("Повідомлення надіслано");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div id="contacts" className="contacts container marketingmt-5 ">
      <div className="contacts-link">
        <h3 className="title-contact">Мої контакти: </h3>
        <p className="contact-paragraph">
          <span className="contact-type"><i className="fa-solid fa-phone"></i></span>
          <a href="tel:+380672575483" className="contact-link">+38
            097 990 56 27</a>
        </p>
        <p className="contact-paragraph">
          <span className="contact-type"><i className="fa-brands fa-telegram"></i></span>
          <a href="https://t.me/annastanish" className="contact-link">@annastanish</a>
        </p>
        <p className="contact-paragraph">
          <span className="contact-type"><i className="fa-brands fa-instagram"></i></span>
          <a href="https://www.instagram.com/ann_visual/" className="contact-link">@ann_visual</a>
        </p>
        <p className="contact-paragraph">
          <span className="contact-type"><i className="fa-brands fa-facebook"></i></span>
          <a href="https://www.facebook.com/profile.php?id=100009306202353" className="contact-link">Анна Станішевська</a>
        </p>
      </div>
      <div className="col-md-6 ">
        <h3>Залиште заявку і я Вам зателефоную </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Імʼя:</label>
            <input type="text" name="name" className="form-control" />
          </div>

          <div className="form-group">
            <label className="form-label">Номер телефону:</label>
            <input type="tel" name="tel" className="form-control" placeholder="+38-050-000-00-00" />
          </div>

          <div className="form-group">
            <label className="form-label">Напишіть запитання:</label>
            <textarea name="textarea" className="form-control" placeholder="Вкажіть яку зйомку ви бажаєте" rows="3"></textarea>
          </div>

          {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
            </div>
          )}

          <button type="submit" className="btn btn-primary mt-4">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

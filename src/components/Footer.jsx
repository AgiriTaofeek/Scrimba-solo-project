import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list">
          <li>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

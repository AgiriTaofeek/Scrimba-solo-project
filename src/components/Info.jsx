import React from 'react';
import img from '../assets/card-img.png';

export default function Info() {
  return (
    <section className="info">
      <img src={img} alt="profile image" className="profile__img" />
      <div className="container">
        <h1 className="info__heading">Laura Smith</h1>
        <p className="info__content">Frontend Developer</p>
        <small className="info__add">laura.smith.website</small>
        <button className="btn">
          <ion-icon name="mail-outline"></ion-icon>
          <span>Email</span>
        </button>
      </div>
    </section>
  );
}

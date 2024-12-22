import React from "react";
import styles from "./Card.module.css";
import propsType from 'prop-types'

const Card = ({ id, imgSrc, title, desc }) => {
  return (
    <div className={styles.divContainer}>
      <img className={styles.img} src={imgSrc} alt="" />
      <h2>Id : {id}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

Card.propsType = {
  id: propsType.number.isRequired,
  imgSrc: propsType.string.isRequired,
  title: propsType.string.isRequired,
  desc: propsType.string.isRequired

}

export default Card;



import React from 'react';
import "./Card.css";

const Card = ({ imgurl,title, subtitle }) => {
  return (
    <div className='card'>
        <a href='' className='a-card'>
        <div className="im-card">
          <img src={imgurl} className="im-im"/>
        </div>
      <h3 className='card-title'>{title}</h3>
      <p className='card-subtitle'>{subtitle}</p>
      </a>
    </div>
  );
}

export default Card;
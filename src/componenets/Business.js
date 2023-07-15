import React from 'react';
import "./Business.css";
import logo from "../logo.svg";
import Card from './Card';
import card from '../card';

const Business = () => {
  return (
    <div className='bus-div'>
      <section className='bus-sect'>
        <h3 className='tx-h3'>Customised Solutions for All Your Business Needs</h3>
        <p className='p4'>
          Take Your Business to the Next Level with Our Industry-Leading Services
        </p>
    
        <div className="card-container">
          <div className="row">
            {card.slice(0, 3).map(card => (
              <Card
                key={card.id}
                imgurl={card.url}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>

          <div className="row">
            {card.slice(3, 6).map(card => (
              <Card
                key={card.id}
                imgurl={card.url}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
          <div className="row">
            {card.slice(6, 9).map(card => (
              <Card
                key={card.id}
                imgurl={card.url}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>

          <div className="centered-card-row">
            {card.slice(10, 11).map(card => (
              <Card
                key={card.id}
                imgurl={card.url}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Business;

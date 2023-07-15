import React from 'react'
import "./Services.css"
import Minicard from './Minicard'
import minicard from '../minicard'
const Services = () => {

function createmini(info){
  return(
    <Minicard
       key={info.id}
       imgurl={info.url}
       title={info.title}/>

  );

}



  return (
    <div>
        <section className='serv-sec'>
            <h2 className='serv-h2'>Leverage our software & hardware expertise</h2>
            <p className='serv-p'>Use our services and tech expertise to create disruptive products & solutions that can revolutionize <br/>your business and stay ahead with evolving technological advancements.</p>
            <div className='minicard-container'>
          {minicard.map(createmini)}
        </div>

        <div className='btn-div-s'>
          <button className='btn-s'><a className='btn-a-s'>Explore our Entire Tech Stack</a></button>
        </div>
        </section>
        
      
    </div>
  )
}

export default Services

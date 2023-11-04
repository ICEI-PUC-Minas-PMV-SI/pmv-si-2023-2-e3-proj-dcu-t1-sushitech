import React from 'react'
import { SubHeading } from '../subheading/subheading';
import awards from '@/constants/data';


const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="imagem dos premios" />
    <div className='app__laurels_award-card_content'>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
); 

const laurels = () => (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
        <SubHeading title="Premios & Reconhecimentos"/>
        <h1 className='headtext__cormorant'>Nossos Premios</h1>
        
        <div className='app__laurels_awards'>
          {awards.map((award) => <AwardCard  award={award} key={award.title}/>)}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src="/assets/comidaJaponesa.jpg" alt="premios" />
      </div>  
    </div>
  );


export default laurels
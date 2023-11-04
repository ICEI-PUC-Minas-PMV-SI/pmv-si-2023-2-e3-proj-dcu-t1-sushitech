import React from 'react';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'> Sobre nós</h1>
        <img src='/assets/chopsticks.svg' alt="pauzinho" className='pauzinho__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src='/assets/knife.png' alt="faca" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Nossa história</h1>
        <img src='/assets/chopsticks.svg' alt="pauzinho" className='pauzinho__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>

      </div>
    </div>
  </div>
);

export default AboutUs;
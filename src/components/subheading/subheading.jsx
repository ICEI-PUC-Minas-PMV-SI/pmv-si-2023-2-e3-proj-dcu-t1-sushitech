import React from 'react';


export const SubHeading = ({title }) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src='/assets/chopsticks.svg' alt='pauzinho de sushi' className='pauzinho__img'/>
  </div>
);

export default SubHeading;

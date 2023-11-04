import React from 'react'
import {SubHeading} from '../subheading/subheading';


const findus = () => (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title="Contato" />
        <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Endereço</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Rua Alberto Vincentim, Belo Horizonte Minas Gerais</p>
          <p className='p__cormorant' style={{color: "#DCCA87", margin: "2rem 0"}}>Horarios Abertos</p>
          <p className='p__opensans'>Seg - Sex: 10:00 - 23:00</p>
          <p className='p__opensans'>Sab - Dom: 18:00 - 23:00</p>
        </div>
        <button type='button' className='custom__button' style={{marginTop: "2rem"}}>Visitem-nos</button>
      </div>

      <div className='app__wrapper_img'>
        <img src="/assets/findus.png" alt="findus"/>
      </div>
    </div>
  )


export default findus
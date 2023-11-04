import React from 'react'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';


const footer = () => {
  return (
    <div className='app__footer section__padding'>

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contato</h1>
          <p className='p__opensans'>Rua Alberto Vincentim, Belo Horizonte Minas Gerais</p>
          <p className='p__opensans'>31 99319-1997</p>
          <p className='p__opensans'>31 99319-1947</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src="/sushi-tech-logo.png" alt="imagem do logo do restaurante" />
          <p className='p__opensans'>Sabores Tradicionais, Tecnologia Moderna</p>
          <img src="/assets/chopsticks.svg" alt="pauzinho de comida japonesa" className='pauzinho__img' style={{marginTop: 15}}/>
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Horarios Abertos</h1>
          <p className='p__opensans'>Segunda - Sexta: </p>
          <p className='p__opensans'>10:00 - 23:00</p>
          <p className='p__opensans'>Sabado - Domingo: </p>
          <p className='p__opensans'>18:00 - 23:00</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>2023 SushiTech. Todos os direitos Reservados.</p>
      </div>
    </div>
    
  )
}

export default footer
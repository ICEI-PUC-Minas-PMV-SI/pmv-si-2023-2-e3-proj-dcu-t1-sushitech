import React from 'react'


const Header = () => (
	<div className='app__header app__wrapper section__padding' id='home'>
		<div className='app__wrapper_info'>
			<h1 className='app__header-h1'>Sabores tradicionais, tecnologia moderna</h1>
			<p className='p__opensans' style={{ margin: '2rem 0' }}>
			Confira nosso cardápio com diversas opções de combinados prontos <br/>
      Crie seu próprio combinado do jeito que você preferir!{' '}
			</p>
			<button type='button' className='custom__button'>
				Explore Menu
			</button>
		</div>

		<div className='app__wrapper_img'>
			<img src="/assets/sushiWelcome.png" alt='header_img' />
		</div>
	</div>
)

export default Header

import React from 'react';
import s from './style.module.scss';
import Image from 'next/image';

const Dashboard = () => {
	return (
		<>
			<div className={s.container}>
				<Image
					src="/dashboard-image.png"
					width={630}
					height={523}
					alt="Imagem do menu inicial"
					className={s.image}/>
				<div>
					<div className={s.titleSection}>
						<a className={s.title}>Bem vindo!</a>
					</div>
					<p className={s.p}>Sabores tradicionais, tecnologia moderna</p>
					<span>
					Confira nosso cardápio com diversas <br />
					opções de combinados prontos. <br />
					</span>
					<p>
					Crie seu próprio combinado, do jeito que <br />
					você preferir
					</p>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

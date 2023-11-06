import React from 'react';
import s from './style.module.scss';
import Image from 'next/image';

const MoreInfos = () => {
	return (
		<>
			<div className={s.container}>
				<div className={s.mainSection}>
					<div className={s.titleSection}>
						<a className={s.title}>Mais informações</a>
					</div>
					<p className={s.infos}>
						Trabalhamos com um menu exclusivo assinado pelo <br />
						chefe Lyoto Mastiga, atuamos desde 2018 entregando um <br />
						trabalho de muita excelência. <br />
					</p>
					<h4 className={s.workingHours}>Horário de funcionamento</h4>
					<span>
						Segunda a Sexta - 18:30 às 23:00 <br />
						Sábado a Domingo - 18:30 às 00:00
					</span>
					<h4 className={s.workingHours}>Localização</h4>
					<span>
						R. Espírito Santo, 1972 <br />
						Lourdes, Belo Horizonte - MG, 30160-032
					</span>
				</div>
				<Image
					src="/restaurante.png"
					width={500}
					height={650}
					alt="Imagem do restaurante"
					className={s.image}
				/>
			</div>
		</>
	);
};

export default MoreInfos;

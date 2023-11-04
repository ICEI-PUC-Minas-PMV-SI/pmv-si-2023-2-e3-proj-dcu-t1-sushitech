import React, { useState } from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/button/button';
import EditModal from '@/components/menu/combinados/edit-combined/presentation';

const MonteSeuCombinado = () => {
	const [isModalOpen , setIsModalOpen] = useState(false);

	return (
		<>
			<div className={s.container}>
				<Image
					src="/monte-seu-combinado.png"
					width={650}
					height={520}
					alt="Monte seu combinado"
					className={s.image}
				/>
				<div className={s.description}>
					<a className={s.title}>Monte seu combinado</a>
					<p className={s.combined}>Monte o combinado do seu jeito!</p>
					<div className={s.buttonGrouper}>
						<Button
							className={s.button}
							onClick={() => setIsModalOpen(true)}
						>
							Montar combinado
						</Button>
					</div>
				</div>
				{isModalOpen && <EditModal
					imagePath="/monte-seu-combinado.png"
					combinedName="Monte seu Combinado"
					setOpenModal={setIsModalOpen}
					initialValue={0.00}
				/>
				}
			</div>
		</>
	);
};

export default MonteSeuCombinado;

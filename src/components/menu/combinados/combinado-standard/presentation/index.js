import React, { useState } from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/button/button';
import EditModal from '@/components/menu/combinados/edit-combined/presentation';
import { useRouter } from 'next/router';

const CombinadoStandard = () => {
	const [isModalOpen , setIsModalOpen] = useState(false);

	const router = useRouter();

	const items = [
		{name: 'Hot roll (8x)', quantity: 1, value: 6.90},
		{name: 'Niguiri de salmão (16x)', quantity: 4, value: 4.50},
		{name: 'Joe de salmão (4x)', quantity: 1, value: 9.50},
		{name: 'Niguiri de atum (4x)', quantity: 1, value: 6.50},
		{name: 'Temaki de salmão (2x)', quantity: 2, value: 21.90},
	];

	const saveCombinedPropsLocalStorage = (name, price) => {
		const objectProps = {
			combinedName: name,
			finalPrice: price,
		};
		localStorage.setItem('combinedLocalStorage', JSON.stringify(objectProps));
	};

	return (
		<>
			<div className={s.container}>
				<Image
					src="/combinado-standard.png"
					width={650}
					height={520}
					alt="Combinado standard"
					className={s.image}
				/>
				<div className={s.description}>
					<a className={s.title}>Combinado Standard</a>
					<div className={s.valueContainer}>
						<p>*Serve 2 pessoas</p>
						<span>R$ 64,99</span>
					</div>
					<p className={s.combined}>O combinado contém:</p>
					{items.map((item, index) => (
						<div key={index}>
							<span>{item.name}</span>
						</div>
					))}
					<div className={s.buttonGrouper}>
						<Button
							className={s.button}
							apperance='secondary'
							onClick={() => setIsModalOpen(true)}
						>
							Editar Pedido
						</Button>
						<Button
							className={s.button}
							onClick={() => {
								saveCombinedPropsLocalStorage('Combinado Standard', 64.99);
								router.push('/pedido/pagamento');
							}}
						>
							Fazer Pedido
						</Button>
					</div>
				</div>
				{isModalOpen && <EditModal
					imagePath="/combinado-standard.png"
					combinedName='Combinado Standard'
					setOpenModal={setIsModalOpen}
					initialValue={64.99}
					combinedItems={items}
				/>
				}
			</div>
		</>
	);
};

export default CombinadoStandard;

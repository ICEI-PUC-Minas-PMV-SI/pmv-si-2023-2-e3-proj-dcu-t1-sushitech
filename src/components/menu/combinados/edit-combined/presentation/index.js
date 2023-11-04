import React, { useState } from 'react';
import propTypes from 'prop-types';
import s from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/button/button';
import { formatBrazilianValue } from '@/utils/formatMoney';

const EditModal = ({ imagePath, combinedName, setOpenModal, initialValue }) => {
	const [items, setItems] = useState([
		{name: 'Temaki de salmão', quantity: 0, value: 21.90},
		{name: 'Temaki de atum', quantity: 0, value: 24.90},
		{name: 'Temaki skin', quantity: 0, value: 19.90},
		{name: 'Temaki de camarão', quantity: 0, value: 27.90},
		{name: 'Hot roll (8x)', quantity: 0, value: 6.90},
		{name: 'Hot roll com couve crispy (8x)', quantity: 0, value: 8.90},
		{name: 'Niguiri de salmão (4x)', quantity: 0, value: 4.50},
		{name: 'Niguri de atum (4x)', quantity: 0, value: 6.50},
		{name: 'Joe de salmão (4x)', quantity: 0, value: 9.50},
		{name: 'Joe de salmão com doritos (4x)', quantity: 0, value: 10.00},
		{name: 'Uramaki de salmão (4x)', quantity: 0, value: 4.20},
		{name: 'Uramaki de salmão com cream cheesee (4x)', quantity: 0, value: 5.20},
	]);
	const [finalPrice, setFinalPrice] = useState(initialValue);

	const increaseTotal = (index) => {
		const totalFinalPrice = finalPrice + items[index].value;

		setFinalPrice(totalFinalPrice);
	};

	const decreaseTotal = (index) => {
		const totalFinalPrice = finalPrice - items[index].value;

		setFinalPrice(totalFinalPrice);
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		increaseTotal(index);
	};

	const handleQuantityDecrease = (index) => {
		if (items[index].quantity > 0 ) {
			const newItems = [...items];

			newItems[index].quantity--;

			setItems(newItems);
			decreaseTotal(index);
		}
		return;
	};

	return (
		<>
			<div className={s.modalOverlay}>
				<div className={s.modalContainer}>
					<div className={s.titleSection}>
						<a className={s.title}>{combinedName}</a>
						<Button
							className={s.closeModalButton}
							onClick={() => setOpenModal(false)}
						>
						&times;
						</Button>
					</div>
					<div className={s.line} />
					<div className={s.mainSection}>
						<Image
							src={imagePath}
							width={960}
							height={350}
							alt="Imagem do combinado"
							className={s.image}
						/>
						<div>
							<span className={s.addExtra}>
								{
									combinedName == 'Monte seu Combinado'
										? 'Adicione itens à vontade'
										: 'Adicionar extras'
								}
							</span>
							{items.map((item, index) => (
								<div key={item.name} className={s.itemContainer}>
									<div className={s.itemName}>
										<span>{item.name}</span>
										<a>+ {formatBrazilianValue(item.value)}</a>
									</div>
									<div className={s.quantity}>
										<button onClick={() => handleQuantityDecrease(index)}>
											-
										</button>
										<span>{item.quantity}</span>
										<button onClick={() => handleQuantityIncrease(index)}>
											+
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className={s.line} />
					<div className={s.buttonGroupper}>
						<Button
							apperance='secondary'
							onClick={() => setOpenModal(false)}
						>
							Voltar
						</Button>
						<Button>Concluir pedido e pagar {formatBrazilianValue(finalPrice)}</Button>
					</div>
				</div>
			</div>
		</>
	);
};

EditModal.propTypes = {
	imagePath: propTypes.string,
	combinedName: propTypes.string,
	setOpenModal: propTypes.func,
	initialValue: propTypes.number
};

export default EditModal;

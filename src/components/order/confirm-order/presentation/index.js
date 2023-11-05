import React, { useState, useEffect } from 'react';
import s from './style.module.scss';
import { formatBrazilianValue } from '@/utils/formatMoney';
import Button from '@/components/button/button';
import { useRouter } from 'next/router';
import PixPayment from '../../payment/pix';
import CardPayment from '../../payment/card';

const ConfirmOrder = () => {
	const [combinedName, setCombinedName] = useState(null);
	const [finalPrice, setFinalPrice] = useState(null);
	const [value, setValue] = useState('cartao');
	const [renderPaymentComponent, setRenderPaymentComponent] = useState(null);

	console.log(value);

	useEffect(() => {
		const localStorageObject = localStorage.getItem('combinedLocalStorage');
		const retrivedObject = JSON.parse(localStorageObject);
		setCombinedName(retrivedObject.combinedName);
		setFinalPrice(retrivedObject.finalPrice);
	}, []);

	const router = useRouter();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleRenderPaymentComponent = (value) => {
		setRenderPaymentComponent(value);
	};

	if (renderPaymentComponent == 'pix') {
		return (
			<PixPayment finalPrice={finalPrice}/>
		);
	}

	if (renderPaymentComponent == 'cartao') {
		return (
			<CardPayment combinedName={combinedName} finalPrice={finalPrice} />
		);
	}

	return (
		<>
			<div className={s.container}>
				<span className={s.title}>
					Estamos quase lá...
				</span>
				<div className={s.tableContainer}>
					<table className={s.orderTable}>
						<thead>
							<tr>
								<th id="order">Pedido</th>
								<th id="final-price">Valor final do pedido</th>
								<th id="payment-method">Método de pagamento</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td aria-label="Pedido">
									{combinedName}<br />
								</td>
								<td aria-label="Valor final do pedido">{formatBrazilianValue(finalPrice)}</td>
								<td aria-label="Método de pagamento">
									<select value={value} onChange={handleChange} className={s.select}>
										<option value='cartao'>Cartão de crédito</option>
										<option value='pix'>PIX à vista</option>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
					<div className={s.buttonGroupper}>
						<Button
							onClick={() => router.back()}
							apperance='secondary'
						>
							Voltar
						</Button>
						<Button onClick={() => handleRenderPaymentComponent(value)}>Fazer Pagamento</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConfirmOrder;

import React, { useState } from 'react';
import s from './style.module.scss';
import propTypes from 'prop-types';
import { formatBrazilianValue } from '@/utils/formatMoney';
import Button from '@/components/button/button';
import { useRouter } from 'next/router';
import PaymentSuccess from '../payment-success/presentation';

const CardPayment = ({ combinedName, finalPrice }) => {
	const router = useRouter();
	const [isContinue, setIsContinue] = useState(null);

	const renderComponent = () => {
		setIsContinue(true);
	};

	if (isContinue) {
		return (
			<PaymentSuccess />
		);
	}

	return (
		<>
			<div className={s.container}>
				<a className={s.title}>Pagamento por Cartão</a>
				<p>Insira os dados do seu cartão de crédito</p>
				<div className={s.columns}>
					<div className={s.leftColumn}>
						<div className={s.inputs}>
							<label>
								Nome no cartão
							</label>
							<input
								type='text'
								name='card-name'
								maxLength='30'
								placeholder='Nome no cartão'/>
						</div>
						<div className={s.inputs}>
							<label>
								Número do cartão
							</label>
							<input
								type='text'
								name='card-number'
								maxLength='19'
								placeholder='---- ---- ---- ----'
								className={s.cardNumber} />
						</div>
						<div className={s.inputs}>
							<label>
								Endereço de cobrança
							</label>
							<input
								type='text'
								name='adress'
								max='30'
								placeholder='Rua Fulano de tal, N182' />
						</div>
					</div>
					<div className={s.rightColumn}>
						<div className={s.inputs}>
							<label>
								Data de expiração
							</label>
							<input
								type='month'
								name='expiration-date'
								placeholder='Data de expiração'
								style={{ width: '200px' }}/>
						</div>
						<div className={s.inputs}>
							<label>
								Código CVV
							</label>
							<input
								type='text'
								name='cvv'
								maxLength='3'
								placeholder='CVV'
								style={{ width: '125px' }}/>
						</div>
						<span>
							Pedido: {combinedName} <br />
							Total: {formatBrazilianValue(finalPrice)}
						</span>
					</div>
				</div>
				<div className={s.buttonGroupper}>
					<Button
						onClick={() => router.back()}
						apperance='secondary'>Voltar</Button>
					<Button onClick={() => renderComponent()}>Pagar</Button>
				</div>
			</div>
		</>
	);
};

CardPayment.propTypes = {
	combinedName: propTypes.string,
	finalPrice: propTypes.number
};

export default CardPayment;

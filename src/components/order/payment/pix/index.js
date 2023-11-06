import React from 'react';
import s from './style.module.scss';
import propTypes from 'prop-types';
import Button from '@/components/button/button';
import { useRouter } from 'next/router';
import { formatBrazilianValue } from '@/utils/formatMoney';

const PixPayment = ({ finalPrice }) => {
	let hash = (Math.random() + 1).toString(36).substring(2);
	let hash1 = (Math.random() + 1).toString(36).substring(2);
	let hash2 = (Math.random() + 1).toString(36).substring(2);

	const router = useRouter();
	return (
		<>
			<div className={s.container}>
				<a className={s.title}>Pagamento por Pix</a>
				<span>
					Copie e cole a chave pix gerada abaixo <br />
					e faça o pagamento no banco de sua preferência.
				</span>
				<p>
					Chave pix: {hash}-{hash1}-{hash2}
				</p>
				<p>
					<b>Total: {formatBrazilianValue(finalPrice)}</b>
				</p>
				<span>
					A confirmação chegará por email e <br />
					pode demorar até 20 minutos.
				</span>
				<Button
					className={s.button}
					onClick={() => router.push('/')}
				>
					Voltar ao início
				</Button>
			</div>
		</>
	);
};

PixPayment.propTypes = {
	finalPrice: propTypes.number
};

export default PixPayment;

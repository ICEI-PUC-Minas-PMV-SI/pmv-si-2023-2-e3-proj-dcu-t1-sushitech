import React, { useState, useEffect } from 'react';
import s from './style.module.scss';
import { FaRegCheckCircle } from 'react-icons/fa';
import Button from '@/components/button/button';
import { useRouter } from 'next/router';

const PaymentSuccess = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 6000);
		}
	}, []);

	const router = useRouter();

	return (
		<>
			<div className={s.container}>
				{loading &&
					<>
						<a className={s.title}>Estamos processando seu pagamento</a>
						<span className={s.loader} />
						<p className={s.waiting}>Aguarde...</p>
					</>
				}
				{!loading &&
					<>
						<a className={s.title}>O pagamento foi confirmado!</a>
						<FaRegCheckCircle className={s.successIcon}/>
						<span>
							Te avisaremos por email quando o seu pedido <br />
							estiver pronto. Fique ligado!
						</span>
						<Button
							className={s.button}
							onClick={() => router.push('/')}
						>
							Voltar ao início
						</Button>
					</>
				}
			</div>
		</>
	);
};

export default PaymentSuccess;

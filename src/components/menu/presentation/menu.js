import React from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/button/button';
import { useRouter } from 'next/router';

const Menu = () => {
	const router = useRouter();
	return (
		<>
			<div className={s.container}>
				<div className={s.stackItem}>
					<Image
						src="/combinado-standard.png"
						width={385}
						height={308}
						alt="Combinado standard"
					/>
					<div className={s.itemInfo}>
						<a className={s.itemTitle}>Combinado Standard</a>
						<p>*Serve 2 pessoas</p>
						<span>
							Combinado incrível com uma grande diversidade de sabores.
						</span>
						<Button onClick={() => router.push('/cardapio/combinado-standard')}>
							Fazer pedido
						</Button>
					</div>
				</div>
				<div className={s.stackItem}>
					<Image
						src="/combinado-premium.png"
						width={385}
						height={308}
						alt="Combinado premium"
					/>
					<div className={s.itemInfo}>
						<a className={s.itemTitle}>Combinado Premium</a>
						<p>*Serve 4 pessoas</p>
						<span>
							Combinado especial assinado pelo chefe
							Lyoto Mastiga<br /> com uma variedade de peças
							premium que<br /> garantem uma explosão de
							sabores.
						</span>
						<Button onClick={() => router.push('/cardapio/combinado-premium')}>
							Fazer pedido
						</Button>
					</div>

				</div>
				<div className={s.stackItem}>
					<Image
						src="/monte-seu-combinado.png"
						width={385}
						height={308}
						alt="Monte seu combinado"
					/>
					<div className={s.itemInfo}>
						<a className={s.itemTitle}>Monte seu combinado</a>
						<span>
							Monte o combinado do seu jeito.
						</span>
						<Button onClick={() => router.push('/cardapio/monte-seu-combinado')}>
							Fazer pedido
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;

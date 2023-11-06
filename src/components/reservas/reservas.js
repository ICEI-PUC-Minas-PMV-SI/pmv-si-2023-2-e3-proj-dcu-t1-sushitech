import React, { useState } from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/button/button';


const Reservas = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [page, setPage] = useState('form'); // 'form' para o formulário, 'areas' para a seleção de areas, 'confirmacao' para a confirmação
	const [areasSelecionadas, setAreasSelecionadas] = useState([]);
	const [formData, setFormData] = useState({
		quantidadePessoas: '',
		data: '',
		horario: '',
		email: '',
	});

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email.trim());
	};

	const validateForm = () => {
		// Validação da quantidade de pessoas
		if (formData.quantidadePessoas < 1 || formData.quantidadePessoas > 10) {
			alert('A quantidade de pessoas deve ser entre 1 e 10.');
			return false; // Impede a transição
		}

		// Validação da data (verifica se é uma data válida)
		const selectedDate = new Date(formData.data);
		if (isNaN(selectedDate.getTime()) || selectedDate < new Date()) {
			alert('Selecione uma data válida no futuro.');
			return false; // Impede a transição
		}

		// Validação do horário (verifica se está dentro do horário desejado)
		if (formData.horario < '18:00' || formData.horario > '22:30') {
			alert('Selecione um horário entre 18:00 e 22:30.');
			return false; // Impede a transição
		}

		// Validação do e-mail (verifica se é um e-mail válido)
		if (!validateEmail(formData.email)) {
			alert('Insira um e-mail válido.');
			return false; // Impede a transição
		}

		return true; // Permite a transição
	};

	const openModal = () => {
		setIsModalOpen(true);
		setPage('form');
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const selectAreas = () => {
		if (validateForm()) {
			setPage('areas'); // Permite a transição apenas se a validação passar
		}
	};

	const handleAreaSelection = (area) => {
		if (areasSelecionadas.includes(area)) {
			// Se a área já estiver selecionada, desmarque-a
			setAreasSelecionadas([]);
		} else {
			// Se a área ainda não estiver selecionada, selecione-a e desmarque as outras áreas
			setAreasSelecionadas([area]);
		}

		// Adicione uma mensagem de aviso
		//const message = areasSelecionadas.length > 0
		//  ? `Você desmarcou a área "${areasSelecionadas[0]}" e selecionou a área "${area}"`
		//  : `Você selecionou a área "${area}"`;

		//alert(message);
	};


	const confirmarAreas = () => {
		setPage('confirmacao');
	};

	const confirmarReserva = () => {
		// Lógica para confirmar a reserva
		// Você pode enviar os dados do formulário e as areas selecionadas para o servidor ou realizar ações específicas aqui
		// Após a confirmação, você pode retornar à página de formulário ou fechar o modal, dependendo dos requisitos do seu aplicativo
		// Por simplicidade, mostraremos um alerta de confirmação neste exemplo
		alert('Reserva confirmada com sucesso!');
		setIsModalOpen(false);
		setFormData({
			quantidadePessoas: '',
			data: '',
			horario: '',
		});
	};

	const renderContent = () => {
		if (page === 'form') {
			return (
				<div className={s.modalContent}>
					<h2>Formulário</h2>
					<form>
						<label>
              Quantidade de Pessoas:*
							<input
								type="number"
								required
								min="1"
								max="10"
								value={formData.quantidadePessoas}
								onChange={(e) =>
									setFormData({ ...formData, quantidadePessoas: e.target.value })
								}
							/>
						</label>
						<label>
              Data:*
							<input
								type="date"
								required
								min={new Date().toISOString().split('T')[0]} // Define o mínimo como a data atual
								value={formData.data}
								onChange={(e) => setFormData({ ...formData, data: e.target.value })}
							/>
						</label>
						<label>
              Horário:*
							<select
								required
								value={formData.horario}
								onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
							>
								<option value="18:00">18:00</option>
								<option value="18:30">18:30</option>
								<option value="19:00">19:00</option>
								<option value="19:30">19:30</option>
								<option value="20:00">20:00</option>
								<option value="20:30">20:30</option>
								<option value="21:00">21:00</option>
								<option value="21:30">21:30</option>
								<option value="22:00">22:00</option>
								<option value="22:30">22:30</option>
							</select>
						</label>
						<label>
              E-mail de Contato:*
							<input
								type="e-mail"
								required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
						</label>
					</form>
					<Button
						className={s.findTablesButton}
						type="Button"
						onClick={() => selectAreas()}
					>
              Encontrar Áreas
					</Button>
				</div>
			);
		} else if (page === 'areas') {
			return (
				<div className={s.modalContent}>
					<h2>Qual a área desejada</h2>
					<div id="areas" className={s.areasContainer}>
						<button onClick={() => handleAreaSelection('Interna')}>Interna</button>
						<button onClick={() => handleAreaSelection('Externa')}>Externa</button>
						<button onClick={() => handleAreaSelection('Indiferente')}>Indiferente</button>
					</div>
					<Button
						onClick={confirmarAreas}
						apperance={areasSelecionadas.length == 0 ? 'disable' : ''}
					>
						Confirmar Área
					</Button>
				</div>
			);
		} else if (page === 'confirmacao') {
			return (
				<div className={s.modalContent}>
					<h2>Confirmação de Reserva</h2>
					<p>Quantidade de Pessoas: {formData.quantidadePessoas}</p>
					<p>Data: {formData.data.split('-').reverse().join('/')}</p>
					<p>Horário: {formData.horario}</p>
					<p>Área Selecionada: {areasSelecionadas}</p>
					<p>E-mail de Contato: {formData.email}</p>
					<Button onClick={confirmarReserva}>
						Confirmar Reserva
					</Button>
				</div>
			);
		}
	};

	return (
		<div>
			<h1 className={s.title} >RESERVE JÁ!</h1>
			<div className={s.customLayout}>
				<div className={s.leftColumn}>
					<Image
						src="/sushi-tech-2.jpg"
						className={s.image}
						width={950}
						height={860}
						alt="Reserve já!" />
				</div>
				<div className={s.rightColumn}>
					<p>
          Bem-vindo(a) ao SushiTech, onde a tradição japonesa encontra a inovação culinária e tecnológica! Estamos entusiasmados por você considerar a reserva de um lugar em nosso renomado restaurante japonês.
						<br/><br/>
          Para garantir que sua visita ao SushiTech seja perfeita, convidamos você a reservar sua área com antecedência. Nossa equipe dedicada está pronta para tornar sua experiência inesquecível!
						<br/><br/>
          Por favor, preencha o formulário abaixo para fazer sua reserva agora mesmo.
						<br/><br/>
          Mal podemos esperar para recebê-lo(a) em nossa casa de sabores japoneses de última geração.
					</p><br/>
					<Button
						onClick={openModal}
					>
						Fazer uma reserva
					</Button>
					{isModalOpen && (
						<div className={s.modalOverlay}>
							<div className={s.modal}>
								<Button className={s.closeModalButton} onClick={closeModal}>
									&times;
								</Button>
								{renderContent()}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Reservas;

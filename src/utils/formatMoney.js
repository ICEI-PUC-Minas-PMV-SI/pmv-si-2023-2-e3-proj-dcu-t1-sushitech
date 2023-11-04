export const formatBrazilianValue = (value) => {
	const numberFormatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return numberFormatter.format(value);
};

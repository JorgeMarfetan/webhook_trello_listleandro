export default async function handler(req, res) {
  const payload = req.body;
  const { action } = payload;

  // Verifica se o cartão foi movido para a lista "produção leandro"
  if (action && action.type === 'updateCard' && action.data.listAfter.name === 'produção leandro') {
    console.log('Cartão movido para a lista produção leandro');
    
    // Adicione a lógica para processar o evento, como notificação via Twilio, e-mail, etc.
    return res.status(200).json({ message: 'Evento processado com sucesso' });
  }

  // Se não for relevante, retorna sucesso sem ação
  return res.status(200).json({ message: 'Evento irrelevante' });
}

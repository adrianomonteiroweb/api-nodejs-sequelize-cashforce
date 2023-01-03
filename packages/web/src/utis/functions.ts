export const statusOrderFunction = (order: string) =>
  [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado',
  ][Number(order)];

export const formatValueBRLCurrencyFunction = (value: number) =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    value
  );

export const formatDate = (date: string) =>
  date.split('T')[0].split('-').reverse().join('/');

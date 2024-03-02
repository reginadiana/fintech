import { Sale } from 'src/context/DataContext';
import { toCurrency } from 'src/currency';

type Props = {
  sale: Sale;
};

export default function SaleItem({ sale }: Props) {
  return (
    <div className="sale box">
      <a href="#" style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </a>
      <div>{sale.nome}</div>
      <div>{toCurrency(sale.preco)}</div>
    </div>
  );
}

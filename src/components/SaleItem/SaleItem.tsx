import { NavLink } from 'react-router-dom';
import { Sale } from 'src/context/DataContext';
import { toCurrency } from 'src/currency';

type Props = {
  sale: Sale;
};

export default function SaleItem({ sale }: Props) {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>{toCurrency(sale.preco)}</div>
    </div>
  );
}

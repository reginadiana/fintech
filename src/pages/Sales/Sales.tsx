import SaleItem from 'src/components/SaleItem';
import { useData } from 'src/context/DataContext';

export default function Sales() {
  const { data: sales, loading } = useData();

  if (loading) return <span>Carregando vendas...</span>;
  if (sales === null) return <span>Nenhuma venda foi encontrada</span>;

  return (
    <section>
      {sales.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </section>
  );
}

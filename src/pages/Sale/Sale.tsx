import { useParams } from 'react-router-dom';
import useFetch from 'src/hooks/useFetch';
import { Sale as SaleType } from 'src/context/DataContext';
import { toCurrency } from 'src/currency';
import LoadingSpinner from 'src/components/LoadingSpinner';

export default function Sale() {
  const { id } = useParams();
  const { data, loading } = useFetch<SaleType>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <LoadingSpinner />;
  if (data === null) return null;

  return (
    <section>
      <div className="box mb">Id: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">Preço: {toCurrency(data.preco)}</div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </section>
  );
}

import SalesCharts from 'src/components/SalesCharts';
import { useData, Sale, Status } from 'src/context/DataContext';
import { toCurrency } from 'src/currency';

function getTotalPriceFromSales(sales: Sale[]) {
  return sales.reduce((acc, item) => acc + item.preco, 0);
}

export default function Summary() {
  const { data: sales, loading } = useData();

  if (loading) return <span>Carregando resumo...</span>;
  if (sales === null) return <span>Nenhuma venda foi encontrada</span>;

  const processing = sales.filter(({ status }) => status === Status.PROCESSING);
  const successed = sales.filter(({ status }) => status !== Status.FAIL);
  const paid = sales.filter(({ status }) => status === Status.PAID);

  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>{toCurrency(getTotalPriceFromSales(successed))}</span>
        </div>

        <div className="box">
          <h2>Recebidos</h2>
          <span>{toCurrency(getTotalPriceFromSales(paid))}</span>
        </div>

        <div className="box">
          <h2>Processando</h2>
          <span>{toCurrency(getTotalPriceFromSales(processing))}</span>
        </div>
      </div>

      <div className="box mb">
        <SalesCharts sales={sales} />
      </div>
    </section>
  );
}

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import useFetch from 'src/hooks/useFetch';

export enum Status {
  PAID = 'pago',
  PROCESSING = 'processando',
  FAIL = 'falha',
}

type StatusSale = Status.PAID | Status.PROCESSING | Status.FAIL;

export type Sale = {
  id: string;
  nome: string;
  preco: number;
  status: StatusSale;
  data: string;
  parcelas: number | null;
  pagamento: string;
};

type DataContextType = {
  data: Sale[] | null;
  loading: boolean;
  error: string | null;

  startDate: string;
  endDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
};

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const context = useContext(DataContext);

  if (!context)
    throw new Error(
      'useData precisa estar dentro do contexto DataContextProvider'
    );

  return context;
};

function getDate({ daysAgo }: { daysAgo: number }) {
  const date = new Date();

  date.setDate(date.getDate() - daysAgo);

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [startDate, setStartDate] = useState(getDate({ daysAgo: 30 }));
  const [endDate, setEndDate] = useState(getDate({ daysAgo: 0 }));

  const { data, loading, error } = useFetch<Sale[] | null>(
    `https://data.origamid.dev/vendas/?inicio=${startDate}&final=${endDate}`
  );

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

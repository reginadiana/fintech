import { PropsWithChildren, createContext, useContext } from 'react';
import useFetch from 'src/hooks/useFetch';

type SaleType = {
  id: string;
  nome: string;
  preco: string;
  status: 'pago' | 'processando' | 'falha';
  data: string;
  parcelas: number | null;
};

type DataContextType = {
  data: SaleType[] | null;
  loading: boolean;
  error: string | null;
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

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<SaleType[] | null>(
    'https://data.origamid.dev/vendas/'
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

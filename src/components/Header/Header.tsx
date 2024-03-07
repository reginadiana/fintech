import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DangeRange from 'src/components/DangeRange';
import MonthRange from 'src/components/MounthRange';

export default function Header() {
  const [title, setTitle] = useState('Resumo');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Resumo');
    }

    if (location.pathname === '/vendas') {
      setTitle('Vendas');
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DangeRange />
        <h1 className="box bg-3">{title}</h1>
      </div>

      <MonthRange />
    </header>
  );
}

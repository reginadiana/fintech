import { useState } from 'react';
import DangeRange from 'src/components/DangeRange';
import MonthRange from 'src/components/MounthRange';

export default function Header() {
  const [title, setTitle] = useState('Resumo');

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

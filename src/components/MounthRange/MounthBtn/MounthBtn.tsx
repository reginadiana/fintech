import { CSSProperties } from 'react';
import { useData } from 'src/context/DataContext';

const style: CSSProperties = {
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  textTransform: 'capitalize',
};

function getMonthName(mounthInNumber: number) {
  const date = new Date();

  date.setMonth(date.getMonth() + mounthInNumber);

  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

type Props = {
  mounthInNumber: number;
};

export default function MonthBtn({ mounthInNumber }: Props) {
  const { setStartDate, setEndDate } = useData();

  function onClick() {
    const date = new Date();

    date.setMonth(date.getMonth() + mounthInNumber);

    const mounth = date.getMonth();
    const year = date.getFullYear();

    const firstDayInMonth = new Date(year, mounth, 1);
    const lastDayInMonth = new Date(year, mounth + 1, 0);

    setStartDate(formatDate(firstDayInMonth));
    setEndDate(formatDate(lastDayInMonth));
  }

  const name = getMonthName(mounthInNumber);

  return (
    <button onClick={onClick} style={style}>
      {name}
    </button>
  );
}

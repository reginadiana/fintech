import { useData } from 'src/context/DataContext';
import DateInput from 'src/components/DateInput';

export default function DangeRange() {
  const { startDate, endDate, setStartDate, setEndDate } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      <DateInput
        label="Final"
        value={endDate}
        onChange={({ target }) => setEndDate(target.value)}
      />
    </form>
  );
}

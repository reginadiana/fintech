import DangeRange from 'src/components/DangeRange';
import MonthRange from 'src/components/MounthRange';

export default function Header() {
  return (
    <header className="mb">
      <div className="mb">
        <DangeRange />
      </div>

      <MonthRange />
    </header>
  );
}

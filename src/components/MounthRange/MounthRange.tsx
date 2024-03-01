import MonthBtn from './MounthBtn';

export default function MonthRange() {
  return (
    <div className="flex">
      <MonthBtn mounthInNumber={-3} />
      <MonthBtn mounthInNumber={-2} />
      <MonthBtn mounthInNumber={-1} />
    </div>
  );
}

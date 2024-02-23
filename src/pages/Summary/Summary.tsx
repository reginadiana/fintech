import { useData } from 'src/context/DataContext';

export default function Summary() {
  const { data } = useData();

  return <div>Summary</div>;
}

import { useData } from 'src/context/DataContext';

export default function Header() {
  const { data } = useData();

  console.log(data);
  return <header>Header</header>;
}

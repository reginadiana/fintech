import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';
import Summary from 'src/pages/Summary';
import { DataContextProvider } from 'src/context/DataContext';

import './style.css';

/**
 * TODO: 22/02/24
 * - Estou na aula 0402 Páginas e Hooks
 * - Parei em 01:21
 */

export default function App() {
  return (
    <DataContextProvider>
      <Header />
      <main>
        <Summary />
        <Sidebar />
      </main>
    </DataContextProvider>
  );
}

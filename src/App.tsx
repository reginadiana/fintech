import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';

import Summary from 'src/pages/Summary';
import Sales from 'src/pages/Sales';

import { DataContextProvider } from 'src/context/DataContext';

import './style.css';

export default function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidebar />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

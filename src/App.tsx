import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';

import Summary from 'src/pages/Summary';
import Sales from 'src/pages/Sales';
import Sale from 'src/pages/Sale';

import { DataContextProvider } from 'src/context/DataContext';

import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidebar />
          <main>
            <Header />

            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

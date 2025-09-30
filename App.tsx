
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MarketplacePage from './components/MarketplacePage';
import DashboardPage from './components/DashboardPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [appVisible, setAppVisible] = useState(false);

  useEffect(() => {
    // Initial fade-in for the whole app
    setAppVisible(true);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.MARKETPLACE:
        return <MarketplacePage />;
      case Page.DASHBOARD:
        return <DashboardPage />;
      case Page.HOME:
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`bg-gray-900 text-gray-200 min-h-screen font-sans transition-opacity duration-1000 ${appVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

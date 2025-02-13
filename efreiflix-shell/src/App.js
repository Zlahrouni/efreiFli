import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));
const About = React.lazy(() => import('about/About'));
const Admin = React.lazy(() => import('admin/Admin'));
const Searchbar = React.lazy(() => import('searchbar/Searchbar'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Chargement du header...</div>}>
        <Header />
      </Suspense>

      <main style={{ padding: '2rem' }}>
        <h2>Bienvenue sur Efreiflix</h2>
        <p>Contenu principal de l'application...</p>
        <Suspense fallback={<div>Chargement du about...</div>}>
          <Searchbar />
        </Suspense>
        <Suspense fallback={<div>Chargement du about...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Chargement du admin...</div>}>
          <Admin />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CategoryPage from './components/CategoryPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<CategoryPage  />} />
          <Route path="/:country/article/:id" element={<ArticlePage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

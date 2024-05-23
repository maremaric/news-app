import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
          {/* Redirect root URL to a default country and category */}
          <Route path="/" element={<Navigate to="/us/general" replace />} />

          {/* Existing routes */}
          <Route path="/:country/:category" element={<CategoryPage />} />
          <Route path="/:country/:category/article/:id" element={<ArticlePage />} />

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

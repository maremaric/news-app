import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ArticlePage from './components/pages/ArticlePage';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CategoryPage from './components/pages/CategoryPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Redirect root URL to a default country and category */}
          <Route path="/" element={<Navigate to="/news/us/general" replace />} />

          {/* Existing routes */}
          <Route path="/news/:country/:category" element={<CategoryPage />} />
          <Route path="/news/:country/:category/article/:id" element={<ArticlePage />} />

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

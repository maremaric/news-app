import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Nav from './components/Nav';
import NewsList from './components/NewsList';

const queryClient = new QueryClient();

function App() {
  const [country, setCountry] = useState('us');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Nav country={country} handleCountryChange={handleCountryChange} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className='section'>
          <div className="container">
            <h1 className="text-3xl font-bold text-primary-blue mb-8">
              News from - <span className='uppercase'>{country}</span>
            </h1>
            <NewsList country={country} searchQuery={searchQuery} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </div>
    </QueryClientProvider>
  );
}

export default App;

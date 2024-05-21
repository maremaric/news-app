import Nav from './components/Nav';
import { QueryClientProvider, QueryClient } from 'react-query';
import { useState } from 'react'; 
import { ReactQueryDevtools } from 'react-query/devtools';
import NewsList from './components/NewsList';

const queryClient = new QueryClient();

function App() {
  const [country, setCountry] = useState('us');

  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Nav country={country} handleCountryChange={handleCountryChange} />
        <div className='section'>
          <div className="container">
            <h1 className="text-3xl font-bold underline text-primary-blue mb-8">
              News from - <span className='uppercase'>{country}</span>
            </h1>
            <NewsList country={country} handleCountryChange={handleCountryChange} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </div>
    </QueryClientProvider>
  );
}

export default App;
import { useState } from 'react';
import Nav from './Nav';
import NewsList from './NewsList';

function Home() {
  const [country, setCountry] = useState('us');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <div>
        <Nav country={country} handleCountryChange={handleCountryChange} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className='section'>
          <div className="container">
            <h1 className="text-3xl font-bold text-primary-blue mb-8">
              News from - <span className='uppercase'>{country}</span>
            </h1>
            <NewsList country={country} searchQuery={searchQuery} />
          </div>
        </div>
    </div>
  );
}

export default Home;

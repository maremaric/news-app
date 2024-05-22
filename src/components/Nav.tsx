import Logo from '../../src/assets/neos.svg';

export interface NavProps {
    country: string;
    handleCountryChange: (newCountry: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Nav = ({ country, handleCountryChange, searchQuery, setSearchQuery }: NavProps) => {
  return (
    <nav className="py-5 bg-primary-blue">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <div className='bg-[#fff] rounded-[50%] p-4'>
            <img className='w-[30px] h-[30px] object-contain' src={Logo} alt='Logo' />
          </div>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => handleCountryChange('us')}
              className={`text-[#fff] px-4 py-2 rounded-md ${country === 'us' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
            >
              US
            </button>
            <button
              onClick={() => handleCountryChange('de')}
              className={`text-[#fff] px-4 py-2 rounded-md ${country === 'de' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
            >
              DE
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="px-4 py-2 rounded-md bg-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import Logo from '../../src/assets/neos.svg';

export interface NavProps {
    country: string;
    category: string;
    handleCountryChange: (newCountry: string) => void;
    handleCategoryChange: (newCategory: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Nav = ({ country, handleCountryChange, searchQuery, setSearchQuery, category, handleCategoryChange }: NavProps) => {
  return (
    <>
        <nav className="py-5 bg-primary-blue">
        <div className="container">
            <div className="flex items-center justify-between gap-5">
            <a href='/'>
                <div className='bg-[#fff] rounded-[50%] p-4'>
                    <img className='w-[30px] h-[30px] object-contain' src={Logo} alt='Logo' />
                </div>
            </a>
            <div className='flex items-center gap-4'>
                <button
                onClick={() => handleCountryChange('us')}
                className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${country === 'us' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                >
                US
                </button>
                <button
                onClick={() => handleCountryChange('de')}
                className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${country === 'de' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                >
                DE
                </button>
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="px-4 py-2 rounded-md bg-white"
                />
            </div>
            </div>
        </div>
        </nav>
        <div className='bg-primary-blue py-3'>
            <div className='max-w-[800px] w-[100%] mx-auto'>
                <div className='flex items-center justify-center gap-4'>
                    <button 
                        className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${category === 'general' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                        onClick={() => handleCategoryChange('general')}>
                        Top News
                    </button>
                    <button 
                        className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${category === 'business' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                        onClick={() => handleCategoryChange('business')}>
                        Business
                    </button>
                    <button 
                        className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${category === 'technology' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                        onClick={() => handleCategoryChange('technology')}>
                        Technology
                    </button>
                    <button 
                        className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${category === 'science' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                        onClick={() => handleCategoryChange('science')}>
                        Science
                    </button>
                    <button 
                        className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${category === 'sport' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                        onClick={() => handleCategoryChange('sport')}>
                        Sport
                    </button>
                    <button 
                        className={`text-[#fff] px-4 py-2 transition duration-300 rounded-md ${category === 'Health' ? 'active bg-blue-600' : 'bg-blue-400'} hover:bg-blue-500`}
                        onClick={() => handleCategoryChange('health')}>
                        Health
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Nav;



import Logo from '../../src/assets/neos.svg';
import { Link } from 'react-router-dom';

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
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <Link to='/' className='inline-block'>
                <div className='bg-[#fff] rounded-[50%] p-4'>
                    <img className='w-[30px] h-[30px] object-contain' src={Logo} alt='Logo' />
                </div>
            </Link>
            <div className='flex flex-col-reverse items-center gap-4 md:flex-row'>
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
                </div>
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="px-4 py-2 bg-white rounded-md"
                />
            </div>
            </div>
        </div>
        </nav>
        <div className='py-3 bg-primary-blue'>
            <div className='max-w-[800px] w-[100%] px-5 mx-auto'>
                <div className='flex flex-wrap items-center justify-start gap-4 md:justify-center'>
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



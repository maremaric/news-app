import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../Nav';
import CategoryLists from '../CategoryList';

const CategoryPage = () => {
  const { country: paramCountry, category: paramCategory } = useParams<{ country: string; category: string }>();
  const navigate = useNavigate();

  const [country, setCountry] = useState(paramCountry || 'us');
  const [category, setCategory] = useState(paramCategory || 'general');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (paramCountry !== country || paramCategory !== category) {
      navigate(`/news/${country}/${category}`);
    }
  }, [country, category, paramCountry, paramCategory, navigate]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <>
      <Nav
        country={country}
        category={category}
        handleCountryChange={handleCountryChange}
        handleCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className='section'>
        <div className="container">
          <h1 className="mb-2 text-3xl font-bold text-primary-blue">
            News from - <span className='uppercase'>{country}<br /></span>
          </h1>
          <h2 className='text-xl mb-8 font-bold text-primary-blue'> 
            Category - <span className='capitalize'>{category === 'general' ? 'Top News' : category}</span>
          </h2>
          <CategoryLists country={country} category={category} searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;

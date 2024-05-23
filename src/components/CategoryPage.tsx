import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import CategoryLists from './CategoryList';

const CategoryPage = () => {
  const { country: paramCountry, category: paramCategory } = useParams<{ country: string; category: string }>();
  const navigate = useNavigate();

  const [country, setCountry] = useState(paramCountry || 'us');
  const [category, setCategory] = useState(paramCategory || 'general');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (paramCountry !== country || paramCategory !== category) {
      navigate(`/${country}/${category}`);
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
          <h1 className="mb-8 text-3xl font-bold text-primary-blue">
            News from - <span className='uppercase'>{country}<br /></span>
            Category - <span className='uppercase'>{category}</span>
          </h1>
          <CategoryLists country={country} category={category} searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;

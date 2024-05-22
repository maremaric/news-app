import { useState } from "react";
import Nav from "./Nav";
import CategoryLists from "./CategoryList";


const CategoryPage = () => {
    const [country, setCountry] = useState('us');
    const [category, setCategory] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (newCategory: string) => {
        setCategory(newCategory);
    }

    const handleCountryChange = (newCountry: string) => {
        setCountry(newCountry);
    };

  return (
    <>
        <Nav country={country} category={category} handleCountryChange={handleCountryChange} handleCategoryChange={handleCategoryChange} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className='section'>
          <div className="container">
            <h1 className="text-3xl font-bold text-primary-blue mb-8">
              News from - <span className='uppercase'>{country}<br /></span>
              Category - <span className='uppercase'>{category}</span>
            </h1>
            <CategoryLists country={country} category={category} searchQuery={searchQuery} />
          </div>
        </div>
    </>
  )
}

export default CategoryPage;
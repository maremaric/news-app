import { useState } from 'react';
import { useCategoryData } from '../hooks/useCategoryData';
import { AxiosError, AxiosResponse } from 'axios';
import { NewsData } from '../../types';
import NewsCard from './NewsCard';
import Loader from './Loader';

const CategoryLists = ({ country, category, searchQuery }: { country: string; category: string; searchQuery: string }) => {
    const [itemsToShow, setItemsToShow] = useState(6); // State to keep track of items to display

  const onSuccess = (data: AxiosResponse<NewsData>) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error: AxiosError) => {
    console.log('Perform side effect after encountering error', error);
  };

  const { data, error, isLoading } = useCategoryData(country, category, onSuccess, onError);

  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 6); // Increase the number of items by 6
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const filteredArticles = (data?.data.articles || []).filter(
    (article) => article.title && article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
        {isLoading ? <Loader /> : null}
        {error ? <p>Error: {error.message}</p> : null}
        {data && (
            filteredArticles.length > 0 ? (
            <div className='container'>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles
                    .filter(article => article.title !== '[Removed]') // Filter out articles with title [Removed]
                    .slice(0, itemsToShow)
                    .map((article, index) => (
                        <div className="flex" key={index}>
                        <NewsCard title={article.title} description={article.description} image={article.urlToImage} id={index} country={country} />
                        </div>
                    ))}
                </div>
                {itemsToShow < filteredArticles.length && ( // Show "Show More" button only if there are more items to display
                    <div className="mt-8 flex justify-center">
                    <button onClick={showMoreItems} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Show More
                    </button>
                    </div>
                )}
            </div>
            ) : (
                <h2 className='text-2xl'>No articles found</h2>
            )
        )}
    </>
  );
};

export default CategoryLists;

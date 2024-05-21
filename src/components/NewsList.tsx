import { useState } from 'react';
import { useNewsData } from '../hooks/useNewsData';
import { AxiosError, AxiosResponse } from 'axios';
import { NewsData, NavProps } from '../../types/index';
import NewsCard from './NewsCard';

const NewsList = ({ country, searchQuery }: { country: string; searchQuery: string }) => {
  const [itemsToShow, setItemsToShow] = useState(6); // State to keep track of items to display

  const onSuccess = (data: AxiosResponse<NewsData>) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error: AxiosError) => {
    console.log('Perform side effect after encountering error', error);
  };

  const { data, error, isLoading } = useNewsData(country, onSuccess, onError);

  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 6); // Increase the number of items by 6
  };

  // Provide a default empty array if data or articles are undefined
  const filteredArticles = data?.data.articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error.message}</p> : null}
      {data && (
        <div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.slice(0, itemsToShow).map((article, index) => (
              <div className="flex" key={index}>
                <NewsCard title={article.title} description={article.description} image={article.urlToImage} />
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
      )}
    </div>
  );
};

export default NewsList;

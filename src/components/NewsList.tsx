import { useNewsData } from '../hooks/useNewsData';
import { AxiosError, AxiosResponse } from 'axios';
import { NewsData, NavProps } from '../../types/index';
import NewsCard from './NewsCard';

const NewsList = ({ country }: NavProps) => {
  const onSuccess = (data: AxiosResponse<NewsData>) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error: AxiosError) => {
    console.log('Perform side effect after encountering error', error);
  };

  const { data, error, isLoading } = useNewsData(country, onSuccess, onError);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error.message}</p> : null}
      {data && (
        <div className='grid grid-cols-3 gap-8'>
          {data.data.articles.map((article, index) => (
            <div className='flex' key={index}> 
              <NewsCard title={article.title} description={article.description} image={article.urlToImage} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;

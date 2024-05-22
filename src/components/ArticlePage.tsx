// ArticlePage.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useNewsData } from '../hooks/useNewsData';
import dayjs from 'dayjs';
import PlaceholderImage from '../../src/assets/news.jpg';

const ArticlePage = () => {
  const { id, country } = useParams<{ id: string; country: string }>();
  const navigate = useNavigate();

  function formatDate(dateString: string) {
    return dayjs(dateString).format('MMMM D, YYYY - HH:mm');
  }

  useEffect(() => {
    if (!id || !country) {
      navigate('/');
    }
  }, [id, country, navigate]);

  const { data, error, isLoading } = useNewsData(country || 'us', () => {}, () => {});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!id || !country) return <p>Article or country not found</p>;

  const articleIndex = parseInt(id);
  if (isNaN(articleIndex)) return <p>Invalid article ID</p>;

  const article = data?.data.articles[articleIndex];
  console.log('article:', article);

  if (!article) return <p>Article not found</p>;

  return (
    <div className='section'>
      <div className='max-w-[940px] w-[100%] mx-auto'>
        <h1 className='text-4xl mb-5'>{article.title}</h1>
        {article.author ? <h3 className='mb-3'>Author: <span className='text text-slate-500 italic'>{article.author}</span></h3> : ''}
        <p className='mb-3'>Published at: <span className='text text-slate-500 italic'>{formatDate(article.publishedAt)}</span></p>
        <img className='w-[100%] object-cover h-[400px] mb-5' src={article.urlToImage ? article.urlToImage : PlaceholderImage} alt={article.title} />
        <p className='mb-5'>{article.description}</p>
        <p className='mb-5'>{article.content}</p>
        <p className='text-primary-blue'>Source: <a className='italic' href={article.url} target='_blank' rel='noopener noreferrer'>{article.source.name}</a></p>
      </div>
    </div>
  );
};

export default ArticlePage;

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useCategoryData } from '../../hooks/useCategoryData';
import dayjs from 'dayjs';
import PlaceholderImage from '../../assets/news.jpg'
import Loader from '../Loader';
import { Link } from 'react-router-dom';

const ArticlePage = () => {
  const { id, country, category } = useParams<{ id: string; country: string; category: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !country || !category) {
      navigate('/');
    }
  }, [id, country, category, navigate]);

  const { data, error, isLoading } = useCategoryData(country || 'us', category || 'general', () => {}, () => {});

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  if (!id || !country || !category) return <p>Article, country, or category not found</p>;

  const articleIndex = parseInt(id);
  if (isNaN(articleIndex)) return <p>Invalid article ID</p>;

  const article = data?.data.articles[articleIndex];

  if (!article) return <p>Article not found</p>;

  return (
    <div className='section'>
      <div className='max-w-[940px] w-[100%] mx-auto'>
        <Link to={`/news/${country}/${category}/`} className='inline-block mb-5 font-bold text-primary-blue'>
            Back to all news
        </Link>
        <h2 className='mb-5 text-4xl'>{article.title}</h2>
        {article.author ? <h3 className='mb-3'>Author: <span className='italic text-slate-500'>{article.author}</span></h3> : ''}
        <p className='mb-3'>Published at: <span className='italic text-slate-500'>{dayjs(article.publishedAt).format('MMMM D, YYYY - HH:mm')}</span></p>
        <img className='w-[100%] object-cover h-[400px] mb-5' src={article.urlToImage ? article.urlToImage : PlaceholderImage} alt={article.title} />
        <p className='mb-5'>{article.description}</p>
        <p className='mb-5'>{article.content}</p>
        <p className='text-primary-blue'>Source: <Link className='italic' to={article.url} target='_blank' rel='noopener noreferrer'>{article.source.name}</Link></p>
      </div>
    </div>
  );
};

export default ArticlePage;

export interface NewsArticle {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}
  
export interface NewsData {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface NavProps {
    country: string;
    handleCountryChange: (newCountry: string) => void;
}

export interface NwesCardProps {
    title: string;
    description: string;
    image: any;
}
import React, { useEffect, useState } from "react";
import { fetchNewsData } from "./api";
import NewsArticle from "./components/NewsArticle";
import Trends from "./components/Trends";
import ArticleList from "./components/ArticleList";

const getNewsData = async () => {
  try {
    const query = "industry";
    const response = await fetchNewsData(query);

    const articles = response.data.articles;
    const extractedData = articles.map((article) => ({
      title: article.title,
      description: article.description,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
    }));

    console.log("Extracted data:", extractedData);
  } catch (error) {
    console.error("Error getting news data:", error);
  }
};

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const query = "industry";
        const response = await fetchNewsData(query);

        const articlesData = response.data.articles;
        const trendsData = response.data.trends;

        setArticles(articlesData);
        setTrends(trendsData);
      } catch (error) {
        console.error("Error getting news data:", error);
      }
    };

    getNewsData();
  }, []);

  return (
    <div className="homepage">
      <h1>Latest News Articles</h1>
      <ArticleList />
      <div className="news-articles">
        {articles.map((article) => (
          <NewsArticle
            key={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
      <h1>Trending Topics</h1>
      <div className="trends">
        {trends.map((trend) => (
          <Trends
            key={trend.id}
            title={trend.title}
            description={trend.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import NewsArticle from "./NewsArticle";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchArticlesData(currentPage);
  }, [currentPage]);

  const fetchArticlesData = async (page) => {
    try {
      const response = await fetch(`/api/articles?page=${page}`);
      const data = await response.json();

      setArticles(data.articles);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="article-list">
      {articles.map((article) => (
        <NewsArticle
          key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          publishedAt={article.publishedAt}
        />
      ))}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;

import React from "react";
import Blocks from "editorjs-blocks-react-renderer";

const ArticleRenderer = ({ article }) => {
  const { data, title, creator, updatedAt, readTime } = article;

  const rendered = <Blocks data={data} />;

  return (
    <div className="container">
      <div className="main-article-wrapper">
        {/* <div className="tags-wrapper">
          <div className="tag">Creative</div>
          <div className="tag">Thought</div>
        </div> */}
        <h1>{title}</h1>
        <div className="article-info">
          <div className="info-content">
            <span>{updatedAt}</span>
            <span>
              by <span className="text-secondary underline">{creator}</span>
            </span>
            <span>{readTime} min read</span>
          </div>
          <button>
            <i className="fas fa-share"></i>
          </button>
        </div>
        <div className="article-content">{rendered}</div>
      </div>
    </div>
  );
};

export default ArticleRenderer;

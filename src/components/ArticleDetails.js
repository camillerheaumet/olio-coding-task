import React from "react";

class ArticleDetails extends React.Component {
  getArticleImage = () => {
    if (this.props.article.images[0].files.original === '') {
      return <img src="icon-no-image.png" alt="default" height="100px" width="100px"/>
    } else {
      return <img src={this.props.article.images[0].files.original} alt={`${this.props.article.title}`} height="100px" width="100px"/>
    }
  }

  render() {
    const { article } = this.props
    return (
      <div className="article-details">
        <h3>{article.title}</h3>
        <div>{this.getArticleImage()}</div>
      </div>
    )
  }
}

export default ArticleDetails
import React from 'react'

class ArticleCard extends React.Component {
  getArticleImage = () => {
    if (this.props.article.images[0].files.original === '') {
       return <img src="icon-no-image.png" alt="default" height="100px" width="100px"/>
    } else {
       return <img src={this.props.article.images[0].files.original} alt={`${this.props.article.title}`} height="100px" width="100px"/>
    }
  }

  render () {
    const { article, handleSelectArticle } = this.props

    return (
      <div className='article-card' onClick={() => handleSelectArticle(article)}>
        <h3>{article.title}</h3>
        <div>{this.getArticleImage()}</div>

        <div>
          <h4>Description:</h4>
          <p>{article.description}</p>
        </div>
      </div>
    )
  }
}
  
export default ArticleCard;
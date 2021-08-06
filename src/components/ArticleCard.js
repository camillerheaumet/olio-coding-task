import React from 'react'

class ArticleCard extends React.Component {
  state = { seen: false }

  handleSelect = () => {
    this.setState({ seen: true });

    this.props.handleSelectArticle(this.props.article)
  }

  getArticleImage = () => {
    if (this.props.article.images[0].files.original === '') {
       return <img src="icon-no-image.png" alt="default" height="auto" width="100%"/>
    } else {
       return <img src={this.props.article.images[0].files.original} alt={`${this.props.article.title}`} height="auto" width="100%"/>
    }
  }

  getPrice = () => {
    let currency = '$'
    if (this.props.article.value.currency === 'EUR') {
      currency = '£'
    }

    return `${currency}${this.props.article.value.price}`
  }

  render () {
    const { article } = this.props
    const { seen } = this.state

    return (
      <div className="article-card" onClick={() => this.handleSelect()}>
        {seen && <div className="tag">Seen</div>}
        <div className="details-container">
          <div className="details-content">{this.getArticleImage()}</div>
          <div className="details-content flex-3">
            <h3 className="ellipsis-2">{article.title}</h3>

            <div>
              <h4>Description:</h4>
              <p className="ellipsis-2">{article.description}</p>
            </div>

            <div className="two-columns">
              <div>
                <h4>Price:</h4>
                <p>{this.getPrice()}</p>
              </div>
              <div>
                <h4>Section:</h4>
                <p>{article.section}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  
export default ArticleCard;
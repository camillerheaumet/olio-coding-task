import React from 'react';
import SimpleMap from '../components/SimpleMap'

class ArticleDetails extends React.Component {
  getArticleImage = () => {
    if (this.props.article.images[0].files.original === '') {
      return <img src="icon-no-image.png" alt="default" height="100%" width="100%"/>
    } else {
      return <img src={this.props.article.images[0].files.original} alt={`${this.props.article.title}`} height="100%" width="100%"/>
    }
  }

  getDate = (date) => {
    if (date) {
      const newDate = new Date(date)

      return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
    }

    return 'N/A'
  }

  getPrice = () => {
    let currency = '$'
    if (this.props.article.value.currency === 'EUR') {
      currency = '€'
    }

    return `${currency}${this.props.article.value.price}`
  }

  render() {
    const { article, locationOn } = this.props
    return (
      <div className="article-details">
        <div className="details-container">
          <div className="details-content">{this.getArticleImage()}</div>
          <div className="details-content">
            <h3>{article.title}</h3>

            <div>
              <h4>Description:</h4>
              <p>{article.description}</p>
            </div>

            <div className="two-columns">
              <div>
                <h4>Price:</h4>
                <p>{this.getPrice()}</p>
              </div>
              <div>
                <h4>Collection notes:</h4>
                <p>{article.collection_notes}</p>
              </div>
              <div>
                <h4>Expiry Date:</h4>
                <p>{this.getDate(article.expiry)}</p>
              </div>
              <div>
                <h4>Added on:</h4>
                <p>{this.getDate(article.created_at)}</p>
              </div>
              <div>
                <h4>Section:</h4>
                <p>{article.section}</p>
              </div>
              <div>
                <h4>Posted by:</h4>
                <p>{article.user.first_name}</p>
              </div>
            </div>
          </div>
        </div>

        {locationOn && <div className="details-container">
          <div className="details-content map">
            <h3>Location</h3>
            <SimpleMap
              active={false}
              latitude={article.location.latitude}
              longitude={article.location.longitude}
              text={article.title}
            />
          </div>
        </div>}
      </div>
    )
  }
}

export default ArticleDetails
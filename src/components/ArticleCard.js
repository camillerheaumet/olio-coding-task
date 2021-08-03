import React from 'react'

class ArticleCard extends React.Component {
  state = { expanded: false }
  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  };

  getArticleImage = () => {
    if (this.props.article.images[0].files.original === '') {
       return <img src="icon-no-image.png" alt="default" height="100px" width="100px"/>
    } else {
       return <img src={this.props.article.images[0].files.original} alt={`${this.props.article.title}`} height="100px" width="100px"/>
    }
  }

  render () {
    const { article } = this.props

    return (
      <div className='article-card'>
        <h3>{article.title}</h3>
        <div>{this.getArticleImage()}</div>
        
        <button onClick={() => this.handleExpandClick()}>{
          this.state.expanded ?
          'Hide details': 'Reveal details'}
        </button>
        {this.state.expanded ?
          <div>
            <h4>Description:</h4>
            <p>{article.description}</p>
          </div>
        : null}
      </div>
    )
  }
}
  
export default ArticleCard;
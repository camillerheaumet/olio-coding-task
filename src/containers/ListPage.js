import React from 'react'
import ArticleCard from '../components/ArticleCard'

class ListPage extends React.Component {
  state = {
    filteredArticles: this.props.allArticles
  }

  // onFilterArticles() {
  //   ... TODO
  // }
  
  render () {
    return (
      <div className='list-page'>
        {this.state.filteredArticles.map(article => <ArticleCard article={article} key={article.id}/>)}
      </div>
    )
  }
}

export default ListPage
import React from 'react'
import ArticleCard from '../components/ArticleCard'
import Modal from '../components/Modal'

class ListPage extends React.Component {
  state = { 
    filterInput: "",
    filterSelect: "title",
    selectedArticle: null
  }

  updateFilterInput = newInput => {
    this.setState({ filterInput: newInput })
  }

  updateFilterSelect = newSelect => {
    this.setState({ filter: newSelect })
  }

  filterArticles = () => {
    const articles = this.props.allArticles.filter(article => {
      return article[this.state.filterSelect].toLowerCase().includes(this.state.filterInput.toLowerCase())
    });

    return articles;
  }

  handleSelectArticle = (article) => {
    this.setState({ selectedArticle: article });
  }

  handleCloseModal = () => {
    this.setState({ selectedArticle: null });
  }
  
  render () {
    const { selectedArticle } = this.state;
    const { filterArticles, handleSelectArticle, handleCloseModal } = this;
    return (
      <div className="list-page">
        <div className="search-form">
          <label>Search:</label>
          <input className="search-input" onKeyUp={event => this.updateFilterInput(event.target.value)} placeholder="Search" />

          <label>Filter by:</label>
          <select className="search-select" onChange={event => this.updateFilterSelect(event.target.value)}>
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="section">Section</option>
          </select>
        </div>

        <div className="articles-container">
          {filterArticles().map(article => <ArticleCard article={article} key={article.id} handleSelectArticle={handleSelectArticle}/>)}
        </div>

        {selectedArticle ? 
          <Modal
            article={selectedArticle}
            handleCloseModal={handleCloseModal}
          />
        : null}
      </div>
    )
  }
}

export default ListPage
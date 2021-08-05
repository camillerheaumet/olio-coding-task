import React from "react";
import ArticleDetails from '../components/ArticleDetails'

class Modal extends React.Component {
  handleClose = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  };

  render() {
    const { article, handleCloseModal } = this.props
    return (
      <div className="modal-container">
        <div className="modal-article-details">
          <div className="close-button" onClick={() => handleCloseModal()}></div>

          <ArticleDetails article={article}/>
          
        </div>
      </div>
    )
  }
}

export default Modal
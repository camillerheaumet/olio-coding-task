import React from "react";

class Marker extends React.Component {
  handleMarkerClick(event) {
    event.stopPropagation();

    this.props.openDetails(this.props.article)
  }

  render() {
    const { article } = this.props
    return (
      <div className='marker-container'>
        <img className='marker-icon' src="icon-marker.png" alt={`${article.text}`} onClick={(event) => this.handleMarkerClick(event)}/>
      </div>
    )
  }
}

export default Marker
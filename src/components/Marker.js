import React from 'react';

class Marker extends React.Component {
  handleMarkerClick(event) {
    event.stopPropagation();

    if (this.props.openDetails) {
      this.props.openDetails(this.props.articleId);
    }
  }

  render() {
    const { active, text } = this.props
    return (
      <div className="marker-container">
        <img className={active ? 'marker-icon selected' : 'marker-icon'} src="icon-marker.png" alt={`${text}`} onClick={(event) => this.handleMarkerClick(event)}/>
      </div>
    )
  }
}

export default Marker
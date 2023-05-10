import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageurl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',justifycontent:'flex-end',position:'absolute',right:'0'}}></div>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%'}}>
          {source} 
          </span>
            <img src={imageurl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}...<span className="badge bg-secondary bg-danger">New</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className= "card-text"><small className="text-body-secondary">by {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More...</a>

            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

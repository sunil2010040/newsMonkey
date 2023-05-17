import React from 'react'

const NewsItem=(props)=> {
  
    let{title,description,urlToImage,newsUrl,author,date,source}=props;
    return (
      <div>
        <div className="card" style={{margin:'10px'}} >
          <div ></div>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%',margin:'10px'}}>
          {source} 
          </span>
            <img src={urlToImage} className="card-img-top"/>
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

export default NewsItem

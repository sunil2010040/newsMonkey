import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import spinner from './Spinner'


export class news extends Component {
    
   static defaultProps={
    country:'in',
    pageSize: 8,
    category:'business'
    } 

    static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    } 
constructor(props)
{
    super(props);
    console.log("hello world");
    this.state={
        articles:[],
        loading:true,
        page:1,
        totalResults:0
    }
    document.title=`${this.props.category}-NewsMonkey`;
}

async updateNews()
{
  this.props.setProgress(30);
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data= await fetch(url);
  let parseData= await data.json();
  this.setState({articles:parseData.articles,
    totalResults:parseData.totalResults,
  loading:false})
  this.props.setProgress(100);
}

async componentDidMount(){
  this.updateNews();
}

handleprevClick=async()=>{
  console.log("prev")
    await this.setState({
      page: this.state.page-1
    })

    this.updateNews();
}

handlenextClick=async()=>{
  console.log("next")
      await this.setState({
        page: this.state.page+1
    })

    this.updateNews();
}
fetchMoreData = async() => {
  this.setState({page:this.state.page+1})
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
  
  let data= await fetch(url);
  let parseData= await data.json();
  this.setState({
    articles:this.state.articles.concat(parseData.articles),
    totalResults:parseData.totalResults
  })
};

  render() {
    return (
        <div className="container my-5 ">
            <h1 className="text-center" style={{marginBottom:'20px'}}>NewsMonkey-top {this.props.category} news</h1>
            {/*this.state.loading &&<Spinner/>*/}
            
            <div className="row">
              {this.state.articles.map((element)=>{
                return <div className="col-md-4 my-5" key={element.url}>
                  <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage?element.urlToImage:"38767.png"} newsUrl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt?element.publishedAt:""} source={element.source.name}  />
                </div>
              })}
              </div>

              <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length!==this.state.totalResults}
              loader={<Spinner/>}/
              >

              
        </div>
      )
  } 
}

export default news

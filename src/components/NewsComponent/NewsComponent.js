import NewsItem from "../NewsItem/NewsItem";
import { useState, useEffect } from "react";
import spinner from '../../Spinner-2.gif'
import { useParams } from "react-router-dom";
import './NewsComponent.css'
import newsify_icon from '../../newsify_icon-nobg.png'


const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const News = () => {
    setIsLoading(true)
    setPageNum(1);
    fetch(`https://newsapi.org/v2/top-headlines?country=in${params.category ? `&category=${params.category}&` : `&`}apiKey=f974303011574e19893627565a105813&page=1&pageSize=20`)
      .then(
        response => {
          return response.json()
        })
      .then(data => {
        setNewsData(data.articles)
        setResults(data.totalResults)
        setIsLoading(false)
      })
    console.log(params.category)
  }
  useEffect(() => {
    setPageNum(1);
    News();
    window.scrollTo(0,0)
  }, [params.category]);

  const newsItemElement = newsData ? newsData.map(item => {
    return <div key={item.url} className="col-md-4 my-4"><NewsItem id={item.url} title={item.title} description={item.description} url={item.url} image={item.urlToImage} author= {item.author} date={item.publishedAt}/></div>
  }) : ''

  const nextPageHandler = () => {
    if (pageNum+1 > Math.ceil(results / 20)) {

    } else {
      
      setIsLoading(true)
      fetch(`https://newsapi.org/v2/top-headlines?country=in&${params.category ? `&category=${params.category}&` : `&`}apiKey=f974303011574e19893627565a105813&page=${pageNum + 1}&pageSize=20`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setNewsData(data.articles)
          setIsLoading(false)
          window.scrollTo(0,0)
        })
    }
    setPageNum(pageNum + 1)
    
  }

  const prevPageHandler = () => {
    setIsLoading(true)
    fetch(`https://newsapi.org/v2/top-headlines?country=in&${params.category ? `&category=${params.category}&` : `&`}apiKey=f974303011574e19893627565a105813&page=${pageNum - 1}&pageSize=20`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setNewsData(data.articles)
        setIsLoading(false)
        window.scrollTo(0,0)
      })
    setPageNum(pageNum - 1)
   
  }

  const location = (window.location.pathname).substring(1).toUpperCase();
  console.log(location)
  

  return (
    <div className="container my-4">
      <h1 className="text-center heading"><span>
      <img src={newsify_icon} alt="" width={75} height={75}/>
      Newsify - 
        </span>{location ? location : "Top headlines of the day"}</h1>
      {isLoading && <div className="text-center"> <img src={spinner} alt="loading" /> </div>}
      <div className="row my-4">
        {newsItemElement}
      </div>
      <div className="container d-flex justify-content-between">
        <button className="btn-dark navigate-btn" disabled={pageNum <= 1} onClick={prevPageHandler}>&larr; Previous</button>
        <p>Page no: {pageNum}</p>
        <button className="btn-dark navigate-btn" disabled={pageNum >= Math.ceil(results / 20)} onClick={nextPageHandler}>Next &rarr;</button>
      </div>
    </div>
  )
};

export default NewsComponent;


import missing from '../../imgMissing.jpg'
import './NewsItem.css'

const NewsItem = (props) => {
  return (
    <div className="card" key={props.id}>
      {props.image ? <img src={props.image} className="card-img-top" alt="..." /> : <img src={missing} className="card-img-top" alt="..." />}
      <div className="card-body">
        <h5 className="card-title">{props.title ? props.title.slice(0, 35) : ''}...</h5>
        <p className="card-text">{props.description ? props.description.slice(0, 100) : ''}...</p>
        <p className="card-text"><small className="text-body-secondary">By {props.author ? props.author : 'Unknown'} on {new Date(props.date).toGMTString()}.</small></p>
        <a href={props.url} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read more</a>
      </div>
    </div>
  )
};

export default NewsItem;
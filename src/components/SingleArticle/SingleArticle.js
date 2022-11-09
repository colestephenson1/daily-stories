import './SingleArticle.css';
import { Link } from 'react-router-dom';

const SingleArticle = ({title, date}) => {
    return (
        <div className='single-article'>
            <Link to={`/${date}/details`}><p className='article-title'>{title}</p></Link>
        </div>  
    )
}

export default SingleArticle;

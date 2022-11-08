import './SingleArticle.css';
import { Link } from 'react-router-dom';

const SingleArticle = ({title}) => {
    return (
        <div className='single-article'>
            <Link to={`/${title}/details`}><p className='article-title'>{title}</p></Link>
        </div>  
    )
}

export default SingleArticle;

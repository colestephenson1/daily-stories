import './SingleArticleDetails.css';
import { Link } from 'react-router-dom';

const SingleArticleDetails = ({article}) => {

    const {title, multimedia, short_url, abstract, byline } = article;
    return(
        <div className='details-box'>
            <div className='image-and-title'>
                <img className='pic' src={multimedia[0].url} alt={multimedia[0].caption}/>
                <p>{title} {byline}</p>
            </div>
            <p className='abstract'>{abstract}</p>
            <a className='nyt-link' target="_blank" rel="noreferrer" href={short_url}>Link to this article at NYT</a>
            <Link to='/'><p className='home-link'>Go Back</p></Link>

        </div>
    )
}

export default SingleArticleDetails;

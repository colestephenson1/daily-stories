import './ArticleBox.css';
import { useEffect } from 'react'; 
import SingleArticle from '../SingleArticle/SingleArticle';

const ArticleBox = ({results, setResults, topic}) => {

    let mappedResults;

    useEffect(() => {

        const fetchArticles = async (topicChoice) => {
            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=YMwGtcuTdYGINAxVqRw5puQauT6dAhD3`);
            const data = await response.json();
            let filtered = data.results.filter(article => article.title)
            setResults(filtered);      
        }

        fetchArticles(topic);

    }, [topic, setResults])



    if(results) {
        let count = 0;
        mappedResults = results.map(result => {
            count ++;
            const {title, published_date} = result
            return (
                <SingleArticle
                    title={title}
                    date={published_date}
                    key={count}
                />
            )
        })
    }   

    return(
        <div className='article-box'>
            {mappedResults}
        </div>
    )
}

export default ArticleBox;

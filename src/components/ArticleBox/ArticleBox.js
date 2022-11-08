import './ArticleBox.css';
import { useEffect } from 'react'; 
import SingleArticle from '../SingleArticle/SingleArticle';

const ArticleBox = ({results, setResults, topic}) => {

    let mappedResults;

    useEffect(() => {

        const fetchArticles = async (topicChoice) => {
            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=YMwGtcuTdYGINAxVqRw5puQauT6dAhD3`);
            const data = await response.json();
            setResults(data.results);      
        }

        fetchArticles(topic);

    }, [topic, setResults])



    if(results) {
        let count = 0;
        mappedResults = results.map(result => {
            count ++;
            const {title} = result
            return (
                <SingleArticle
                    title={title}
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

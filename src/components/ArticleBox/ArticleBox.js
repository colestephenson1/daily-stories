import './ArticleBox.css'
import { useState, useEffect } from 'react' 
import SingleArticle from '../SingleArticle/SingleArticle'

const ArticleBox = ({topic}) => {

    const [results, setResults] = useState([])
    let mappedResults

    

    useEffect(() => {

        const fetchArticles = (topicChoice) => {
            return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=YMwGtcuTdYGINAxVqRw5puQauT6dAhD3`)
            .then(response => response.json())
            .then(data => {
                setResults(data.results) 
            })      
        }
        fetchArticles(topic)
    }, [topic])



    if(results) {
        let count = 0
        mappedResults = results.map(result => {
            count ++
            const {subsection, title, short_url, multimedia} = result
            return (
                <SingleArticle
                    subsection={subsection}
                    title={title}
                    url={short_url}
                    image={multimedia[0].url}
                    caption={multimedia[0].caption}
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

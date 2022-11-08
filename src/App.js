import './App.css';
import { Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import ArticleBox from './components/ArticleBox/ArticleBox'
import SingleArticleDetails from './components/SingleArticleDetails/SingleArticleDetails'
import { useState } from 'react'

function App() {

  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Form setTopic={setTopic}/>
      <Switch>
        <Route exact path='/' render={() => <ArticleBox topic={topic} results={results} setResults={setResults}/>}/>
        <Route exact path='/:title/details' render={({match}) => {
         let chosenArticle = results.find(article => article.title === match.params.title)
         return <SingleArticleDetails article={chosenArticle}/>
        }}/>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import ArticleBox from './components/ArticleBox/ArticleBox'
import SingleArticleDetails from './components/SingleArticleDetails/SingleArticleDetails'
import Header from './components/Header/Header'
import Greeting from './components/Greeting/Greeting'
import { useState } from 'react'

function App() {

  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Form setTopic={setTopic}/>
      <Switch>
        <Route exact path='/' render={() => topic ? <ArticleBox topic={topic} results={results} setResults={setResults}/> : <Greeting/>}/>
        <Route exact path='/:date/details' render={({match}) => {
         let chosenArticle = results.find(article => article.published_date === match.params.date)
         return <SingleArticleDetails article={chosenArticle}/>
        }}/>
      </Switch>
    </div>
  );
}

export default App;

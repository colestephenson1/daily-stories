import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import Form from './components/Form/Form'
import ArticleBox from './components/ArticleBox/ArticleBox'
import SingleArticleDetails from './components/SingleArticleDetails/SingleArticleDetails'
import {useState} from 'react'

function App() {

  const [topic, setTopic] = useState('')

  return (
    <div className="App">
      <Form setTopic={setTopic}/>
      <Switch>
        <Route exact path='/' render={() => <ArticleBox topic={topic}/>}/>
        <Route exact path='/articleDetails' render={() => <SingleArticleDetails/>}/>
      </Switch>
    </div>
  );
}

export default App;

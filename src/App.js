import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {BrowserRouter as Router} from 'react-router-dom'

const App = ({state}) => {
  return (
    <Router>
      <Header/>
      <Main state={state}/>
    </Router>
  )
}

export default App;

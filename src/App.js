import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {BrowserRouter as Router} from 'react-router-dom'
import store from "./redux/store";

const App = ({store}) => {
  return (
    <Router>
      <Header/>
      <Main store={store}/>
    </Router>
  )
}

export default App;

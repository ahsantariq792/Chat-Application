import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Chats from './Pages/Chats';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/chats" component= {Chats} />
    </>
  );
}

export default App;

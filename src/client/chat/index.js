import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat';
import Video from './components/video';
import './styles.css';
import './components/chateng.js'

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
/*
const App = () => (
  <ReactRouterDOM.HashRouter>
    <ul>
      <li><Link to="/chat">Chat</Link></li>
      <li><Link to="/video">Video</Link></li>
    </ul>
    <Route path="/chat" component={Chat} />
    <Route path="/video" component={Video} />
  </ReactRouterDOM.HashRouter>
)
*/

//ReactDOM.render(<App />, document.querySelector('#index'));

ReactDOM.render(<Chat a="1111"/>, document.getElementById('index'));

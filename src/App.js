import React from 'react';
import './App.css';
import NewsFeed from './Components/NewsFeed/NewsFeed';
import NewsFeedService from './Services/NewsFeedService'

function App() {
  return (
    <div className="App">
        <NewsFeed stories={NewsFeedService} />
    </div>
  );
}

export default App;

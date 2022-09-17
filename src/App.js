import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import  RecommendedVideos from './components/recvideos/RecommendedVideos';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app__page'>
        <Sidebar/>
        <RecommendedVideos/>
      </div>
    </div>
  );
}

export default App;

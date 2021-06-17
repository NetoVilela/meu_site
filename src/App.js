import Navbar  from './components/Navbar/index';
import Apresentation from './components/Apresentation/index';
import Topic from './components/Topic/index';


function App() {
  return (
    <div className="App container">
      <Navbar />
      <Apresentation />
      <Topic title="Formações" number={1} />
      
    </div>
  );
}

export default App;

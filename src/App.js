import Navbar  from './components/Navbar/index';
import Apresentation from './components/Apresentation/index';
import Topic from './components/Topic/index';
import Formation from './components/Formation/index';


function App() {
  return (
    <div className="App container">
      <Navbar />
      <Apresentation />
      <Topic title="Minhas formações" number={1}>

        <Formation course="Ciências e Tecnologia"
          institution="Universidade Federal do Rio Grande do Norte"
          initials="UFRN" degree="Bacharelado" status="Cursando"
          dateStart="11/02/2019" bar='true' />

        <Formation course="Ciências e Tecnologia"
          institution="Universidade Federal do Rio Grande do Norte"
          initials="UFRN" degree="Bacharelado" status="Cursando"
          dateStart="11/02/2019" bar='true' />
        
        <Formation course="Ciências e Tecnologia"
          institution="Universidade Federal do Rio Grande do Norte"
          initials="UFRN" degree="Bacharelado" status="Cursando"
          dateStart="11/02/2019" bar='true' />

        <Formation course="Ciências e Tecnologia"
          institution="Universidade Federal do Rio Grande do Norte"
          initials="UFRN" degree="Bacharelado" status="Cursando"
          dateStart="11/02/2019" bar='true' />

        <Formation course="Ciências e Tecnologia"
          institution="Universidade Federal do Rio Grande do Norte"
          initials="UFRN" degree="Bacharelado" status="Cursando"
          dateStart="11/02/2019" bar='true' />

      </Topic>
      
    </div>
  );
}

export default App;

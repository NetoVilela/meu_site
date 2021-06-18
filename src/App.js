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
          dateStart="Fevereiro/2019" dateEnd="Fevereiro/2022" concluded={false} bar='true' />

        <Formation course="Programador Web"
          institution="Instituto Federal de Ciência e Tecnologia do Rio Grande do Norte"
          initials="IFRN" degree="Profissonalizante" status="Concluído"
          dateStart="2020" dateEnd="2020" bar='true' concluded={true} />

        <Formation course="Informática"
          institution="Instituto Federal de Ciência e Tecnologia do Rio Grande do Norte"
          initials="IFRN" degree="Técnico" status="Concluído"
          dateStart="Maio/2015" dateEnd="Fevereiro/2019" concluded={true} bar='true' />

      </Topic>
      
    </div>
  );
}

export default App;

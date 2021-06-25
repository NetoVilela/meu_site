import Navbar  from './components/Navbar/index';
import Apresentation from './components/Apresentation/index';
import Topic from './components/Topic/index';
import Formation from './components/Formation/index';
import Knowledge from './components/Knowledge/index';
import Knowledges from './components/Knowledges/index';

//Images
import html5 from './images/html5.png';
import css3 from './images/css3.png';
import javascript from './images/javascript.png';
import jquery from './images/jquery.png';
import bootstrap from './images/bootstrap.png';
import php from './images/php.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import figma from './images/figma.png';
import docker from './images/docker.png';
import github from './images/github.png';



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
      
      <Topic title="Meus conhecimentos" number={2}>
        <Knowledges>
          <Knowledge src={html5} level={4} />
          <Knowledge src={css3} level={4} />
          <Knowledge src={javascript} level={4} />
          <Knowledge src={jquery} level={2} />
          <Knowledge src={bootstrap} level={4} />
          <Knowledge src={react} level={3} />
          <Knowledge src={php} level={3} />
          <Knowledge src={nodejs} level={3} />
          <Knowledge src={docker} level={3} />
          <Knowledge src={github} level={3} />
          <Knowledge src={figma} level={2} />
        </Knowledges>
      </Topic>

    </div>
  );
}

export default App;

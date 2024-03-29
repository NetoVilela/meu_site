import Navbar  from './components/Navbar/index';
import Apresentation from './components/Apresentation/index';
import Topic from './components/Topic/index';
import Formation from './components/Formation/index';
import Knowledge from './components/Knowledge/index';
import Knowledges from './components/Knowledges/index';
import Project from './components/Project/index';
import {Projects} from './components/Project/styled';
import Contact from './components/Contact/index';
import Verse from './components/Verse/index';
import Up from './components/Up/index';
import Footer from './components/Footer/index';

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
import postgres from './images/postgresql.png';
import mysql from './images/mysql.png';
import mongodb from './images/mongodb.png';
import listadetarefas from './images/listadetarefas.png';
import blog from './images/blog.png';
import gmail from './images/gmail.png'
import instagram from './images/instagram.png';
import whatsapp from './images/whatsapp.png';
import up from './images/up.png';
import selecao_diet_system from './images/selecao_diet_system.png';
import sistemacursos from './images/sistema_cursos.png';
import typescript from './images/typescript.png';
import materialui from './images/materialui_logo.png';
import nestjs from './images/nestjs.png';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar id="topo" />
        <Apresentation text="
        Seja bem vindo ao meu portfólio. Meu nome é Neto Vilela e eu sou um desenvolvedor web focado nas tecnologias JavaScript,
        como ReactJS e NodeJS. Dá uma olhada na página para mais informações." />
        <Topic title="Minhas formações" number={1} id="formacoes">

          <Formation course="Ciências e Tecnologia da Computação"
            institution="Universidade Federal do Rio Grande do Norte"
            initials="UFRN" degree="Bacharelado" status="Cursando"
            dateStart="Fevereiro/2019" dateEnd="Junho/2023" concluded={false} bar='true' />

          <Formation course="Programador Web"
            institution="Instituto Federal de Ciência e Tecnologia do Rio Grande do Norte"
            initials="IFRN" degree="Profissonalizante" status="Concluído"
            dateStart="2020" dateEnd="2020" bar='true' concluded={true} />

          <Formation course="Informática"
            institution="Instituto Federal de Ciência e Tecnologia do Rio Grande do Norte"
            initials="IFRN" degree="Técnico" status="Concluído"
            dateStart="Maio/2015" dateEnd="Fevereiro/2019" concluded={true} bar='true' />

        </Topic>
        
        <Topic title="Meus conhecimentos" number={2} id="conhecimentos">
          <Knowledges>
            <Knowledge src={html5} level={4} />
            <Knowledge src={css3} level={4} />
            <Knowledge src={javascript} level={4} />
            <Knowledge src={jquery} level={3} />
            <Knowledge src={bootstrap} level={4} />
            <Knowledge src={react} level={4} />
            <Knowledge src={php} level={4} />
            <Knowledge src={nodejs} level={3} />
            <Knowledge src={docker} level={3} />
            <Knowledge src={github} level={4} />
            <Knowledge src={figma} level={3} />
            <Knowledge src={postgres} level={4} />
            <Knowledge src={mysql} level={2} />
            <Knowledge src={mongodb} level={1} />
            <Knowledge src={typescript} level={3} />
            <Knowledge src={materialui} level={3} />
            <Knowledge src={nestjs} level={3} />
          </Knowledges>
        </Topic>


        <Topic title = "Meus projetos" number={3} id="projetos">
          <Projects>
          <Project src={sistemacursos} link="https://cursos-front.vercel.app/dashboard"
            description="Frontend de um sistema de gerenciamento de cursos. Criado utilizando ReactJS, Bootstrap. A API está dasativada, por isso os loadings estarão presentes em todas páginas da aplicação."/>
            <Project src={listadetarefas} link="http://listadetarefas-nodejs.herokuapp.com/"
            description="Lista de tarefas online com cadastro e login. Criado usando NodeJS."/>
            <Project src={blog} link="http://blog-cake-php.herokuapp.com/"
            description="Blog online com cadastro de postagens. Criado usando cakePHP 2, bootstrap, e PostgreSql." />
            <Project src={selecao_diet_system} link="https://selecao-dietsystem.vercel.app/"
            description="Projeto 100% ReactJS criado para participar do processo seletivo na DietSystem. Apenas front-end." />
          </Projects>  
        </Topic>

        <Topic title = "Meus contatos" number={4} id="contatos">
          <Contact src={github} link="http://www.github.com/NetoVilela" text="github.com/NetoVilela"/>
          <Contact src={whatsapp} link="https://api.whatsapp.com/send?phone=5584996067943" text="(84) 9 9606-7943"/>
          <Contact src={instagram} link="https://www.instagram.com/netovilelaf/" text="@netovilelaf"/>
          <Contact src={gmail} text="favneto.a.v.n@gmail.com"/>
        </Topic>

        

        <Up src={up} href="#topo" />
      </div>
      <Verse text="Mas tudo deve ser feito com decência e ordem." reference="- 1 Coríntios 14:40" />
      <Footer text=" &copy; Desenvovlvido por Neto Vilela" />
    </div>
  );
}

export default App;

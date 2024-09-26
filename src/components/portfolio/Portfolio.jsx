import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import idCont from "../../util/idCont";

const items = [
  {
    id: idCont(),
    title: "Simulador de Empregabilidade",
    img: "/simulador-empregabilidade.png",
    desc: "Esta aplicação Full-Stack simula um sistema de recomendação de usuários para cargos de emprego. Permite visualizar uma lista de usuários fictícios e filtrar os resultados com base em habilidades e cargos. Os detalhes dos usuários são exibidos em um modal, e o usuário pode recomendar um perfil via email. Aplicação desenvolvida usando Laravel PHP, Blade e Javascript.",
    link: "https://github.com/slpascoal/Simulador-Empregabilidade",
    botao: "Confira"
  },
  {
    id: idCont(),
    title: "MyBooks",
    img: "/mybooks.png",
    desc: "Um site para os amantes dos livros. MyBooks é uma aplicação Full-Stack desenvolvida em React e Node.js que armazena livros lidos pelo usuário. O usuário pode listar livros, favoritar e ver sua estante de livros lidos. Além disso, consegue acompanhar os últimos livros lançados na plataforma.",
    link: "https://github.com/slpascoal/mybooks",
    botao: "Confira"
  },
  {
    id: idCont(),
    title: "Portfólio Pessoal",
    img: "/projeto-portfolio.png",
    desc: "Portfólio desenvolvido com base no projeto de Safak e é utilizado para complementar meu currículo dev, incluindo fatos sobre mim e projetos. Foi usado React, Node.js, Javascript, SCSS e HTML para o desenvolvimento",
    link: "https://portfolio-silas-psi.vercel.app/",
    botao: "Confira"
  },
  {
    id: idCont(),
    title: "Site 'Zero Brava'",
    img: "/zero-brava.png",
    desc: "Site ativo e desenvolvido para um podcast sobre cultura e movimentos artísticos de Belo Horizonte e região. O site possui ao todo 4 páginas e a funcionalidade de Blog, onde o cliente possui acesso a um sistema para adicionar posts na plataforma. Aplicação desenvolvida usando Wordpress, Elementor e MySQL.",
    link: "https://zerobrava.com.br/",
    botao: "Acesse"
  },
  {
    id: idCont(),
    title: "SquadIt",
    img: "/squadit.png",
    desc: "Usando React, Node e NPM, o projeto SquadIt tem o intuito de ser um organizador de equipes dev. O usuário preenche os dados do colaborador e, dependendo do Time que ele fazer parte, será criado um card em sua respectiva equipe de desenvolvimento!",
    link: "https://squadit.vercel.app/",
    botao: "Acesse"
  },
  {
    id: idCont(),
    title: "Braço Mecânico",
    img: "/braco-mecanico.png",
    desc: "Simulador de Braço Mecânico, desenvolvido em um projeto acadêmico de Computação Gráfica. Nesse simulador foi usado Python e mais algumas bibliotecas como PyGame e PyOpenGL para o desenvolvimento.",
    link: "https://github.com/slpascoal/Braco-Mecanico",
    botao: "Ir ao Repositório"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blanck"><button>{item.botao}</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Meus Projetos</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  /*{
    id: 1,
    title: "SquadIt",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Usando React e Node.js, esse projeto tem como intuito ser um organizador de equipes. Nele, é possivel cadastrar pessoas e suas respectivas funções. Além disso, usei Photoshop e Canva para criar artes personalizadas para a aplicação.",
  },*/
  {
    id: 2,
    title: "Portfólio Pessoal",
    img: "/projeto-portfolio.png",
    desc: "Portfólio desenvolvido com base no projeto de Safak e é utilizado para complementar meu currículo dev, incluindo fatos sobre mim e projetos. Foi usado React, Node.js, Javascript, SCSS e HTML para o desenvolvimento",
    link: "https://portfolio-silas-psi.vercel.app/",
    botao: "Confira"
  },
  {
    id: 3,
    title: "Site 'Zero Brava'",
    img: "/zero-brava.png",
    desc: "Site ativo e desenvolvido para um podcast sobre cultura e movimentos artísticos de Belo Horizonte e região. O site possui ao todo 4 páginas e a funcionalidade de Blog, onde o cliente possui acesso a um sistema para adicionar posts na plataforma. Aplicação desenvolvida usando Wordpress, Elementor e MySQL.",
    link: "https://zerobrava.com.br/",
    botao: "Acesse"
  },
  {
    id: 4,
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

import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { SiTypescript, SiVite } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaPhp, FaBookReader } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa6";
import { FaElementor } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva, SiStyledcomponents, SiExpress   } from "react-icons/si";
import { BsMeta } from "react-icons/bs";
import { SiGoogleads } from "react-icons/si";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { MdOutlineWorkOutline } from "react-icons/md";


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          afinal, quem é
          <br /> Silas Lopes Pascoal?
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"rebeccapurple"}}>Descubra</motion.b> um pouco
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"rebeccapurple"}}>sobre</motion.b> mim.
          </h1>
          <button>Back-End e Front-End</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tecnologias</h2>
          <h3><FaLaravel /> <FaPhp /> <FaDocker /> <SiMysql /> <FaReact /> <FaNodeJs /> <SiTypescript /> <SiSwagger /> <SiVite /> <RiTailwindCssFill />  <FaWordpress /></h3>
          <p>
            Possuo conhecimento em uma série de tecnologias e linguagens de programação. As principais são: Laravel, PHP, Docker, MySQL, React, Node.js, Typescript, Swagger, Vite, Tailwind CSS e Wordpress.
          </p>
                             
          <p><FaLaravel /> <FaPhp /> <FaDocker /> <SiMysql /> <FaReact /> <FaNodeJs /> <SiTypescript /> <SiSwagger /> <SiVite /> <RiTailwindCssFill />  <FaWordpress /></p>
           
          
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Formações</h2>
          <h3>
            Ensino Superior Completo em Ciências da Computação <br />
            Possuo certificações Front-End e Back-End em plataformas como Alura, Rocketseat e Udemy.
          </h3>
          <p>
          Possuo Ensino Superior Completo em Ciências da Computação pelo Centro Universitário Una. <br />
          Além disso, possuo também certificações Front-End e Back-End em plataformas como Alura, Rocketseat e Udemy.
          </p>

          <p><HiMiniAcademicCap /> <FaBookReader /></p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Experiência</h2>
          <h3>Eu atuo como Desenvolvedor Web Full-Stack autônomo, além de ter experência como Técnico de Suporte. Meus projetos estão focados em otimizar a experiência dos usuários e garantir alta performance e segurança.</h3>
          <p>
          Eu atuo como Desenvolvedor Web Full-Stack autônomo, além de ter experência como Técnico de Suporte. Meus projetos estão focados em otimizar a experiência dos usuários e garantir alta performance e segurança.
          </p>

          <p><MdOutlineWorkOutline /></p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Características  Pessoais</h2>
          <h3>Aprendizado rápido, extrovertido, focado em minhas tarefas, proativo e forte espírito de equipe</h3>
          <p>
          Sou um indivíduo com aprendizado rápido, extrovertido, focado em minhas tarefas, comprometimento e proativo. Além disso, me caracterizo por ser algúem com forte espírito de equipe e inteligente emocionalmente.
          </p>
          
          <p><FaPeopleGroup /></p>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

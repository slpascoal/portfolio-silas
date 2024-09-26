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
          <button>CONHECIMENTOS E TRAÇOS</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tecnologias</h2>
          <h3><FaReact /> <FaNodeJs /> <SiTypescript /> <SiVite /> <DiMongodb /> <RiTailwindCssFill /> <SiStyledcomponents /> <SiExpress /> <FaPhp /> <FaWordpress /></h3>
          <p>
            Possuo conhecimento em uma série de tecnologias e linguagens de programação. As principais são: React, Node.js, Typescript, Vite, MongoDB, Tailwind CSS, Styled-Components, Express, PHP, Python e Wordpress.
          </p>
                             
          <p><FaReact /> <FaNodeJs /> <SiTypescript /> <SiVite /> <DiMongodb /> <RiTailwindCssFill /> <SiStyledcomponents /> <SiExpress /> <FaPhp /> <FaWordpress /></p>
           
          
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Formação</h2>
          <h3>Ensino Superior Completo em Ciências da Computação</h3>
          <p>
          Possuo Ensino Superior Completo em Ciências da Computação pelo Centro Universitário Una.
          </p>

          <p><HiMiniAcademicCap /></p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Certificações</h2>
          <h3>Possuo certificações Full-Stack, Front-End e Back-End em plataformas como Alura, Rocketseat e Udemy</h3>
          <p>
            Mesmo com Ensino Superior Completo, eu sigo estudando e me atualizando dia após dia. Possuo certificações Full-Stack, Front-End e Back-End em plataformas como Alura, Rocketseat e Udemy.
          </p>

          <p><FaBookReader /></p>
          
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

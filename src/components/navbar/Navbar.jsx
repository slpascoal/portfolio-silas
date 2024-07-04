import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://github.com/slpascoal" target="_blanck">
            <img src="/github-11-64.png" alt="" />
          </a>
          <a href="https://www.instagram.com/msi.lp/" target="_blanck">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/silaspascoal/" target="_blanck">
            <img src="/linkedin-3-64.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

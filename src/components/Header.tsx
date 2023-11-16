import { motion } from "framer-motion"
import { Link } from "react-router-dom"



export default function Header() {

    return(
        <header className="w-full h-16 fixed flex justify-center">
            <motion.ul className="mt-5 flex gap-4 text-xl text-white"
            initial={{y:-50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{ease: "easeOut", duration: 0.5, delay: 0.5}}
            >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/sobre">Sobre mim</Link></li>
            </motion.ul>
        </header>
    )
}
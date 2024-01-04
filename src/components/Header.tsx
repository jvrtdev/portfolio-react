import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import MenuModal from "./MenuModal";



export default function Header() {
    const [openModal, setOpenModal ] = useState<Boolean>(false);
    return(
        <header className="w-full h-16 fixed flex justify-center">
            <motion.ul className="mt-5 hidden gap-4 text-xl text-white sm:flex"
            initial={{y:-50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{ease: "easeOut", duration: 0.5, delay: 0.5}}
            >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/sobre">Sobre mim</Link></li>
            </motion.ul>
            <div onClick={() => setOpenModal(!openModal)}
            className="absolute right-2 mt-2 text-white text-4xl sm:hidden"
            >
                <IoMenu />
                {openModal && <MenuModal />}
            </div>
        </header>
    )
}
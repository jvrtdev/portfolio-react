import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ButtonContato from "./ButtonContato";
import { motion } from "framer-motion";


const Buttons = [
    {
        text: "Linkedin",
        icon: <FaLinkedin />,
        id: 1,
        link: "https://www.linkedin.com/in/jvrtdev/"
    },
    {
        text: "Currículo",
        icon: <IoDocumentText />,
        id: 2,
        link: "/curriculo.pdf"
    },
    {
        text: "GitHub",
        icon: <FaGithub />,
        id: 3,
        link: "https://github.com/jvrtdev"
    },
    {
        text: "Email",
        icon: <AiOutlineMail />,
        id: 4,
        link: "mailto:jvrtdev@gmail.com"
    }
]

export default function SectionOla() {

    return(
        <div className="flex justify-center">
            <div className="w-full h-full max-w-6xl">
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="text-white mt-5">
                        <motion.h1 className="text-8xl md:text-8xl font-sans font-bold"
                        animate={{y:[0,-5,-10,-10,-5,0,5,10,10,5,0] }}
                        transition={{repeat: Infinity, 
                            ease: "easeInOut", }}

                        >Olá!
                        
                        </motion.h1>
                        <h2 className="text-2xl md:text-2xl font-mono tracking-tighter"
                        >Meu nome é João, Eu sou Desenvolvedor Front-End</h2>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <img src="/foto.jpeg" alt="foto-joao"
                        className="rounded-full w-70 h-70"
                        />
                    </div>
                </div>
                    <div className="flex justify-center gap-2 mt-2 flex">
                        {Buttons.map((button, index) => (
                                <ButtonContato 
                                key={index}
                                text={button.text}
                                icon={button.icon}
                                id={button.id}
                                link={button.link}
                                />
                            ))}

                    </div>
            </div>
        </div>
    )
}
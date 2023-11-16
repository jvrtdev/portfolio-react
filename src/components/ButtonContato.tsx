import { motion } from "framer-motion";



interface ButtonProps{
    text: string;
    icon: any;
    id: any;
    link: string;
}



export default function ButtonContato({text, icon, id, link} :ButtonProps) {
    
    function Link(url :string) {
        window.open(url, '_blank');
    }
    return(
        <>
        <motion.button className="p-2 border-2 border-black rounded-2xl flex items-center text-lg sm:text-xl
        hover:text-white hover:border-white"
        key={id}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        onClick={() => Link(link)}
        >
            {text} 
            {icon} 


        </motion.button>

        
        </>
    )
}
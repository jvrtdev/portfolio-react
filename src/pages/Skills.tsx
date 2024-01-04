import CardSkills from "../components/CardSkills";
import { BiLogoAws, BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi"

export default function Skills() {

    const Cards  = [
        {
            icon:  <BiLogoJavascript />,
            text: 'Javascript'
        },
        {
            icon: <BiLogoTypescript/>,
            text: 'Typescript'
        },
        {
            icon: <BiLogoReact/>,
            text: 'React'
        },
        {
            icon: <BiLogoTailwindCss />,
            text: 'Tailwind'
        },
        {
            icon: <BiLogoHtml5/>,
            text: 'HTML'
        },
        {
            icon: <BiLogoCss3/>,
            text: 'CSS'
        },
        {
            icon: <BiLogoGit/>,
            text: 'Git'
        },
        {
            icon: <BiLogoGithub/>,
            text: 'GitHub'
        },
        {
            icon: <BiLogoAws/>,
            text: 'AWS Services'
        },
        {
            icon:<BiLogoMongodb />,
            text: 'MongoDB'
        },
     

    ]


    return(
        <div className="pt-16 bg-gradient-to-b from-sky-700 to-sky-200 w-full h-screen p-5">
            <h1 className="text-4xl text-white text-center my-10">Minhas Skills</h1>

            <div className="flex flex-wrap ">
                {Cards.map((card, index) => (
                    <CardSkills 
                    key={index}
                    icon={card.icon}
                    text={card.text}
                    />))}
            </div>
        </div>
    )
}
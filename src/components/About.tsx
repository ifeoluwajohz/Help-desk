import React, {useState} from 'react'
import data from "../data/data.json"
import { Link } from 'react-router-dom'


interface Stat{
    label:string,
    value : string
}
interface Extensive{
    iconUrl: string,
    title : string,
    describe: string
    link: string
}
interface Team {
    role: string,
    name: string,
    singlehead: string
}

const About:React.FC = () => {
    const stats : Stat[] = data.stats;
    const extensives : Extensive[] = data.extends;
    const teams : Team[] = data.teams;
    const [name, setName] = useState<string>('')

  return (
    <div className="text-center ">
        <p>About us</p>
        <h1 className="md:text-5xl text-3xl mt-2 font-semibold text-amber-800 ">A proficient team with extensive knowledge</h1>
        <img className="w-full h-64 my-6 object-cover px-2" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D" alt="pop-up community" />
        <div className="flex flex-wrap justify-between mt-5 items-center p-2">
            {stats.map((stat, index) =>(
                <div key={index} className="justify-items-start align-middle justify-self-center items-center m-2">
                    <p className="md:text-4xl text-base font-bold">{stat.value}</p>
                    <p className="text-base font-light">{stat.label}</p>
                </div>
            ))}
        </div>

        <div className="my-16 py-8">
            <p>How we can help?</p>
            <h3 className="text-3xl mb-12">Flexibility for your lifestyle</h3>
            <div className="flex md:flex-nowrap flex-wrap justify-center">
            {extensives.map((extend, index) => (
                <div key={index} className="text-left p-2">
                    <img src={extend.iconUrl} alt="icons" className="mb-6 w-20" />
                    <p className="text-lg font-bold mb-4">{extend.title}</p>
                    <p className="text-sm">{extend.describe}</p>
                    <Link to={extend.link}>See more</Link>
                </div>
            ))}
            </div>
        </div>
        <div className="my-16">
            <p>Our Team</p>
            <p className="text-4xl">Meet our awesome team</p>

            <div className="flex flex-wrap items-center justify-center">
            {teams.map((team, index)=> (
                <div key={index} className="flex flex-col md:items-start items-center p-8">
                    <img src={team.singlehead} alt="singleHead" className="rounded-full w-12 h-12 mb-4" />
                    <p className="font-semibold">{team.name}</p>
                    <p className="text-sm">{team.role}</p>
                </div>
            ))}
        </div>
        </div>

        <div className="complaints flex flex-wrap my-6 justify-between space-y-6">
            <div className="text-left flex flex-col space-y-4 justify-between">
                <div>
                    <p>Get In Touch</p>
                    <p className="text-3xl font-bold">Have any question?</p>
                    <p className="text-3xl font-bold">Contact us.</p>
                </div>

                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure officia nesciunt!</p>
            </div>
            <div className="md:text-right text-center justify-items-center">
                <p className="underline text-xl">Enter your details</p>
                <form className="py-4 space-y-1 md:items-end items-center">
                    <input type="text" name="name" id="name" placeholder='Enter your name here...' className="py-2 px-10 text-black bg-gray-200 focus:outline-none focus:bg-gray-100 placeholder:text-gray-600" /><br/>
                    <input type="email" name="email" id="email" placeholder='Enter your email address here...' className="py-2 px-10 bg-gray-200 focus:outline-none focus:bg-gray-100 placeholder:text-gray-600" /><br />
                    <input type="textarea" name="complain" id="complain" placeholder='Enter your complaint here...' className="py-2 px-10 bg-gray-200 focus:outline-none focus:bg-gray-100 placeholder:text-gray-600" /><br />
                    <button className="mt-8 font-extrabold pl-0 lg:pr-0 hover:border-none text-black underline text-xl bg-transparent">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default About
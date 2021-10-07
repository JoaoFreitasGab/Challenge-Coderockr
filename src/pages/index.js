import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { BG } from '../components/Card/CardElements'
import App from '../App'



const Home = () => {    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

  
    return (
        <>  
            <BG>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle}/>
            <App />
            </BG>
                         
       </>
    )
}

export default Home

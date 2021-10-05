import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Article from '../components/ManipulacaoApi'
import { BG } from '../components/Card/CardElements'



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
            <Article />
            </BG>
                         
       </>
    )
}

export default Home

import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar  from '../components/Navbar';
import Posts from '../components/Posts';


const PageSinglePost = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    const { id } = useParams();

    return (
      <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar  toggle={toggle}/>
       <Posts id={id ? Number.parseInt(id) : null} />
      </>
    );
  }
  
  export default PageSinglePost;
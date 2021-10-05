import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar  from '../components/Navbar';
import Posts from '../components/Posts';


const PageSinglePost = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  
    return (
      <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar  toggle={toggle}/>
       <Posts />
      </>
    );
  }
  
  export default PageSinglePost;
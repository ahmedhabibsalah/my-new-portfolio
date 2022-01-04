import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Bar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </div>
    )
}

export default Bar

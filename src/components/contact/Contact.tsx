import React, {Component} from 'react'
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

class Contact extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <h1>Contact Page</h1>
                <Footer />
            </div>
        )
    }
}

export default Contact;
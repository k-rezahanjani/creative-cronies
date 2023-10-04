import { useState } from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [language, setLanguage] = useState('');
    const languages = ['English', 'Farsi', 'French'];

    return ( 
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#050708', color: 'white'}}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt='logo'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link active" href="#">About</a>
                    <a className="nav-link" href="#">Portfolio</a>
                    <a className="nav-link" href="#">Offers</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" href="#">Contact</a>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='my-auto mx-1'>
                            <path d="M21 12L3 12M12 3C13.933 3 15.5 7.02944 15.5 12C15.5 16.9706 13.933 21 12 21C10.067 21 8.5 16.9706 8.5 12C8.5 7.02944 10.067 3 12 3Z" stroke="#F99D1C" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <select className='select-form' value={language} onChange={(e) => setLanguage(e.target.value)}>
                            {languages.map((language) => {
                                return (
                                    <option key={language} value={language}>{language}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
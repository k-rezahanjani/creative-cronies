import RightArrow from '../assets/right-arrow.png';

const Footer = ({ send, handleEmailChange, handleSubmit, email }) => {
    return ( 
        <footer>
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <div class="container py-md-6 footer-top mt-5 mb-5 w-75">
                    <div className='title text-center' style={{color: 'orange'}}>
                        <h3>
                            Start a project 
                            <button className='btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <circle cx="11.625" cy="11.625" r="11.625" transform="matrix(1.19249e-08 1 1 -1.19249e-08 3.875 3.875)" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.6667 15.5002L10.3333 15.5002M20.6667 15.5002L15.5 10.3335M20.6667 15.5002L15.5 20.6668" stroke="#F99D1C" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </h3>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center mt-5'>
                        <div className='contact text-white'>
                            <h5 className='fw-light fs-6'>hello@ccronies.com</h5>
                            <h5 className='fw-light fs-6'>+98 9912772037</h5>
                        </div>
                        <div class="contact border-bottom w-25">
                            <form className="mb-2" onSubmit={handleSubmit}>
                                <input id="custom-input" type="email" classname="form-control text-white" placeholder="Add your email" aria-describedby="button-addon2" value={email} onChange={handleEmailChange}/> 
                                <button className="btn btn-outline-secondary border-0 float-end p-0" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                    <path d="M8.66951 12H4.10036" stroke="#F99D1C" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.70264 20.1489L18.4223 13.789C19.8964 13.052 19.8964 10.9484 18.4223 10.2113L5.70263 3.85151C4.20605 3.10322 2.50698 4.41396 2.85091 6.05146L4.01402 11.5891C4.07096 11.8602 4.07096 12.1402 4.01402 12.4113L2.85091 17.9489C2.50698 19.5864 4.20605 20.8972 5.70264 20.1489Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </button>
                            </form>
                        </div>
                        <div className='contact text-white'>
                            <h5 className='fw-light fs-6'><i class="fa fa-copyright" aria-hidden="true"></i> Creative Cronies</h5>
                            <h5 className='fw-light fs-6'>Privacy & Terms</h5>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
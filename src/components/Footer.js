const Footer = ({ send, handleEmailChange, handleSubmit, email }) => {
    return ( 
        <footer>
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <div class="container py-md-6 footer-top mt-5 mb-5">
                    <div className='title text-center' style={{color: 'orange'}}>
                        <h3>Start a project</h3>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center mt-5'>
                        <div className='contact text-white'>
                            <h5 className='fw-light fs-6'>hello@ccronies.com</h5>
                            <h5 className='fw-light fs-6'>+98 9912772037</h5>
                        </div>
                        <div class="contact border-bottom">
                            <form onSubmit={handleSubmit}>
                                <input id="custom-input" type="email" classname="form-control text-white" placeholder="Add your email" aria-describedby="button-addon2" value={email} onChange={handleEmailChange}/> 
                                <button className="btn btn-outline-secondary border-0" type="submit"><img src={send}/></button>
                            </form>
                        </div>
                        <div className='contact text-white'>
                            <h5 className='fw-light fs-6'>Creative Cronies</h5>
                            <h5 className='fw-light fs-6'>Privacy & Terms</h5>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
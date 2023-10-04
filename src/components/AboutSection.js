const AboutSection = ({ aboutTitle, text, text2, about, scroll }) => {
    return ( 
        <div className='d-flex flex-row justify-content-center align-items-center' style={{padding: '10rem'}}>
            <div className="container">
                <div className="row">
                    <div className='col-6'>
                        <div className="text-start text-white" style={{width: '25rem'}}>
                            <p className="text-wrap" style={{color: 'orange'}}>{ aboutTitle }</p>
                            <p className='text-wrap'>{ text }</p>
                            <p className='text-start'>{ text2 }</p>
                            <p>More about us <img src={scroll} style={{ transform: 'rotate(271deg)' }} /></p>
                        </div>
                    </div>
                    <div className='col-3 ms-auto'>
                        <div className='float-end'>
                            <img src={about} alt='about' style={{width: '18rem', height: '18rem', borderRadius: '.52rem'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutSection;
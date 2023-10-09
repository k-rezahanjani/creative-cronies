const AboutSection = ({ aboutTitle, text, text2, about, scroll }) => {
    return ( 
        <div className='d-flex flex-row justify-content-center align-items-center' style={{paddingRight: '10rem', paddingLeft: '10rem'}}>
            <div className="container">
                <div className="row">
                    <div className='col-6 my-auto'>
                        <div className="text-start text-white" style={{width: '25rem'}}>
                            <p className="text-wrap" style={{color: 'orange'}}>{ aboutTitle }</p>
                            <p className='text-wrap'>{ text }</p>
                            <p className='text-start'>{ text2 }</p>
                            <p>More about us <img src={scroll} style={{ transform: 'rotate(271deg)' }} /></p>
                        </div>
                    </div>
                    <div className='col-4 ms-auto my-auto'>
                        <div className='float-end'>
                            <img className="img-fluid" src={about} alt='about'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutSection;
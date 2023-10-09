import image from '../assets/about-img.png'

const About = () => {
    const title = "Who are we?";
    const text = 'We are Creative Cronies, With years of experience in the design industry. Our journey began as close friends and creative comrades. Our shared love for modern, minimal, and imaginative design fueled our ambition to establish our design sanctuary.';
    return ( 
        <div className="about">
            <div className="d-flex flex-row justify-content-center align-items-center vh-100">
                <div className="container" style={{paddingLeft: '5rem', paddingRight: '5rem'}}>
                    <div className="part-one col-6">
                        <p style={{color: 'orange'}}>{ title }</p>
                        <h4 className="text-white">{ text }</h4>
                    </div>
                    <div className="part-two col-6 mt-5">
                        <p style={{color: 'orange'}}>{ title }</p>
                        <h4 className="text-white">{ text }</h4>
                    </div>
                    <div 
                    className="img-fluid" 
                    style={{
                        position: 'absolute',
                        right: '2.5rem',
                        bottom: '0'
                    }}>
                        <img src={image} alt='imageBack' className='img-fluid' style={{width: '30rem'}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;
import image1 from '../assets/Rectangle.jpg';
import image2 from '../assets/Rectangle2.png';
import image3 from '../assets/Rectangle3.png';

const MiniPortfolio = ({ google, microsoft, fedEx, airBnb, scroll }) => {
    return ( 
        <>
        <div className='d-flex flex-row justify-content-center align-items-center mt-5' style={{paddingRight: '10rem', paddingLeft: '10rem'}}>
            <div className="container">
                <div className="row">
                    <div className='col-6 my-auto'>
                        <div className="text-start text-white" style={{width: '25rem'}}>
                            <p className="text-wrap" style={{color: 'orange'}}>A bit about our Portfolio</p>
                            <p className='text-wrap'>
                            Welcome to our creative wonderland, where design dreams take flight and visual stories come to life. In our extensive portfolio, you will find a diverse collection of design projects that showcase our passion for crafting innovative, modern, and captivating visual experiences.
                            </p>
                            <p>More works <img src={scroll} style={{ transform: 'rotate(271deg)' }} /></p>
                        </div>
                    </div>
                    <div className='col-3 ms-auto'>
                        <div className='d-flex jusifty-content-end align-items-center float-end'>
                            <div className='d-flex flex-row'>
                                <div className='box me-2'>
                                    <img src={image1} alt="image" style={{width: '15rem'}}/>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='box my-1' style={{width: '15rem'}}>
                                    <img src={image2} alt="image2" style={{width: '15rem', borderRadius: '0.5rem'}}/>
                                </div>
                                <div className='box my-1' style={{width: '15rem'}}>
                                    <img src={image3} alt="image3" style={{width: '15rem', borderRadius: '0.5rem'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className='w-75 m-auto'>
                <div className='d-flex flex-column justify-content-center text-white'>
                    <p className='text-white text-center fs-2'><span style={{color: '#E3E4E68C'}}>Some of</span> the clients we have designed for</p>
                    <div className='row py-3 text-center'>
                        <div className='col-3'><img className="w-50" src={airBnb} alt="air-bnb"/></div>
                        <div className='col-3'><img className="w-50" src={google} alt="google"/></div>
                        <div className='col-3'><img className="w-50" src={microsoft} alt="microsoft"/></div>
                        <div className='col-3'><img className="w-50" src={fedEx} alt="fedex"/></div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MiniPortfolio;
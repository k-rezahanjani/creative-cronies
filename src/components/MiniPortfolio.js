const MiniPortfolio = ({ google, microsoft, fedEx, airBnb, scroll }) => {
    return ( 
        <>
        <div className='d-flex flex-row justify-content-center align-items-center' style={{padding: '10rem'}}>
            <div className="container">
                <div className="row">
                    <div className='col-6'>
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
                                <div className='me-2' style={{width: '10rem', height: '10rem', borderRadius: '1rem', backgroundColor: 'orange'}}></div>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='my-1' style={{width: '10rem', height: '10rem', borderRadius: '1rem', backgroundColor: 'orange'}}></div>
                                <div className='my-1' style={{width: '10rem', height: '10rem', borderRadius: '1rem', backgroundColor: 'orange'}}></div>
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
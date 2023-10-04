const Services = ({ branding, logoDesign, web, ads, packaging, motion, illustrator }) => {
    return ( 
        <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='container px-5'>
                <div className='d-flex flex-row mb-3'>
                    <div className='col-5'>
                        <div className='row gap-4'>
                            <div className='col-5 p-3' style={{backgroundColor: '#000', borderRadius: '1rem', height: '11rem', width: '13rem'}}><img src={branding}  alt='branding' style={{width: '9rem'}}/></div>
                            <div className='col-5 p-3' style={{backgroundColor: '#000', borderRadius: '1rem', height: '11rem', width: '13rem'}}><img src={logoDesign}  alt='branding' style={{width: '7rem'}}/></div>   
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='text-area w-75 ms-5'>
                            <h3 className='text-white'>Graphic Design Services</h3>
                            <p style={{color: '#C9C9C9'}}>
                            With a focus on modern aesthetics, minimalism, and cutting-edge design techniques, our services cover a wide spectrum of design realms. From crafting iconic logos and brand visual identities to developing engaging motion graphics and user-friendly websites, we take pride in delivering design solutions that leave a lasting impression.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <div className='col-12'>
                        <div className='row gap-4'>
                            <div className='col-2 p-3 my-auto' style={{backgroundColor: '#000', borderRadius: '1rem', height: '11rem'}}><img src={motion}  alt='branding' style={{width: '7rem'}}/></div>
                            <div className='col-2 p-3 my-auto' style={{backgroundColor: '#000', borderRadius: '1rem', height: '11rem'}}><img src={illustrator}  alt='branding' style={{width: '7rem'}}/></div>   
                            <div className='col-2 p-3 my-auto' style={{backgroundColor: '#000', borderRadius: '1rem', height: '11rem'}}><img src={ads}  alt='branding' style={{width: '9rem'}}/></div>   
                            <div className='col-2 p-3 my-auto' style={{backgroundColor: '#000', borderRadius: '1rem', height: '11rem'}}><img src={web}  alt='branding' style={{width: '7rem'}}/></div>   
                            <div className='col-2 p-3 my-auto' style={{backgroundColor: '#000', borderRadius: '1rem', height: '11rem'}}><img src={packaging}  alt='branding' style={{width: '5rem'}}/></div>   
                        </div>
                    </div>
                </div>
                <div className='want-to-work mt-5'>
                    <p style={{color: 'orange'}}>Want to start a project</p>
                    <h1 style={{fontSize: '5rem'}} className='text-white'>Let's Talk...</h1>
                </div>
            </div>
    </div>
     );
}
 
export default Services;
import pattern from '../assets/pattern.png';

const Banner = ({ scroll, title, text, text2 }) => {
    return ( 
        <div className='d-flex flex-row justify-content-center align-items-center' style={{height: '100vh'}}>
            <div className="container text-center text-white" style={{width: '50rem'}}>
                <p className="text-start" style={{color: 'orange'}}>{title}</p>
                <h1 className='text-start' style={{fontSize: '5.5rem', fontWeight: '700'}}>{text}</h1>
                <h1 className='text-start' style={{fontSize: '5.5rem', fontWeight: '700'}}>{text2}</h1>
            </div>
            <div className="pattern"><img src={pattern} style={{width: '12rem'}}/></div>
            <div className='scroll-down'>
                <p className='text-white'>Scroll down <img src={scroll} alt="icon"/></p>  
            </div>
        </div>
     );
}
 
export default Banner;
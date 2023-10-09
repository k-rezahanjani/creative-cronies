import scroll from '../assets/scroll.png'
import about from '../assets/Frame.png'
import airBnb from '../assets/Airbnb Logo.png'
import google from '../assets/Google.png'
import microsoft from '../assets/Microsoft.png'
import fedEx from '../assets/FedEx.png'
import AboutSection from './AboutSection';
import Banner from './Banner';
import MiniPortfolio from './MiniPortfolio'
import Package from './Package'
import packageList from '../components/data/db.json';
import branding from '../assets/services/branding.png';
import web from '../assets/services/web.png';
import ads from '../assets/services/ads.png';
import motion from '../assets/services/motion.png';
import packaging from '../assets/services/packaging.png';
import illustrator from '../assets/services/illustrator.png';
import logoDesign from '../assets/services/logo-design.png';
import Services from './Services'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {

    useEffect(() => {
        document.addEventListener('contextmenu', handleContextMenu)
        return () => {
            document.removeEventListener("contextmenu",handleContextMenu);
        }
    }, [])

    const handleContextMenu = (e) => {
        e.preventDefault();
        toast.error("Kheyli Lashi, DoZdi Nakon! GHOROMSAGH");
    }

    let aboutTitle = 'Welcome to Creative Cronies Studio';
    let text = 'Where boundless creativity and design expertise come together to craft innovative visual solutions.';
    let text2 = 'As a dynamic duo of graphic designers with a passion for artistic collaboration, we pride ourselves on delivering captivating designs that elevate brands and mesmerize audiences.';

    return ( 
        <div className="home">
            <Toaster />
            <div className='banner'>
                <Banner title="Hello People!" text="We're" text2="Creative Cronies" scroll={scroll}/>
            </div>
            <div className='about-us mt-3'>
                <AboutSection aboutTitle={aboutTitle} text={text} text2={text2} about={about} scroll={scroll}/>
            </div>
            <div className='portfolio'>
                <MiniPortfolio google={google} microsoft={microsoft} fedEx={fedEx} airBnb={airBnb} scroll={scroll}/>
            </div>
            <div className='package'>
                <Package packageList={packageList} title="That's it" subtitle="best Instagram promotion offer"/>
            </div>
            <div className='services' style={{backgroundColor: '#121415', padding: '5rem'}}>
                <Services illustrator={illustrator} motion={motion} web={web} ads={ads} branding={branding} logoDesign={logoDesign} packaging={packaging}/>
            </div>
        </div>
     );
}
 
export default Home;
import PackageCards from "../components/PackageCards";

const Package = ({ packageList, title, subtitle }) => {
    return ( 
        <div className='d-flex flex-column justify-content-center align-items-center' style={{padding: '10rem'}}>
            <div className="container text-white" style={{width: '50rem'}}>
                <p className="text-start" style={{color: 'orange'}}>{title}</p>
                <h1 className='text-start mb-5' style={{fontSize: '3.5rem'}}>{subtitle}</h1>
                <PackageCards packageList={packageList}/>
            </div>
        </div>
     );
}
 
export default Package;
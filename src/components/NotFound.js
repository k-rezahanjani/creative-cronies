import Not_Found from '../assets/404.png';

const NotFound = () => {
    return ( 
        <div className="d-flex w-50 m-auto my-5 align-items-center justify-content-center">
            <img src={Not_Found} alt="404" />
        </div>
     );
}
 
export default NotFound;
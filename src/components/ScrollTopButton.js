import { useEffect, useState } from "react";

const ScrollButtonTop = () => {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 500) {
          setScrollTop(true)
        } else {
          setScrollTop(false);
        }
      })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return ( 
        <div className="scroll">
            {scrollTop && (
            <button
                style={{
                    position:'fixed',
                    bottom: '5rem',
                    right: '1rem',
                    height: '50px',
                    width: '10rem',
                }}
                className="btn text-white"
                  onClick={scrollToTop}>
                    Swipe Up
                  <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" style={{transform: 'rotate(271deg)'}}>
                      <circle cx="11.625" cy="11.625" r="11.625" transform="matrix(1.19249e-08 1 1 -1.19249e-08 3.875 3.875)" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.6667 15.5002L10.3333 15.5002M20.6667 15.5002L15.5 10.3335M20.6667 15.5002L15.5 20.6668" stroke="#F99D1C" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
            )}
        </div>
     );
}
 
export default ScrollButtonTop;
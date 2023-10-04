const PackageCards = ({ packageList }) => {
    return ( 
        <div className='d-flex flex-row'>
            {packageList.map((card, index) => (
                <div key={index} className="card me-2 p-3" 
                style={{ width: '25rem', backgroundColor: index % 2 === 0 ? '#DBD8D3' : '#5B2E91', color: index % 2 === 0 ? 'black' : 'white'}}>
                    <div className="card-body p-0">
                        <h5 className="card-title">{card.model}</h5>
                        <h6 className="card-subtitle mb-2 mt-2" style={{fontSize: '.85rem'}}>{card.description}</h6>
                        <p className="card-text fs-2">
                        {card.price}
                        <span style={{ color: index % 2 === 0 ? '#4B5768' : '#F7F8F9', fontSize: '1rem' }}>/ month</span>
                        </p>
                        <button className='btn btn-outline-warning w-100 mb-3' style={{ border: '1.5px solid #F99D1C', color: '#F99D1C' }}>
                            Get Started Now
                        </button>
                        <div className='mt-1'>
                            {card.options.map((option, index) => (
                                <p key={index} className='card-text'>{option}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default PackageCards;
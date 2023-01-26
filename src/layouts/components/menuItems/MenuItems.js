import './MenuItems.css';
import { Link } from 'react-router-dom';
import destinationsData from '../../../data/destinations';

export default function MenuItems() {
     
    return (
        <div className='menu-items'>
            <div className="destinations">
                <h3 className='destinations-label'>Destinatii</h3>
                <ul className="destinations-list">
                    {destinationsData.map((destination, index) => {
                        return (
                            <li key={index} className="destination">
                                <Link className='link' to={`/destinations/${destination.id}`}>
                                    <div className='link-name'>
                                        {destination.name}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
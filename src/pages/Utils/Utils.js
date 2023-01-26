import utilities from '../../data/utilities';
import UtilsCard from '../components/UtilsCard/UtilsCard';
import './Utils.css';

export default function Utils() {
    return <div className='utils-wrapper'>
        <h1 className='utils-title'>Utile</h1>
        <div className="utils-content">
            {utilities.map((post, index) => {
                return <UtilsCard key={index} post={post}/>;
            })}
        </div>
    </div>;
}
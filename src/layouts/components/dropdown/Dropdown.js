import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from '../menuItems/MenuItems';
import './Dropdown.css';

export default function Dropdown() {
    

    return (
        <div className='dropdown-container'>
            <div className='dropdown-wrapper'>
                <FontAwesomeIcon className='dropdown-icon' icon={faBars} color={"#FAD8D6"} />
            </div>
            <div className='dropdown-content'>
                <MenuItems />
            </div>
        </div>
    );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGear, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/SearchBar.css'
function SearchBar() {
    return (
        <div className="search-bar-container">
            <div className="search-bar-with-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" className='search-bar' placeholder='Search...' />
            </div>
            <div className="common-access">
                <div className="common-tools">
                    <FontAwesomeIcon icon={faGear} />
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="user-pic">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
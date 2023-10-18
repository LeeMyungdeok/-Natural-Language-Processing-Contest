import styles from "../styles/SearchBar.module.css"
import searchicon from "../assets/searchicon.svg"

function SearchBar () {
    return(
        <div className={styles.SearchBarContainer}>
            <img 
            src={searchicon}
            alt="searchicon"
            />
        
            <input type="text" placeholder="원하는 과목을 검색하세요!"/>
        </div>
    )
}

export default SearchBar
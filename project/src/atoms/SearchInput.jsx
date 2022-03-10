import {useState} from 'react'
import IconButton from './IconButton'

const SearchInput = ({onSearch, ...props}) => {
    const [value, setValue] = useState("")
    return <div class="search-input">
        <input onChange={(e)=>setValue(e.target.value)}/>
        <IconButton onClick={(e)=>onSearch(value, e)} icon="fa-search"/>
    </div>
}

export default SearchInput
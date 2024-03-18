import { useRef } from "react"
import './style/FormSerch.css'

const FormSerch = ({setlocationSelect}) => {
    
const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setlocationSelect(inputSearch.current.value.trim())
    
    }

    return (
    <form className="form" onSubmit={handleSubmit}>
        <input className="form_input" ref={inputSearch} type="text"/>
        <button className="form_btn" >Search</button>
    </form>
  )
}

export default FormSerch
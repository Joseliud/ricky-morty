import { useEffect } from "react"
import useFetch from "../Hooks/useFetch"
import './style/ResidentCard.css'

const ResidentsCard = ({url}) => {

   const [ character, getcharacter] = useFetch(url)

   useEffect(() => { 
    getcharacter()
   }, [])
   
   


  return (
    <article className="resident">
        <header className="resident_header">
            <img className="resident_image" src={character?.image} alt=""/>
            <div className="status">
                <div className={`status_circle ${character?.status}`}></div>
                <div className="resident_value">{character?.status}</div>
            </div>
        </header>
        <section className="resident_body">
            <h3 className="resident_name">{character?.name}</h3>
            <hr className="resident_hr"/>
            <ul className="resident_list">
                <li className="resident_item"><span className="resident_label">Specie</span><span className="resident_value">{character?.specie}</span></li>
                <li className="resident_item"><span className="resident_label">Origin</span><span className="resident_value">{character?.origin.name}</span></li>
                <li className="resident_item"><span className="resident_label">Episodes where appear</span><span className="resident_value">{character?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentsCard
import {useParams} from 'react-router-dom'
import { data } from "../data/module-data.js";


function PersonPage() {
    const {id} = useParams();
    return ( 
        <>
       <h1>Szukana osoba</h1> 
       <p>{data.at(id) ? data.id(id) : <span>Brak takiego imienia</span>}</p>
        </>
     );
}

export default PersonPage;
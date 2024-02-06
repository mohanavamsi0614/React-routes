import { useParams } from "react-router-dom";

function User() {
    const {userid}=useParams()
    return(
        <h1>Hey {userid}</h1>
    )
    
}
export default  User
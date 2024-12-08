
import Stafflist from './Stafflist'
const Staffcard = ( {id, firstName, lastName, position, DOB, profilePicture}) => {
  
   
  return (
    <div style={{border:"1px solid black",width:"300px", height:"300px", margin:"10px",padding:"10px", borderRadius:"10px"}}>
      <img style={{width:"100%", height:"150px"}} src={profilePicture} alt="" />
      <h2 style={{textAlign:"center",fontSize:"24px"}}>{firstName} {lastName}</h2>
      <p style={{textAlign:"center"}}>{position}</p>
      <p style={{textAlign:"center"}}>{DOB}</p>

      
    </div>



  )
}

export default Staffcard
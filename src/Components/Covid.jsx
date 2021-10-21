import React,{useState} from 'react'

const axios = require('axios');

const Covid = () => {
    const handleCovidSubmit = (event) => {
        event.preventDefault();
        axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict', {
            params: {
              district_id:Id,
              date:Date
            }
          })
          .then((response) => {
              console.log(response)
                setSession(response.data.sessions)
            })
          .catch((error) => console.log(error))
          .then(() => console.log("it worked"));
    }
    
    const [Id,setId] = useState(0)
    const [Date,setDate] = useState(0)
    const [Session,setSession] = useState([])
     
    
    return (
        <div className="App">
            <h1>Covid-Info</h1>
            <form onSubmit={handleCovidSubmit}>
                <label>Enter district id:
                    <input value={Id} type="text" onChange={(e) => setId(e.target.value)}/>
                </label>
                <label>Enter date:
                    <input type="text" value={Date} onChange={(e) => setDate(e.target.value)}/>
                </label>
                <input type="submit" />
            </form>

            {Session.map((item)=>(
            <div className="session">
            <div>
                <p>Center name:{item.name},Address:{item.Address},block name:{item.block_name},district name:{item.district_name},pincode:{item.pincode}</p>
            </div>
            <div>
                <p>Allowed age:{item.min_age_limit} and above, Vaccine:{item.vaccine}</p>
            </div>
            </div>
        
            ))}
    </div>
    )
}

export default Covid


import { doc, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { Spinner } from "./Spinner"


const Form = () => {
  
  const [formData, setFormData] = useState({
        description: '',
        focus: '',
        format: '',
        link: '',
        name: '',
        position: ''
  })
  const [showSpinner, setShowSpinner] = useState(false)


  

  function handleChange (event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  async function handleSubmit (event) {
    event.preventDefault()
    
    setShowSpinner(true)

    try{
      await setDoc(doc(db,'links',formData.name),formData)
      setFormData({
        description: '',
        focus: '',
        format: '',
        link: '',
        name: '',
        position: ''
      })
    } catch (error) {
      console.error('Error updating document', error)
    } finally {
      setTimeout(()=>{
        setShowSpinner(false)
      },1000)
    }
    
  }
  
  return (
    <div >
      
      {showSpinner ? 
      (<div className="flex flex-col justify-center items-center"><Spinner /> </div>) 
      : (
        <div className="form">
        <div className="wrapper">
          <form onSubmit={handleSubmit} >
            <h1>Submit New Resource</h1>
            <div className="input-box">
              <select 
                id="position"
                value={formData.position}
                onChange={handleChange}
                name="position"
                required
              >
              <option value=''>--Choose--</option>
              <option value='General'>General</option>
              <option value='Defense'>Defense</option>
              <option value='Offence'>Offence</option>
              <option value='Quaterbacks'>Quaterbacks</option>
              <option value='Runningbacks'>Runningbacks</option>
              <option value='Wide Receivers'>Wide Receivers</option>
              <option value='Tight Ends'>Tight Ends</option>
              <option value='Offensive Line'>Offensive Line</option>
              <option value='Defensive Line'>Defensive Line</option>
              <option value='Linebackers'>Linebackers</option>
              <option value='Defensive Backs'>Defensive Backs</option>
              <option value='Special Teams'>Special Teams</option>
              <option value='Strength and Conditioning'>Strength and Conditioning</option>
              </select>
            </div>

            <div className="input-box">
              <input 
                type="text" 
                placeholder="name of site" 
                onChange={handleChange}
                name="name"
                required />
            </div>
              
            <div className="input-box">
              <select 
                id="format"
                value={formData.format}
                onChange={handleChange}
                name="format"
                required
                >
                <option value=''>--Choose--</option>
                <option value='Website'>Website</option>
                <option value='Twitter'>Twitter</option>
                <option value='YouTube'>YouTube</option>
                <option value='Instagram'>Instagram</option>
              </select>
            </div>

            <div className="input-box">
              <input 
              type="text" 
              placeholder="Url" 
              onChange={handleChange}
              name="link"
              required />
            </div>

            <div className="input-box">
              <select 
                id="focus"
                value={formData.focus}
                onChange={handleChange}
                name="focus"
                required
                >
                <option value=''>--Choose--</option>
                <option value='Coaches'>Coaches</option>
                <option value='Players'>Players</option>
                <option value='Players/Coaches'>Players/Coaches</option>
              </select>
            </div>

            <div className="input-box">
              <input 
              type="text" 
              placeholder="Description" 
              onChange={handleChange}
              name="description"
              required />
            </div>
              
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
      )}
      
    </div>
    
    

  )
}

export default Form
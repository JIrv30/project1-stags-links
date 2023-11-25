import { getDocs} from 'firebase/firestore'
import { linksCollection } from '../../firebase'
import { useState, useEffect } from 'react';
import Filter from './Filter';
import InstaLogo from '../assets/Instagram-Logo.png'
import twitterLogo from '../assets/twitterLogo.jpg'
import websiteLogo from '../assets/websiteLogo.avif'
import youtubeLogo from '../assets/Youtube_logo.png'


const Scroll = () => {
  const [links, setLinks] = useState([])
  const [value, setValue] = useState([])
  

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getDocs(linksCollection)
      const linksArr = []
      data.forEach((doc)=>{
        linksArr.push(doc.data())
      })
      setLinks(linksArr)
    }
    fetchData()
  },[])

  const handleValueChange = (newValue) => {
    setValue(newValue)
    
  }

  // console.log(value)

  

  const linksElements = links.filter((item)=>{
    return !value.includes(item.position)
  }).map(item=>{
    
    let img
    if(item.format==='Twitter') {img=twitterLogo}
    else if (item.format==='Website') {img=websiteLogo}
    else if (item.format==='YouTube') {img=youtubeLogo}
    else {img = InstaLogo}

    
    
    return(
      <div key={item.name} className='links-element'>
        <a href={item.link}>
          <div className='h-14'>
            <h3 className=' pb-2 links-title'><b>{item.name}</b></h3>
            <p className=' text-xs'>Position: {item.position}</p>
          </div>
          <img
            className='links-img' 
            src={img}
             />
          
          <div className='info pt-3'>
          
          <p className=' text-xs'><i>Useful for {item.focus}</i></p>
          <br />
          <p><small>{item.description}</small></p>

          </div>      
        
        </a>
      </div>
    )
  })
  
  return (
    <div>
      <div className='flex pl-4 pb-4'>
        <Filter
        onChange={handleValueChange}
        />
      </div>
      <div className='media-scroller snaps-inline'>
        {linksElements}
      </div>

    </div>
  )
}

export default Scroll
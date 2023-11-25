import Carousel from 'react-bootstrap/Carousel';
import { 
  doc,
  getDoc,
  getDocs
} from 'firebase/firestore'
import { linksCollection, db } from '../../firebase'
import { useState, useEffect } from 'react';
import InstaLogo from '../assets/Instagram-Logo.png'
import twitterLogo from '../assets/twitterLogo.jpg'
import websiteLogo from '../assets/websiteLogo.avif'
import youtubeLogo from '../assets/Youtube_logo.png'


function Slider() {
  const [links, setLinks] = useState([])
  

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



  const linksElements = links.map(item =>{

    let img
    if(item.format==='Twitter') {img=twitterLogo}
    else if (item.format==='Website') {img=websiteLogo}
    else if (item.format==='YouTube') {img=youtubeLogo}
    else {img=InstaLogo}


    return (
      <Carousel.Item key={item.name}>
        <Carousel.Caption>
        <h3>{item.name}</h3>
         <p>Focus: {item.focus}</p>
        </Carousel.Caption>
       <a href={item.link}>
         <img 
           className='d-block x-100'
           src={img}
           
         />
       </a>
       <Carousel.Caption>
         <h3>Position: {item.position}</h3>
         <p>{item.description}</p>
       </Carousel.Caption>
     </Carousel.Item>
    )
  })
  

  
  return (
    <div >
      <Carousel 
        pause={'hover'}
        
        data-bs-theme="dark"
        >
      {linksElements}
    </Carousel>
    </div>
  );
}

export default Slider;

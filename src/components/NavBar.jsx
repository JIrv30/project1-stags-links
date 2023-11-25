import StagsLogo from '../assets/StagsLogo.png'

const NavBar = () => {
  return (
    <>
      <div className='flex flex-1 items-center text-4xl text-red-900'>
        <img src={StagsLogo} width={120} />
        <h1 className='text-center flex-grow'>Football Resources</h1>
      </div>
    
    </>
    

  )
}

export default NavBar
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const Filter = ({onChange}) => {
  const [value, setValue] = useState([]);
  
  const handleClick = (val) => {
      handleChange(val);
      onChange(val);
  }
  
  const handleChange = (val) => setValue(val);

  const selectAll = () => {
    const allValues = ['General', 'Special Teams', 'Strength and Conditioning', 'Offence','Quaterbacks','Runningbacks','Wide Receivers','Tight Ends','Offensive Line','Defense','Defensive Line','Linebackers','Defensive Backs']

    setValue(allValues)
    onChange(allValues)

  }

  const deselectAll = () => {
    setValue([])
    onChange([])
  }
  
  
  return (
    <div className='flex flex-col flex-1 gap-2 hidden md:flex '>
      <div className='flex flex-1 gap-2  justify-around text-white '>
        <button className='bg-stags-red rounded flex flex-1 justify-center items-center' onClick={selectAll}>Clear All</button>
        <button className='bg-stags-red rounded flex flex-1 justify-center items-center' onClick={deselectAll}>Select All</button>
      </div>
      
      <div className='flex flex-1'>
        <ToggleButtonGroup className='flex gap-2 flex-1' type='checkbox' value={value} onChange={handleClick}>
          <ToggleButton className='rounded' variant='danger' id="tbg-btn-1" value={'General'}>
            General
          </ToggleButton>
          <ToggleButton className='rounded' variant='danger' id="tbg-btn-12" value={'Special Teams'}>
          Special Teams
          </ToggleButton>
          <ToggleButton className='rounded' variant='danger' id="tbg-btn-13" value={'Strength and Conditioning'}>
          Strength and Conditioning
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div>
        <ToggleButtonGroup className='flex gap-2' type='checkbox' value={value} onChange={handleClick}>
          <ToggleButton className='rounded'  variant='danger' id="tbg-btn-3" value={'Offence'}>
            Offence
          </ToggleButton>
          <ToggleButton className='rounded'  variant='danger' id="tbg-btn-4" value={'Quaterbacks'}>
          Quaterbacks
          </ToggleButton>
          <ToggleButton className='rounded'  variant='danger' id="tbg-btn-5" value={'Runningbacks'}>
          Runningbacks
          </ToggleButton>
          <ToggleButton className='rounded'  variant='danger' id="tbg-btn-6" value={'Wide Receivers'}>
          Wide Receivers
          </ToggleButton>
          <ToggleButton className='rounded'  variant='danger' id="tbg-btn-7" value={'Tight Ends'}>
          Tight Ends
          </ToggleButton>
          <ToggleButton className='rounded'  variant='danger' id="tbg-btn-8" value={'Offensive Line'}>
          Offensive Line
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div>
      <ToggleButtonGroup className='flex gap-2' type="checkbox" value={value} onChange={handleClick}>        
        <ToggleButton className='rounded'  variant='danger' id="tbg-btn-2" value={'Defense'}>
          Defense
        </ToggleButton>       
        <ToggleButton className='rounded'  variant='danger' id="tbg-btn-9" value={'Defensive Line'}>
        Defensive Line
        </ToggleButton>
        <ToggleButton className='rounded'  variant='danger' id="tbg-btn-10" value={'Linebackers'}>
        Linebackers
        </ToggleButton>
        <ToggleButton className='rounded'  variant='danger' id="tbg-btn-11" value={'Defensive Backs'}>
        Defensive Backs
        </ToggleButton>
      </ToggleButtonGroup>
    
      </div>
    </div>
    
  )
}

export default Filter
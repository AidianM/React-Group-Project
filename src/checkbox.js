function Checkbox(props) { 
  
    const [checked, setChecked] = useState(false); 
    const checkedText = props.onText; 
    const uncheckedText = props.offText; 
    const togglePreference = props.togglePreference; 
    const animal = props.animal; 
    
    const handleCheckChange = () => { 
      
      setChecked(!checked); togglePreference(animal); 
      
    }; 
    
    return ( 
      
      <div>
      
        
        
        <p>
          {checked ? checkedText : uncheckedText}
        </p> 
        
      </div>
        
    ); 
  
  }; 
  
  
  export {Checkbox};
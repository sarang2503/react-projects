import { useState ,useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const[length,setLength]=useState(8)
  const[password,setPassword]=useState('')
  const[charAllowed,setCharAllowed]=useState(false)
  const[NumAllowed,setNumAllowed]=useState(false)
  const passwordRef= useRef(null)



  const generatePassword = useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(NumAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*_()+=-"

    for(let i=0;i<length;i++){
        
      
        const a=(str.charAt(Math.random()*(str.length+1)))
        pass+=a
        console.log(pass)
    }
    setPassword(pass)
    


  } , [length,NumAllowed,charAllowed])

  useEffect(()=>{
    generatePassword()
  },[length,charAllowed,NumAllowed])

  
  const CopyPassword=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  
  return (
    <>
  <div className='w-full bg-gray-800 text-orange-500 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8'>
    <h1 className='text-white text-center my-3'>password generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
          />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={CopyPassword}>copy</button>
    
    </div>
    <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
              <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> setLength(e.target.value)} name="" id="" />
              <label htmlFor='length'>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input type="checkbox" onChange={()=>{setCharAllowed((prev)=>!prev)}} defaultChecked={charAllowed} />
              <label htmlFor='charInput'>characters</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input type="checkbox" onChange={()=>{setNumAllowed((prev)=>!prev)}} defaultChecked={NumAllowed} />
              <label htmlFor='numInput'>numbers</label>
          </div>
         
    </div>
    
  </div>
     
     
     
      
      
    </>
  )
}

export default App

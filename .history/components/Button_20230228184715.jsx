import React, {useEffect} from 'react'

const Button = ({bg}) => {

  // const style = 
  useEffect(() => {
      console.log(props)
  
    return () => {
      ""
    }
  })
  
  return (
    <button className={`bg-[${bg}] w-150 text-white py-2 px-6 rounded-2xl md:ml-8 hover:bg-[#D5D0ED] hover:text-[#492823] duration-500`}>
        {props.children}
    </button>
  )
}
// bg-[] w-150 text-white py-2 px-6 rounded-2xl md:ml-8 hover:bg-[#D5D0ED] hover:text-[#492823] duration-500

export default Button
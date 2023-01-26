import react, { useState } from 'react'


export const useForm = (initialForm ={}) => {


    const [formState, setformstate] = useState({initialForm});

       const onInputchange = ({target}) => {

          const {name,value} = target;
          setformstate({
            ...formState,
            [ name ]:value

          });
     }

     const onClear = ()=>{

       setformstate(initialForm);


       
     }


    return {
            ...formState,
           formState,
           onInputchange,
           onClear
               
    }
     
  }


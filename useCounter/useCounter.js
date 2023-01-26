import { useState } from "react"


export const useCounter = (initialvalue=10) =>{

  const [counter, setcounter] = useState(initialvalue)

  const incremento =(value = 1) => {
          setcounter(counter + value)
  }

  const decremento = (value = 1) => {
        if(counter == 0) return ;  
        setcounter(counter- value )

  }

  const reset = () => {

        setcounter(initialvalue)



  }



        return{

             counter,
             incremento,
             decremento,
             reset







    } 



}
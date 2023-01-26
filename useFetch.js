

import React, { useEffect } from 'react'

export const useFetch = (url) => {


    const GetFetch = async()  => {

        const resp = await fetch(url);
        const data = await resp.json();

        console,log(data);



    }



    useEffect(() => {

        GetFetch();


    
    
    }, [url])
    


  return {




  }
  
  
}

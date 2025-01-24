import React from "react"
function PostLoadings  (Component)  {
  return  function PostLoadingComponent(
      {isLoading,...props}){
        if(!isLoading) return <Component {...props}/>;
        return(
          <p style={{fontSize:'25px'}}>We are waiting the for the data to load!......</p>
        )
      }
          
}

export default PostLoadings

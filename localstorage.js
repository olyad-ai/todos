
//load the state
export const loadState =  () => {
    try{
        const serializedData = localStorage.getItem("state");
        if(serializedData === null)
            return undefined
        
         return JSON.parse(serializedData)
    }
    catch(err){
      console.log(err)
    }
} //save the state

export const savelocalState = (state) => {
    try{
        const serialData = JSON.stringify(state);
         localStorage.setItem("state", serialData)
    }
    catch(err){
        console.log(err)
    }
}

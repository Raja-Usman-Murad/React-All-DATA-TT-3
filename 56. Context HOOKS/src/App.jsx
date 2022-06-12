import React, { createContext } from 'react';
import CompA from './CompA';
const FirstName = createContext();
const LastName = createContext();
const App=()=>{
    return(
        <>
<FirstName.Provider value="RAJA">
    <LastName.Provider value="USMAN">
<CompA />
    </LastName.Provider>
</FirstName.Provider>
 </>
    )       
}
export default App; 
export {FirstName , LastName};

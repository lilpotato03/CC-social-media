import { createContext,useState } from "react";
import Modal from "../assets/components/Modal";

export const Context=createContext()

function AppContext({children}){

    const [modalState,setModalState]=useState(false)
    const [modalContent,setModalContent]=useState(<></>)
    const [loggedIn,setLoggedIn]=useState(true)
    const [currentUser,setCurrentUser]=useState('anuff_')
    const [currentView,setCurrentView]=useState('home')
    const [profileData,setProfileData]=useState(['user',currentUser])

    return(
        <Context.Provider value={{modalState,setModalState,modalContent,setModalContent,loggedIn,setLoggedIn,currentUser,setCurrentUser,currentView,setCurrentView,profileData,setProfileData}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
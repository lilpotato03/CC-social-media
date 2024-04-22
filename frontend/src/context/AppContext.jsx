import { createContext,useState } from "react";
import Modal from "../assets/components/Modal";

export const Context=createContext()

function AppContext({children}){

    const [modalState,setModalState]=useState(false)
    const [modalContent,setModalContent]=useState(<></>)
    const [loggedIn,setLoggedIn]=useState(true)
    const [currentUser,setCurrentUser]=useState('aaronfur_')
    const [currentView,setCurrentView]=useState('home')

    return(
        <Context.Provider value={{modalState,setModalState,modalContent,setModalContent,loggedIn,setLoggedIn,currentUser,setCurrentUser,currentView,setCurrentView}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
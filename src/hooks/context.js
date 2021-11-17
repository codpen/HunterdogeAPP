import React, { useState, createContext } from 'react'

const Context = createContext({
    openModal: true,
    setOpenModal: () => { },
})

const ContextProvider = ({ children }) => {

    /*eslint-disable */

    const setOpenModal = () => {
        setValue(prevState => {
            return {
                ...prevState,
                openModal: !prevState.openModal
            }
        })
    }


    const modeState = {
        openModal: false,
        setOpenModal,
    }

    const [openModal, setValue] = useState(modeState)

    /*eslint-enable */

    return (
        <Context.Provider value={openModal}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
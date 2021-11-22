import React, { useState, createContext } from 'react'

const Context = createContext({
    openModal: false,
    setOpenModal: () => { },
    openSearch: false,
    setOpenSearch: () => { },
    searchOption: [],
    setSearchOption: () => {},
    removeSearchOption: () => {}
})

const ContextProvider = ({ children }) => {

    /*eslint-disable */

    const setOpenModal = () => {
        setOpenModalValue(prevState => {
            return {
                ...prevState,
                openModal: !prevState.openModal
            }
        })
    }

    const setOpenSearch = (value) => {
        setOpenSearchValue(value)
    }

    const setSearchOption = (option) => {
        setSearchOptionValue(prevState => {
            return [
                ...prevState,
                option
            ]
        })
    }

    const removeSearchOption = (id) => {
        const options = searchOption.filter((item)=>id != item.id)
        setSearchOptionValue(options)
    }


    const [openModal, setOpenModalValue] = useState(false)
    const [openSearch, setOpenSearchValue] = useState(false)
    const [searchOption, setSearchOptionValue] = useState([])

    let contextState = {
        openModal,
        setOpenModal,
        openSearch,
        setOpenSearch,
        searchOption,
        setSearchOption,
        removeSearchOption,
    }

    /*eslint-enable */

    return (
        <Context.Provider value={contextState}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
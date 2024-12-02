import React, { createContext, useContext, useState} from "react";

const CompaniesContext = createContext()

const CompaniesProvider = ({children}) => {
    const [companies, setCompanies] = useState([])

    const actions = {
        loadCompanies: (companies) => {
            setCompanies(companies)
        },
    }

    return (
        <CompaniesContext.Provider value={{companies, actions}}>{children}</CompaniesContext.Provider>
    )
}

const useCompanies = () => {
    return useContext(CompaniesContext)
}

export { CompaniesProvider, useCompanies}
import React, { createContext, useContext, useState} from "react";
import { useAuth } from "./authProvider";

const JobsContext = createContext()

const JobsProvider = ({children}) => {
    const [jobPosts, setJobPosts] = useState({allJobs:[], favoritedJobs: []})
    const {isLoggedIn, setIsLoggedIn} = useAuth()

    const currentUserFavoriteJobsIds = isLoggedIn.user ? isLoggedIn.user.favoritedJobs.map(job => job._id) : []
    // const currentUser = isLoggedIn.user ? isLoggedIn.user : null

    const actions = {
        updateFavoritedJobs: (jobs) => {
            setJobPosts({...jobPosts, favoritedJobs: jobs})
            console.log("ADD FAVORITE - current state: ", jobPosts);
        },
        removeFavorite: (job) => {
            const filtered = jobPosts.favoritedJobs.filter(post => post._id !== job._id)
            console.log("FILTERED: ", filtered);
            
            setJobPosts({...jobPosts, favoritedJobs: filtered})
            console.log("AFTER FILTERED: ", jobPosts);

        },
        loadFavoritedJobs: () => {
            const currentUser = isLoggedIn.user
            if(!currentUser) setJobPosts({...jobPosts, favoritedJobs: []})
            setJobPosts({...jobPosts, favoritedJobs: currentUser.favoritedJobs})
        },
        loadJobs: (jobs) => {
            const currentUser = isLoggedIn?.user
            setJobPosts({...jobPosts, allJobs: jobs})

            
            // if(currentUser) {
            //     setJobPosts({...jobPosts, favoritedJobs: currentUser.favoritedJobs})
            // }

                
        },
        resetFavoriteJobs: () => {
            setJobPosts({...jobPosts, favoritedJobs: []})
        }
    }

    return (
        <JobsContext.Provider value={{jobPosts, jobActions: actions}}>{children}</JobsContext.Provider>
    )
}

const useJobs = () => {
    return useContext(JobsContext)
}

export { JobsProvider, useJobs}
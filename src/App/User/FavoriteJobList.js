import React, { useContext, useEffect } from 'react';
import JobCard from '../JobPosts/JobCard'
import { getAllJobPosts, updateUserFavoriteJobs } from '../JobPosts/api';
import { useAuth } from '../../Utilities/authProvider';
import { useNavigate } from 'react-router-dom';

const FavoriteJobList = () => {

    const jobPosts = []

    // const { jobPosts, jobActions } = useJobs();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate()

    const handleRemoveFavorite = (jobPost) => {
        // const currentUser = isLoggedIn.user
        // console.log("FAVORITED JOBS BEFORE REMOVAL: ", jobPosts.favoritedJobs);

        // jobActions.removeFavorite(jobPost)
        // console.log("FAVORITED JOBS AFTER REMOVAL: ", jobPosts.favoritedJobs);
        
        // updateUserFavoriteJobs(currentUser._id, {favoritedJobs: jobPosts.favoritedJobs})
        
      }


      useEffect(() => {
        const loggedIn = isLoggedIn.loggedIn
        if(!loggedIn) {
            navigate('/home')
        }
      }, [])
    

    useEffect(() => {
        const getAlljobs = async () => {
            try {
                const allJobs = await getAllJobPosts()
                // jobActions.loadJobs(allJobs)
            } catch (error) {
                console.log(error)
            }
        }
        getAlljobs()

    }, [])
    
    return (
        <div>
            <h1>Favorited Jobs</h1>
    
            {
                jobPosts?.favoritedJobs?.map(post => <JobCard favorited isSignedIn={isLoggedIn.loggedIn} jobPost={post} jobName={post.title} jobDescription={post.description} handleRemoveFavoriteClick={handleRemoveFavorite}/>)
            }
        </div>
    )
}

export default FavoriteJobList
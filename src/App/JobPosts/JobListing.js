import JobCard from './JobCard'
import { Button, Container } from '@mui/material';

// import {jobPosts} from '../../Utilities/siteData'
import { useEffect, useState } from 'react';
import { getAllJobPosts, updateUserFavoriteJobs } from './api';
import { useAuth } from '../../Utilities/authProvider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadJobPosts } from './jobPostSlice';

function JobListing() {
  const {isLoggedIn, setIsLoggedIn} = useAuth()
  //select all job posts from the store
  const jobPosts = useSelector(state => state.jobPostsSlice.jobPosts)
  //select all companies from the store
  const companies = useSelector(state => state.companiesSlice.companies)
  const dispatch = useDispatch()

  const handleAddFavorite = async(jobPost) => {
  //   const currentUser = isLoggedIn.user
  //   const favoritedJobs = {favoritedJobs: [...currentUser.favoritedJobs, jobPost]}
  //   console.log("CONCAT FAVORITE JOBS", favoritedJobs);
    
  //   updateUserFavoriteJobs(currentUser._id, favoritedJobs)
  //     .then((data) => {
  //       console.log("DATA IN LIST", data);
        
  //       jobActions.updateFavoritedJobs(data.favoritedJobs)
  //     }
  // )
  }

  const handleRemoveFavorite = async(jobPost) => {
    // const currentUser = isLoggedIn.user
    // const favoritedJobs = {favoritedJobs: currentUser.favoritedJobs.filter(post => post._id !== jobPost._id)}
    // updateUserFavoriteJobs(currentUser._id, favoritedJobs).then((data) => jobActions.updateFavoritedJobs(data.favoritedJobs)
    // )
  }

  //when user logs in, the user favoritedJobs are loaded and all jobs are loaded
  // when user updated their favoritedJobs, the jobs are updated on the server but the provider returns the old favoritedJobs from the current user BEFORE the server saves

  useEffect(() => {
    //get all job posts from the server
    const getJobs = async () => {
      try {
        const allJobs = await getAllJobPosts()
        dispatch(loadJobPosts(allJobs))
      } catch (error) {
        console.log(error)
      }
    }

    getJobs()
  }, [])

  const allPosts = jobPosts?.map(job => {
    // const isAlreadyFavorited = favoritedJobPosts.find(post => post.id === job.id);
    // let company = companies.find(company => company._id === job.companyId)
    // let favorited = jobPosts?.map(fav => fav._id).includes(job._id)
    return <JobCard  isSignedIn={isLoggedIn.loggedIn} jobPost={job} jobName={job.title} link={job.applyLink} jobDescription={job.description} handleAddFavoriteClick={handleAddFavorite} handleRemoveFavoriteClick={handleRemoveFavorite}/>
  })

  return (
    <div>
      
      <Container>
        {
          isLoggedIn?.user?.type === 'admin' && <Button variant='contained' component={Link} to='new-job-form' state={{userId: isLoggedIn.user._id}} >New Job</Button>
        }
        <h1>Job Posts:</h1>

        <div>
          {allPosts}
        </div>
      </Container>
    </div>
  );
}

export default JobListing;

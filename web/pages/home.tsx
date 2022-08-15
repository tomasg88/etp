import React from 'react'
import Layout from '../components/Layout/Layout'
import Points from '../components/Backgrounds/Points'
import WelcomeSection from '../components/Home/WelcomeSection'
import ProfileSection from '../components/Home/ProfileSection'
import ChakrasSection from '../components/Home/ChakrasSection'
import ReviewsSection from '../components/Home/ReviewsSection'

interface HomeProps {}

const Home: HomeProps = () => {
  return (
    <div className="bg-pink-300">
      <Layout header>
        <div className="absolute right-0 top-0">
          <img alt="shape" src="./images/home-top-right.png" />
        </div>
        <Points />
        <WelcomeSection />
        <ProfileSection />
        <ChakrasSection />
        <ReviewsSection />
      </Layout>
    </div>
  )
}

export default Home

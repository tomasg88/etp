import React from "react"
import Layout from "../components/Layout/Layout"
import Points from "../components/Backgrounds/Points"
import WelcomeSection from "../components/Home/WelcomeSection"
import ProfileSection from "../components/Home/ProfileSection"
import ChakrasSection from "../components/Home/ChakrasSection"

interface HomeProps {}

const Home: HomeProps = () => {
  return (
    <Layout>
      <main className="bg-pink-300">
        <div className="absolute right-0 top-0">
          <img alt="shape" src="./images/home-top-right.png" />
        </div>
        <Points />
        <WelcomeSection />
        <ProfileSection />
        <ChakrasSection />
      </main>
    </Layout>
  )
}

export default Home

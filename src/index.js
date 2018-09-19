import React from 'react'
import ReactDOM from 'react-dom'
import PageSection from './components/PageSection'
import CompanyInfoWrapper from "./components/CompanyInfoWrapper"
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/main.scss'

const Index = () => {

  const projectText = 'The project we are currently working on here at Pumba was born from a very simple idea. We want to bring you, as a customer, all your favorite influencers into one accessible app. No more will you have the need to visit every platform to see your favorite influencers posts, because we will collect them for you. Watch the latest clips from youtube, see what they think about on twitter and look at their latest pictures from Instagram all in one feed.'
  const ideatText = 'The idea started as a problem of following multiple influencers. We spend lots of time on social media by following many influencer. The influencers are becoming increasingly popular for consumers, and new social mediums are popping up constantly. This results in a scattered digital presence across several platforms. The idea is to bring the millenials and gen z back to the TV, making it relevant again. With a platform curating content from multiple open sources the user never has to leave the app and will be directly linked to the relevant pages.'
  const companytText = 'Pumba consists of 26 driven and motivated students who during one semester will act like a real professional company and develop a smart tv application. We are studying at Linköpings University at three different programs, everyone with a burning interest of digital solutions. The company is newly started and with our qualification, drive and open work environment, we are excited to after three months deliver the best possible product.'

  return (
    <main>
      <Header />
      <PageSection title={'Idea'} copy={ideatText} />
      <PageSection title={'Project'} copy={projectText} />
      <PageSection title={'Company'} copy={companytText}>
        <CompanyInfoWrapper />
      </PageSection>
      <Footer/>
    </main>
  )
}

ReactDOM.render(<Index />, document.getElementById("index"))

import React from 'react'
import ReactDOM from 'react-dom'
import PageSection from './components/PageSection'
import CompanyInfoWrapper from "./components/CompanyInfoWrapper"
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/main.scss'

const Index = () => {

  const projectText = 'The project we are currently working on here at Pumba was born from a very simple idea. We want to bring you, as a customer, all your favorite influencers into one accessible app. No more will you have the need to visit every platform to see your favorite influencers posts, because we will collect them for you. Watch the latest clips from youtube, see what they think about on twitter and look at their latest pictures from Instagram all in one feed.'
  const ideatText = 'The project we are currently working on here at Pumba was born from a very simple idea. We want to bring you, as a customer, all your favorite influencers into one accessible app. No more will you have the need to visit every platform to see your favorite influencers posts, because we will collect them for you. Watch the latest clips from youtube, see what they think about on twitter and look at their latest pictures from Instagram all in one feed.'
  const companytText = 'The project we are currently working on here at Pumba was born from a very simple idea. We want to bring you, as a customer, all your favorite influencers into one accessible app. No more will you have the need to visit every platform to see your favorite influencers posts, because we will collect them for you. Watch the latest clips from youtube, see what they think about on twitter and look at their latest pictures from Instagram all in one feed.'

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

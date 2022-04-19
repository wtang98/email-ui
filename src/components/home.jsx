import React from 'react'
import Main from './main-canvas/main'
import TopNav from './top-nav/topNav'

const Home = () => {
    return (
        <div className='home'>
            <TopNav/>
            <Main/>
        </div>
    )
}

export default Home
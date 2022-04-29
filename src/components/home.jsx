import React from 'react'
import Main from './main-canvas/main.tsx'
import TopNav from './top-nav/topNav'

const Home = () => {
    return (
        <div className='home' data-cy='home'>
            <TopNav/>
            <Main/>
        </div>
    )
}

export default Home
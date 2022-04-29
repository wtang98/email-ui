import React from 'react'
import Main from './main-canvas/main'
import TopNav from './top-nav/topNav'

const Home:React.FC = () => {
    return (
        <div className='home' data-cy='home'>
            <TopNav/>
            <Main/>
        </div>
    )
}

export default Home
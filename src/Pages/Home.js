import React from 'react'
import HomeBanner from '../Components/Home/HomeBanner'
import HomeGridItems from '../Components/Home/HomeGridItems'
import HomeCategories from '../Components/Home/HomeCategories'
import HomeSale from '../Components/Home/HomeSale'
import HomeRecommended from '../Components/Home/HomeRecommended'
import { Container} from 'react-bootstrap'
const Home = () => {
  return (
    <div className='text-white' >
        <div style={{  backgroundColor: "#000000" }}>
        <Container >
        <HomeBanner />
        <HomeGridItems />
        </Container>

        </div>
        <div >
            <Container>
            <HomeCategories />
            <HomeSale />
            <HomeRecommended />
            </Container>
        </div>


    </div>
  )
}

export default Home
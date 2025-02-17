import HeroSlider from "../components/Home/HeroSlider"
import NewArrivals from "../components/Home/NewArrivals"
import HotReleasesGames from "../components/Home/HotReleasesGames"
import '../style/Home.css'


const Home = () => {
  return (
    <>
      <HeroSlider />
      <NewArrivals />
      <HotReleasesGames />
    </>
  )
}

export default Home
import HeroSlider from "../components/Home/HeroSlider"
import NewArrivals from "../components/Home/NewArrivals"
import HotReleasesGames from "../components/Home/HotReleasesGames"
import GallerySlider from "../components/Home/GallerySlider"
import '../style/Home.css'


const Home = () => {
  return (
    <>
      <HeroSlider />
      <NewArrivals />
      <HotReleasesGames />
      <GallerySlider />
    </>
  )
}

export default Home
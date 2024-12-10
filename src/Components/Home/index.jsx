import CarouselEl from "../../Elements/CarouselEl"
import HomeAboutSection from "../../Elements/HomeAboutEl"
import HomeContactEl from "../../Elements/HomeContactEl"
import { Helmet } from 'react-helmet';
import HomeServiceDataEl from "../../Elements/HomeServiceDataEl"
import LayoutEl from "../../Shared/Layout"



const Home=()=>{
    const display=(
        <>
        <Helmet>
        <title>Home - BrightNet Ads Media</title>
        <meta name="description" content="Welcome to Your Company, offering top-tier services in web development, SEO, and digital marketing to help your business thrive." />
        <meta name="keywords" content="web development, SEO, digital marketing, business solutions, Your Company" />
        <meta name="author" content="BrightNet Ads Media" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home - Your BrightNet Ads Media" />
        <meta property="og:description" content="BrightNet Ads Media offers industry-leading solutions in web development, SEO, and digital marketing to empower your business." />
        <meta property="og:url" content="https://brightnetadsmedia.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://brightnetadsmedia.in" />
      </Helmet>
         <LayoutEl>
            <CarouselEl />
            <HomeAboutSection />
            <HomeServiceDataEl />
            <HomeContactEl/>
         </LayoutEl>
        </>
    )
    return display
}
export default Home
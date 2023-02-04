import CommonNavbar from "../../components/common-navbar/common-navbar";
import Banner from "../../components/banner/banner";
import CommonFooter from "../../components/common-footer/common-footer";
import ThemeCard from "../../components/theme-card/theme-card";
import Testimonials from "../../components/testimonials/testimonials";
import About from "../../components/about/about";
import Content from "../../components/content/content";
import Slogans from "../../components/slogans/slogans";

const Home = {
    imageSrc: "image/logo.png",
    erweimaSrc: "image/erweima.png",
    backgroundSrc: "image/banner.png",
    slogansSrc: "image/slogans.jpg"
}

const HOME = () =>{
    return (
        <>
            <CommonNavbar imageSrc={Home.imageSrc}/>
            <Banner backgroundSrc={Home.backgroundSrc}/>
            <About/>
            <ThemeCard/>
            <Content/>
            <Testimonials/>
            <Slogans slogansSrc={Home.slogansSrc}/>
            <CommonFooter erweimaSrc={Home.erweimaSrc}/>
        </>
    )
}

export default HOME;
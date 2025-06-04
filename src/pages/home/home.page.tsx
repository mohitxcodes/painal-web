import AboutSection from "./sections/About.section";
import GallerySection from "./sections/Gallery.section";
import HeroSection from "./sections/Hero.section";
export const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <GallerySection />
        </div>
    );
};

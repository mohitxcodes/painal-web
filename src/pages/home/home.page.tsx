import AboutSection from "./sections/about.section";
import GallarySection from "./sections/Gallary.section";
import HeroSection from "./sections/hero.section";
export const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <GallarySection />
        </div>
    );
};

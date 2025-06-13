import AboutSection from "./sections/About.section";
import ExploreMembers from "./sections/ExploreMembers";
import GallerySection from "./sections/Gallery.section";
import HeroSection from "./sections/Hero.section";
import { AnimatedBackground } from "../../components/common/AnimatedBackground";

export const HomePage = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-white to-blue-50/90 z-0"></div>
            <div className="absolute inset-0 opacity-[0.15] bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-transparent to-blue-100/20 z-0"></div>
            <AnimatedBackground />
            <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay z-0"></div>

            {/* Content */}
            <div className="relative z-10">
                <HeroSection />
                <AboutSection />
                <GallerySection />
                <ExploreMembers />
            </div>
        </div>
    );
};

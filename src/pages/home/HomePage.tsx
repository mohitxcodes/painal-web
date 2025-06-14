import AboutSection from "./sections/AboutSection";
import ExploreMembers from "./sections/ExploreMembers";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";

function HomePage() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Base White Background */}
            <div className="absolute inset-0 bg-white z-0"></div>

            {/* Subtle Gradient Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/60 via-white to-gray-50/60 z-0"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>

            {/* Subtle Radial Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-gray-100/30 via-transparent to-transparent z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-gray-100/30 via-transparent to-transparent z-0"></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay z-0"></div>

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


export default HomePage;

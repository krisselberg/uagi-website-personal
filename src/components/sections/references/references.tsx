'use client';

import { FadeInSection } from "@/components/animations/FadeInSection";
import YouTube from "react-youtube";

export function References() {
    const videoIds = ["DI-LKs3GpeE", "JuBDhM01vN0"];

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <section className="w-full py-16 sm:py-24 md:py-32 relative z-10">
            <div className="container px-4 sm:px-6 md:px-8 relative z-10">
                <FadeInSection>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-4 sm:mb-6">
                        Collaborating with Visionaries
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-center mb-10 sm:mb-16">
                        We closely collaborate with our advisors and investors to shape the future of artificial intelligence
                    </p>
                </FadeInSection>
                <FadeInSection>
                    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                        {videoIds.map((videoId) => (
                            <div key={videoId} className="w-full aspect-video">
                                <YouTube videoId={videoId} opts={opts} className="w-full h-full rounded-lg" />
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
} 
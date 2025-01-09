'use client';

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions, MoveDirection } from "@tsparticles/engine";

export const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container: unknown): Promise<void> => {
        console.log(container);
    };

    const options = useMemo(() => {
        const options: ISourceOptions = {
            autoPlay: true,
            background: {
                color: "#0e1111",
            },
            fpsLimit: 60,
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    random: false,
                    speed: 5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 70,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 3,
                },
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                            enable: true,
                            force: 90,
                            smooth: 20,
                        },
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 1,
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                },
            },
            detectRetina: true,
        };

        return options;
    }, []);

    if (init) {
        return (
            <div className="particles-background">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </div>
        );
    }

    return <></>;
};
'use client';

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";

export const ParticleBackground2 = () => {
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
        const options = {
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
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
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    blink: false,
                    color: "#ffffff",
                    consent: false,
                    distance: 30,
                    enable: true,
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    outModes: "bounce",
                    speed: 1
                },
                number: {
                    limit: 0,
                    value: 200
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 2,
                        sync: false
                    },
                    value: {
                        min: 0.05,
                        max: 0.4
                    }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: 1
                }
            },
            background: {
                color: "#0e1111",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
            }
        } as ISourceOptions;

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
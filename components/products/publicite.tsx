"use client";
import { useEffect } from "react";

import "swiper/css";
import "@/styles/publicite.css";
import Link from "next/link";
import {publicity} from "@/data/publicity-data";

export default function Publicit() {

    useEffect(() => {
        // Charger vendor
        const vendorScript = document.createElement("script");
        vendorScript.src = "/assets/js/vendor.688a9bfa.js";
        vendorScript.type = "module";
        vendorScript.crossOrigin = "anonymous";
        document.body.appendChild(vendorScript);

        // Charger index après vendor (optionnel selon dépendances)
        vendorScript.onload = () => {
            const indexScript = document.createElement("script");
            indexScript.src = "/assets/js/index.ff8f4572.js";
            indexScript.type = "module";
            indexScript.crossOrigin = "anonymous";
            document.body.appendChild(indexScript);
        };

        // Nettoyage au démontage
        return () => {
            document.body.removeChild(vendorScript);
            // Attention : indexScript est défini dans onload, tu peux aussi le garder en variable d'état si tu veux le supprimer
        };
    }, []);

    return (
        <div className="fashion-slider">
            <div className="swiper">
                <div className="swiper-wrapper">
                    {publicity.map(({ src, alt, bgColor, title, link }, index) => (
                        <div key={index} className="swiper-slide" data-slide-bg-color={bgColor}>
                            <div className="fashion-slider-title" data-swiper-parallax="-130%">
                                <div className="fashion-slider-title-text">{title}</div>
                            </div>
                            <div className="fashion-slider-scale rounded-3xl overflow-hidden">
                                <Link href={link}>
                                    <img src={src} alt={alt} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton précédent */}
                <div className="fashion-slider-button-prev fashion-slider-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
                        <g className="fashion-slider-svg-wrap">
                            <g className="fashion-slider-svg-circle-wrap">
                                <circle cx="42" cy="42" r="40"></circle>
                            </g>
                            <path
                                className="fashion-slider-svg-arrow"
                                d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                            ></path>
                            <path
                                className="fashion-slider-svg-line"
                                d="M80,0H0"
                            ></path>
                        </g>
                    </svg>
                </div>

                {/* Bouton suivant */}
                <div className="fashion-slider-button-next fashion-slider-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
                        <g className="fashion-slider-svg-wrap">
                            <g className="fashion-slider-svg-circle-wrap">
                                <circle cx="42" cy="42" r="40"></circle>
                            </g>
                            <path
                                className="fashion-slider-svg-arrow"
                                d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                            ></path>
                            <path
                                className="fashion-slider-svg-line"
                                d="M80,0H0"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

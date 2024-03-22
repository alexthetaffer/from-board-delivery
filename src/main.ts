import "../reset.css"
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Swiper from "swiper/bundle";
import "swiper/css";
import "./style.scss";

const BREAKPOINT_MD = 1024;

const reviewsSlider = new Swiper(".swiper-container", {
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        [BREAKPOINT_MD]: {
            slidesPerView: 2
        }
    }
});

Fancybox.bind();

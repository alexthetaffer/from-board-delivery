import "../reset.css"
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Swiper from "swiper/bundle";
import "swiper/css";
import "./style.scss";

const reviewsSlider = new Swiper(".swiper-container", {
    spaceBetween: 24,
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

Fancybox.bind();

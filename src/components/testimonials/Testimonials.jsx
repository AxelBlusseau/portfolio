import React from 'react';
import './testimonials.css'
import AVATR1 from "../../assets/avatar1.jpg"
import AVATR2 from "../../assets/avatar2.jpg"
import AVATR3 from "../../assets/avatar3.jpg"
import AVATR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination, A11y, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const datas = [
    {
        avatar: AVATR1,
        name: "Bryan Breton",
        review: "Lorem ipsum dolor sit amet consectetur adiplisicing elit, lusto quod nan impedit soluta\n" +
            "odio possimus ! Quas sint dignissimos distinctio alias rerum laborum aperiam minus\n" +
            "pariatur, totam dicta, repellendus a voluptatibus!"
    },
    {
        avatar: AVATR2,
        name: "Bryan Breton",
        review: "Lorem ipsum dolor sit amet consectetur adiplisicing elit, lusto quod nan impedit soluta\n" +
            "odio possimus ! Quas sint dignissimos distinctio alias rerum laborum aperiam minus\n" +
            "pariatur, totam dicta, repellendus a voluptatibus!"
    },
    {
        avatar: AVATR3,
        name: "Bryan Breton",
        review: "Lorem ipsum dolor sit amet consectetur adiplisicing elit, lusto quod nan impedit soluta\n" +
            "odio possimus ! Quas sint dignissimos distinctio alias rerum laborum aperiam minus\n" +
            "pariatur, totam dicta, repellendus a voluptatibus!"
    },
    {
        avatar: AVATR4,
        name: "Bryan Breton",
        review: "Lorem ipsum dolor sit amet consectetur adiplisicing elit, lusto quod nan impedit soluta\n" +
            "odio possimus ! Quas sint dignissimos distinctio alias rerum laborum aperiam minus\n" +
            "pariatur, totam dicta, repellendus a voluptatibus!"
    },

]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review for clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
            >
                {
                    datas.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>

                                <h5 className="client__name">{name}</h5>

                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>
    );
}

export default Testimonials;
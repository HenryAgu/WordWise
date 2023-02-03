// import React,{ useState, useRef } from "react";

// stylesheet
import "./CustomerReview.css";

// assets
import review1 from "../../assets/review1.svg";
import review2 from "../../assets/review2.svg";
import review3 from "../../assets/review3.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const CustomerReview = () => {
  return (
    <div className="review_container">
      <h1>Customer Stories</h1>
      <div className="review">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="review_card">
              <div className="review_image">
                <img src={review1} alt="" />
              </div>
              <div className="review_text">
                <h3>“A lifesaver platform to me”</h3>
                <p>
                  I recently discovered the Synonym and Antonym Finder website
                  and I couldn't be more impressed. As a freelance writer,
                  having access to a comprehensive database of synonyms and
                  antonyms has been a game changer for me. The website is easy
                  to navigate and the search function is highly intuitive. I can
                  quickly find the perfect word to convey exactly what I'm
                  trying to say, without having to search through a dictionary.
                  The site also includes examples of how the words are used in
                  context, which is really helpful. I love the fact that the
                  site is always being updated with new words and definitions,
                  so I never have to worry about it becoming outdated
                </p>
                <h4>Danielle Grace, Freelance Writer</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review_card">
              <div className="review_image">
                <img src={review2} alt="" />
              </div>
              <div className="review_text">
                <h3>“A lifesaver platform to me”</h3>
                <p>
                  I have always struggled with finding the right words to
                  express myself, especially in written form. That's why I was
                  so excited to find the Synonym and Antonym Finder website.
                  This site has been a lifesaver for me. The search function is
                  incredibly fast and accurate, and I can quickly find the
                  perfect word to use in my writing. I love the fact that the
                  site is constantly updated with new words and definitions, so
                  I never have to worry about running out of options. I also
                  appreciate the context examples that are included, as they
                  help me understand how the words are used in real life.
                </p>
                <h4>David Henry, English Teacher</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review_card">
              <div className="review_image">
                <img src={review3} alt="" />
              </div>
              <div className="review_text">
                <h3>“A well organized platform”</h3>
                <p>
                  As a teacher, I'm always on the lookout for resources to help
                  my students improve their language skills. I recently came
                  across the Synonym and Antonym Finder website and I must say,
                  I'm thoroughly impressed. The site is well-organized and
                  user-friendly, making it easy for my students to find the
                  words they're looking for. They can easily search for synonyms
                  and antonyms, and the definitions are clearly written and easy
                  to understand. also appreciate the fact that the site includes
                  examples of how the words are used in context, which helps my
                  students understand the words better.
                </p>
                <h4>Franka William, English Teacher</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;

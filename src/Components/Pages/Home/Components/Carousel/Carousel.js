import classNames from 'classnames/bind';
import { A11y, Autoplay, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "~/Assets/Images/i-1.png"
import logo2 from "~/Assets/Images/i-2.png"
import logo3 from "~/Assets/Images/i-3.png"
import logo4 from "~/Assets/Images/i-4.png"
import logo5 from "~/Assets/Images/i-5.png"
import style from "./Carousel.module.css";

const cx = classNames.bind(style)

function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y, Autoplay, Mousewheel]}
        loop={true}
        spaceBetween={50}
        slidesPerView={5}
        autoplay
        mousewheel={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={logo1} alt="" className={cx("card-img", "img-circle")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} alt="" className={cx("card-img", "img-circle")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} alt="" className={cx("card-img", "img-circle")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo4} alt="" className={cx("card-img", "img-circle")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo5} alt="" className={cx("card-img", "img-circle")} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel
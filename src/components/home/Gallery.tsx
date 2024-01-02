// @ts-nocheck
import "slick-carousel/slick/slick.css";
import "./slider.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "react-slick";
import clsx from "clsx";

function SlideArrow(props) {
  const { to, onClick } = props;
  return (
    <div
      className={clsx(
        "absolute -top-3 z-10 flex h-full w-10 items-center justify-center",
        to == "next" ? "right-0" : "left-0",
      )}
    >
      <button className="text-zinc-500" onClick={onClick} aria-label={to}>
        {to == "next" ? (
          <IoChevronForward size={32} />
        ) : (
          <IoChevronBack size={32} />
        )}
      </button>
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <SlideArrow to="prev" />,
    nextArrow: <SlideArrow to="next" />,
    appendDots: (dots) => (
      <>
        <ul className="mt-4 flex justify-center gap-4"> {dots} </ul>
      </>
    ),
    customPaging: () => (
      <div className="h-3 w-3 cursor-pointer rounded-full bg-zinc-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-16 md:px-12">
      <Slider {...settings}>
        {["A", "B", "C", "D"].map((v) => (
          <div className="aspect[4/3] w-full bg-zinc-400" key={v}>
            <h3>hola</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

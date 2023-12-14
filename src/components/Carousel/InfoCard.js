import React from 'react';

const InfoCard = (props) => {
  return (
    <div className="h-[100vh] bg-white w-[400px] flex items-center justify-center ">
      <div className="px-[50px] w-full h-full flex items-center justify-center flex-col">
        <img
          src={props.src}
          alt=""
          className="h-[100px] w-[100px] object-cover"
        />

        <div className="mt-[25px] text-center text-[#000] font-light">
          Elevate your style with our stunning collection of handcrafted rings.
          Each piece is a testament to timeless design and expert craftsmanship,
          perfect for celebrating life's special moments. From classic elegance
          to modern flair, find the ring that speaks to you and adds a touch of
          brilliance to every occasion.
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

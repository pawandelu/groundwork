import React, { useState } from "react";
import Heading from "../common/Heading";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages } from "../../utils/helper";

const slides = galleryImages.map((image) => ({
  src: image.src,
}));

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="px-4 lg:py-25 md:py-20 sm:py-15 py-10 relative">
      <div className="absolute w-82 h-78 top-0 right-0 bg-orange -z-10 max-sm:hidden"></div>

      <div className="max-w-285 w-full overflow-hidden mx-auto">
        <div className="flex flex-row items-center gap-4 mb-8">
          <div className="w-7.5 border-2 border-orange"></div>
          <Heading heading={"Our Gallery"} vari={"Primary"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[290px_496px_290px] md:gap-8 sm:gap-4 gap-2">
          {galleryImages.map((item, index) => (
            <div key={index} className={item.wrapperClass}>
              <img
                src={item.src}
                alt={item.alt}
                className={`${item.imageClass} cursor-pointer`}
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
};

export default Gallery;

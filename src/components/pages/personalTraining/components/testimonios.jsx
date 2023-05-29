import React from "react";

function Testimonios() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-bold text-center m-7 uppercase italic">
            Mas testimonios...
          </h1>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <div>
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/_Mtvhf9YUuo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-xl"
            ></iframe>
          </div>
          <div>
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/w8lYakHPh1E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-xl"
            ></iframe>
          </div>
          <div>
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/ai3YaIHEv3c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonios;

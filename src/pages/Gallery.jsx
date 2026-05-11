import { useState } from "react";
import Footer from "../components/Footer";

const images = [
  { src: "./mc1.png", caption: "Minecraft Server - Survival World" },
  { src: "./mc2.png", caption: "Build your art in the game" },
  { src: "./mc3.png", caption: "Our community in action" },
  { src: "./mc4.png", caption: "Minecraft Server - Creative Build" },
  { src: "./mc5.png", caption: "Community Events" },
  { src: "./mc6.png", caption: "Server Infrastructure" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);

  function goNext() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function goPrev() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <div className="page-header">
        <h1>Gallery</h1>
        <p>Check out screenshots from our Minecraft servers.</p>
      </div>

      <section className="container mb-5" style={{ maxWidth: "800px" }}>
        <div
          className="bg-card p-3 rounded"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
          }}
        >
          <div id="galleryCarousel" className="carousel slide">
            <div className="carousel-inner">
              {images.map((img, index) => (
                <div
                  key={img.src}
                  className={
                    "carousel-item" + (index === current ? " active" : "")
                  }
                >
                  <img
                    src={img.src}
                    className="d-block w-100"
                    alt={img.caption}
                    style={{
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              onClick={goPrev}
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              onClick={goNext}
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          <p className="gallery-caption mt-2">
            {images[current].caption} — {current + 1} / {images.length}
          </p>

          <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
            {images.map((img, index) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.caption}
                onClick={() => setCurrent(index)}
                style={{
                  width: "75px",
                  height: "55px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border:
                    index === current
                      ? "2px solid var(--accent)"
                      : "2px solid var(--border)",
                  opacity: index === current ? 1 : 0.6,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;

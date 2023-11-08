/* eslint-disable no-unused-vars */
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Home = () => {
    const slider = (
        <AutoplaySlider
          className="h-full"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2000}
        >
          <div className="w-full h-full">
            <div
              className="hero min-h-screen h-full"
              style={{
                backgroundImage: "url(https://i.ibb.co/fC7QC7h/download.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl text-col0 font-bold">
                    Discover Your Perfect Retreat at Raf Hotel
                  </h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque aut
                    repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className="hero min-h-screen h-full"
              style={{
                backgroundImage: "url(https://i.ibb.co/RccGSsv/download-1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl text-col0 font-bold">
                    Discover Your Perfect Retreat at Raf Hotel
                  </h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque aut
                    repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className="hero min-h-screen h-full"
              style={{
                backgroundImage: "url(https://i.ibb.co/gSTD8fJ/download-2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl text-col0 font-bold">
                    Discover Your Perfect Retreat at Raf Hotel
                  </h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque aut
                    repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AutoplaySlider>
      );

    return (
        <div className="relative" >
            <div className="pb-12 bg-col0">
            {
                slider
            }
            </div>
        </div>
    );
};

export default Home;
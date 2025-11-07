"use client";
import Image from "next/image";
import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed heroSlides import as data is now in siteContent
import { useState } from "react";
import { EffectCreative, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [thumbsSwiper3, setThumbsSwiper3] = useState(null);

  return (
    <div className="page-title home06">
      <div className="tf-container xl">
        <div className="row">
          <div className="col-12">
            <div className="wrap tf-slider style-1">
              <div className="left">
                <Swiper
                  dir="ltr"
                  className="swiper hero-thumbs-1 effect-content-slide"
                  onSwiper={setThumbsSwiper2}
                  onSlideChange={(swiper) =>
                    thumbsSwiper3 && thumbsSwiper3.slideTo(swiper.activeIndex)
                  }
                >
                  {siteContent.hero.slides.map((slide, index) => ( // Use siteContent
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="heading">
                        <div className="effect-item effect-1 effect-down">
                          <div
                            className="text-display fw-5 title "
                            dangerouslySetInnerHTML={{ __html: `Your <span class='text_white'>Trusted ${siteContent.agent.location} Realtor</span>: Meet <span class='text_white'>${siteContent.agent.name}</span>` }} // Construct title dynamically
                          ></div>
                        </div>
                        <div className="item flex-wrap-sm">
                          <div className="content effect-item effect-up effect-3">
                            <p className="text-1">{siteContent.hero.slides[0].description}</p>
                            
                            {/* Trust Indicators Section */}
                            <div className="trust-indicators mb-24 mt-20" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                              <span className="badge text-4 fw-6" style={{ 
                                padding: '6px 14px', 
                                borderRadius: '20px', 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: 'var(--Text-white)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                              }}>
                                {siteContent.agent.designation}
                              </span>
                              <span className="badge text-4 fw-6" style={{ 
                                padding: '6px 14px', 
                                borderRadius: '20px', 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: 'var(--Text-white)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                              }}>
                                Lifelong {siteContent.agent.location} Resident
                              </span>
                            </div>

                            <a
                              href="#contact"
                              className="tf-btn bg-color-primary pd-26 rounded-cycle height-2"
                              onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.getElementById("contact");
                                if (contactSection) {
                                  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                              }}
                            >
                              {siteContent.hero.slides[0].buttonText} {/* Use button text from siteContent */}
                              {/* Assuming icon remains the same, or could be added to siteContent */}
                              <Image
                                alt=""
                                src="icons/arrow-down-3.svg"
                                width={24}
                                height={24}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="right">
                <Swiper
                  dir="ltr"
                  className="swiper hero-thumbs-2"
                  thumbs={{ swiper: thumbsSwiper2 }} // Connect to both thumbnail sliders
                  modules={[Thumbs, EffectCreative]}
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ["-20%", 0, -1],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  onSwiper={setThumbsSwiper3}
                >
                  {siteContent.hero.mainImages.map((slide, index) => ( // Use siteContent
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="">
                        <Image
                          className="lazyload slide-inner"
                          data-src={slide.src} // Use src from siteContent
                          alt={slide.alt} // Use alt from siteContent
                          width={688} // Keep original dimensions
                          height={816}
                          src={slide.src} // Use src from siteContent
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";

import Header from "../common/Header";
import Footer from "../common/Footer";
import ServideImg from "../../assets/images/construction1.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AvatarImg from "../../assets/images//author-2.jpg";
import "swiper/css/pagination";
import BlogImg from "../../assets/images/construction2.jpg";
import Aboutcomp from "../common/Aboutcomp";
import { apiurl, token } from "../common/http";
import LatestServices from "../common/LatestServices";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Welcome */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome to the Future of Construction!</span>
                <h1>
                  Building Tomorrow,
                  <br /> Today
                </h1>
                <p>
                  At Chhikara Constructions, We turn visions into reality with
                  our dedicated construction services, focusing on quality and
                  safety.
                </p>
                <div className="mt-3">
                  <a className="btn btn-primary large">Contact now</a>
                  <a className="btn btn-secondary large ms-2">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Aboutcomp />
        {/* Services */}
        <LatestServices />

        {/* Why chose us */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why chose us</span>
              <h2>Our construction Projects</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
                <br /> obcaecati mollitia sint esse quod voluptate in quibusdam
                amet,
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} />{" "}
                  </div>
                  <div className="card-title mt-3">
                    <h3>Lorem, ipsum dolor.</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde cumque necessitatibus ex illo tempora! Quisquam
                    provident eveniet saepe alias sequi?
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} />{" "}
                  </div>
                  <div className="card-title mt-3">
                    <h3>Lorem, ipsum dolor.</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde cumque necessitatibus ex illo tempora! Quisquam
                    provident eveniet saepe alias sequi?
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} />{" "}
                  </div>
                  <div className="card-title mt-3">
                    <h3>Lorem, ipsum dolor.</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde cumque necessitatibus ex illo tempora! Quisquam
                    provident eveniet saepe alias sequi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}

        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Our construction Projects</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
                obcaecati mollitia sint esse quod voluptate in quibusdam amet,
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Project</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ratings */}
        <section className="section-5 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span>Testimonials</span>
              <h2>Our construction Testimonials</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
                obcaecati mollitia sint esse quod voluptate in quibusdam amet,
              </p>
            </div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        classname="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-1">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum adipisci velit, sapiente odit excepturi neque? Ut
                        assumenda atque porro incidunt? Eos nobis quibusdam
                        deserunt obcaecati nisi adipisci consequatur quas ipsum!
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">Chhikara</div>
                        <div>Thekedaar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        classname="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-1">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum adipisci velit, sapiente odit excepturi neque? Ut
                        assumenda atque porro incidunt? Eos nobis quibusdam
                        deserunt obcaecati nisi adipisci consequatur quas ipsum!
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">Chhikara</div>
                        <div>Thekedaar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        classname="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-1">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum adipisci velit, sapiente odit excepturi neque? Ut
                        assumenda atque porro incidunt? Eos nobis quibusdam
                        deserunt obcaecati nisi adipisci consequatur quas ipsum!
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">Chhikara</div>
                        <div>Thekedaar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        classname="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-4 pb-1">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum adipisci velit, sapiente odit excepturi neque? Ut
                        assumenda atque porro incidunt? Eos nobis quibusdam
                        deserunt obcaecati nisi adipisci consequatur quas ipsum!
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">Chhikara</div>
                        <div>Thekedaar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* Blogs and articles */}
        {/* <section className="section-6 bg-light py-5">
          <div className="container">
            <div className="container">
              <div className="section-header text-center">
                <span>Blags and News</span>
                <h2>Article and Blog Post</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  ad obcaecati mollitia sint esse quod voluptate in quibusdam
                  amet,
                </p>
              </div>
              <div className="row pt-3">
                <div className="col-md-4">
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img src={BlogImg} className="w-100" />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <a className="title" href="#">
                          Dummy blog
                        </a>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img src={BlogImg} className="w-100" />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <a className="title" href="#">
                          Dummy blog
                        </a>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img src={BlogImg} className="w-100" />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <a className="title" href="#">
                          Dummy blog
                        </a>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;

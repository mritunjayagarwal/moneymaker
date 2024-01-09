import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import tokenomics from './components/Home/tokenomics';
import about from './components/Home/about';
import features from './components/Home/features';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home-main">
        <section className="hero">
          <div className="container">
            <div className='row'>
              <div className='col-lg-6'>
                <div>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1 className='hero-highlight text-uppercase'>SELF-CUSTODIAL DECENTRALIZED LEVERAGE TRADING PLATFORM</h1>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1 className='hero-heading'>Supercharged</h1>
                    <h1 className='text-white'>for Traders</h1>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                    <p>Trade cryptocurrencies effortlessly with no price influence, leveraging up to 100x, and unified liquidity. The Margin Network manages the intricate details, guaranteeing you a streamlined DEX trading experience on our platform.</p>
                  </AnimationOnScroll>
                  <button className='btn hero-btn mb-5'>Start Trading</button>
                </div>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img src={require(`./Img/home/bitcoin-logo.png`)} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
          <img src={require(`./Img/home/hero-bottom.png`)} className='mt-5' style={{ "width": "100%" }} alt="" />
        </section>
        <main>
          <section className='tokenomics'>
            <div className='container'>
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h1 className='text-center section-heading'>Level Up Every <span className='section-highlight'>Trade</span></h1>
              </AnimationOnScroll>
              <div className='row d-flex justify-content-center'>
                {
                  tokenomics.map((tokenomic) => {
                    const { id, heading, description, image } = tokenomic;
                    return (
                      <div className='col-lg-6 col-md-6 mt-4' key={id}>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                          <div className='tokenomic-item'>
                            <img src={require(`./Img/home/${image}`)} className='toke-img' alt="" />
                            <div className='p-3'>
                              <h1 className='tokenomic-heading'>{heading}</h1>
                              <p className='tokenomic-para'>{description}</p>
                            </div>
                            <img src={require(`./Img/home/polygon.png`)} className='tokenomic-polygon' alt="" />
                          </div>
                        </AnimationOnScroll>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
          <section className='about'>
            <div className='container'>
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h1 className='text-center section-heading'>Advanced Platform for Enhanced Leverage Trading</h1>
              </AnimationOnScroll>
              <div>
                {
                  about.map((item) => {
                    const { id, heading, description, image } = item;
                    return (
                      <div className="row mt-5" key={id}>
                        <div className={`col-lg-6 col-md-6 d-flex align-items-center ${heading === 'Intelligent Position Allocation' ? 'order-md-2' : ''}`}>
                          <AnimationOnScroll animateIn="animate__fadeIn">
                            <div>
                              <h1 class="about-heading">{heading}</h1>
                              <p className='about-para'>{description}</p>
                            </div>
                          </AnimationOnScroll>
                        </div>
                        <div className='col-lg-6 col-md-6 d-flex align-items-center'>
                          <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={require(`./Img/home/About/${image}`)} className='img-fluid' alt="" />
                          </AnimationOnScroll>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
          <section className="features-main">
            <div className='features'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4 d-flex justify-content-center align-items-center'>
                    <img src={require('./Img/home/feature/feature-main.png')} className='img-fluid' alt="" />
                  </div>
                  <div className='col-lg-8 order-md-2'>
                    <div className='features-wrapper'>
                      <AnimationOnScroll animateIn="animate__fadeIn">
                        <h1 className='section-heading text-left mt-3'>New <span className='section-highlight'>Technology</span><br /> Behind Every Feature</h1>
                      </AnimationOnScroll>
                      <div className='row'>
                        {
                          features.map((feature) => {
                            const { id, heading, description, image } = feature;
                            return (
                              <div className='col-lg-6 col-md-6' key={id}>
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                  <div className='feature-card'>
                                    <img src={require(`./Img/home/feature/${image}`)} className='img-fluid mb-3' alt="" />
                                    <h1 className='feature-heading mb-3'>{heading}</h1>
                                    <p className='feature-para'>{description}</p>
                                  </div>
                                </AnimationOnScroll>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <main className='bottom-sec'>
        <img src={require('./Img/home/advanced/advanced-bg.png')} className='advanced-bg' alt="" />
        <section>
          <div className='container'>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className='row d-flex justify-content-center'>
                <div className='col-lg-4 col-md-6'>
                  <div className='advanced-item'>
                    <div className='advanced-image-wrapper'>
                      <img src={require('./Img/home/advanced/1.png')} alt="" />
                    </div>
                    <h1 className='advanced-heading'>Trade</h1>
                    <p className='advanced-para'>Initiate long or short stances with up to 100x leverage without any price fluctuations.</p>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='advanced-item'>
                    <div className='advanced-image-wrapper'>
                      <img src={require('./Img/home/advanced/2.png')} alt="" />
                    </div>
                    <h1 className='advanced-heading'>Boost Liquidity</h1>
                    <p className='advanced-para'>Purchase and stake MGNXLP to accumulate protocol revenue and MGNX bonuses.</p>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='advanced-item'>
                    <div className='advanced-image-wrapper'>
                      <img src={require('./Img/home/advanced/3.png')} alt="" />
                    </div>
                    <h1 className='advanced-heading'>Invest</h1>
                    <p className='advanced-para'>Deposit mMGNX &amp; MGNX to be eligible for generating protocol earnings and MGNX rewards.</p>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </section>
        <section>
          <div className='container'>
            <h1 className='text-center section-heading section-highlight'>Backers</h1>
            <div className='row mt-5'>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/1.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/2.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/3.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/4.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/5.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/6.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/7.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/8.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/9.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/10.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/11.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
              <div className='col-lg-3 col-md-4 col-6 text-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <img src={require('./Img/home/backers/12.png')} className='img-fluid' alt="" />
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </section>
        <img src={require(`./Img/home/hero-bottom.png`)} className='mt-5' style={{ "width": "100%" }} alt="" />
        </main>
      </main>
    </>
  )
}

export default Home
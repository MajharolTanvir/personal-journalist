import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Image/banner/banner1.jpg'
import banner2 from '../../Image/banner/banner2.jpg'
import banner3 from '../../Image/banner/banner3.jpg'
import banner4 from '../../Image/banner/banner4.jpg'
import banner5 from '../../Image/banner/banner5.jpg'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='bg-gradient-to-b from-black to-teal-400'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sports news</h3>
                        <p>Hire me to collect Sports related news for your channel and grow up your TRP faster.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Crime news</h3>
                        <p>Hire me to collect Crime related news for your channel and grow up your TRP faster.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-black'>Brand promotion news</h3>
                        <p className='text-black'>Hire me to collect Brand promotion news for your channel and grow up your TRP faster.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-black'>Actor related news</h3>
                        <p className='text-black'>Hire me to collect Actor related news for your channel and grow up your TRP faster.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Political news</h3>
                        <p>Hire me to collect political news for your channel and grow up your TRP faster.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
        </div>
    );
};

export default Home;
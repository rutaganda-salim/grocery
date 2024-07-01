import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ClientTestimonials Component
const ClientTestimonials = () => {
    const testimonials = [
        { name: 'Robert Fox', role: 'Customer', rating: 5, image: '3o.png', feedback: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.' },
        { name: 'Dianne Russell', role: 'Customer', rating: 5, image: '1o.png', feedback: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.' },
        { name: 'Eleanor Pena', role: 'Customer', rating: 5, image: '2o.png', feedback: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "green",
                    borderRadius: '50%',
                    
                    position: 'absolute',
                    top: '-20px', // Adjust this value as needed
                    right: '50px', // Adjust this value to move them closer together
                    zIndex: 1
                }}
                onClick={onClick}
            />
        );
    }
    
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "green",
                    borderRadius: '50%',
                   
                    position: 'absolute',
                    top: '-20px', // Adjust this value as needed
                    left: '900px', // Adjust this value to move them closer together
                    zIndex: 1
                }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-0 py-8 max-w-screen-lg relative">
            <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white shadow-md rounded-md p-6 text-sm ">
                            <p className="text-gray-600 mb-4">“{testimonial.feedback}”</p>
                            <div className="flex items-center">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                                <div className="flex items-center mt-2 ml-4">
                                    {Array(testimonial.rating).fill().map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.916 1.418 8.332L12 18.896l-7.418 4.103L6 15.666 0 9.75l8.332-1.595z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientTestimonials;

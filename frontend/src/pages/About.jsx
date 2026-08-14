import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Elevate your everyday style with the FOREVER Dress Collection—a perfect blend of elegance, comfort, and modern fashion. From casual outings to special occasions, discover timeless designs you'll love to wear again and again.</p>
                    <p>Our team works tirelessly to bring you the latest fashion trends with premium quality, exceptional craftsmanship, and styles that inspire confidence. Every collection is designed to make you look and feel your best.</p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>At FOREVER, our mission is to inspire confidence through fashion by offering high-quality, stylish, and affordable clothing for every occasion. We are dedicated to delivering exceptional products, outstanding customer service, and a seamless shopping experience that keeps our customers coming back.</p>
                </div>
            </div>

            <div className="text-xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We believe quality should never be compromised. Each piece is designed using premium materials and carefully inspected to provide lasting comfort, superior craftsmanship, and timeless style.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className='text-gray-600'>We are committed to making online shopping easier with intuitive navigation, multiple payment options, fast shipping, and a user-friendly experience.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our goal is to build lasting relationships with our customers by providing outstanding support, quick assistance, and a personalized shopping experience every step of the way.</p>
                </div>
            </div>

            <NewsletterBox />
        </div>
    )
}

export default About

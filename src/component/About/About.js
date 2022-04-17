import React from 'react';
import image from '../../Image/pic.jpg'

const About = () => {
    return (
        <div className='bg-gradient-to-b from-black to-teal-400 h-screen'>
            <h2 className='text-slate-50 font-bold text-center'>About me</h2>
            <div className='grid grid-cols-2 container mx-auto my-5'>
                <div>
                    <h1 className='text-slate-50 text-center py-3'>My name is Majharul tanvir.</h1>
                    <div className='grid grid-cols-2 text-slate-50 text-center my-3 gap-2'>
                        <div className='border-4 border-cyan-200 h-full rounded-lg shadow-lg shadow-cyan-500'>
                            <h6 className='border-b-2 py-2'>What is my goal?</h6>
                            <p className='flex text-justify p-2'>My ambition is to work as a software engineer. But first I am trying to learn website development. Then I'd like to work in a good career while also learning software programming.</p>
                        </div>
                        <div className='border-4 border-cyan-200 h-full rounded-lg shadow-lg shadow-cyan-500'>
                            <h6 className='border-b-2 py-2'>How I can work hard?</h6>
                            <p className='flex text-justify p-2'>First I finish my videos on time. Then I watch the video again and do the work shown in the video. Then I googled what I didn't understand in the video. Then if I have time, I try to do something extra.</p>
                        </div>
                    </div>
                </div>
                <div className='items-left flex justify-center'>
                    <img className='rounded-lg shadow-lg shadow-cyan-500 border-4 border-cyan-200' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
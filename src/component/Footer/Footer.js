import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    return (
        <div className='bg-teal-400 text-slate-50 mb-0 text-center py-2'>
            <p className='mb-0'>Copyright &copy; {date} <span className='text-black font-bold'>Tanvir </span>Anowear</p>
        </div>
    );
};

export default Footer;
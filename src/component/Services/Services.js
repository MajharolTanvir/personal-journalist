import { Link, useNavigate } from 'react-router-dom';
import useData from '../../hooks/useData'
import { FiArrowRightCircle } from "react-icons/fi";

const Services = () => {
    const [services] = useData()

    const navigate = useNavigate()

    const handleCheckOut = () => {
        navigate(':checkout')
    }
    return (
        <div className='container mx-auto py-10'>
            <div className='flex justify-center items-center mt-16'>
                <div style={{ height: '4px' }} className='bg-slate-100 w-40 mx-10 rounded-2xl'></div>
                <h4 className='text-center text-slate-50 text-3xl font-bold'>Services</h4>
                <div style={{ height: '4px' }} className='bg-slate-100 w-40 mx-10 rounded-2xl'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-10'>
                {
                    services.map(service => <div className='mt-16 shadow-xl shadow-zinc-500' key={service.id}>
                        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <Link to="/">
                                <img className="rounded-t-lg p-3 rounded-xl" src={service.img} alt="" />
                            </Link>
                            <div className="p-3">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.name}</h5>
                                <p className='font-bold'>Price: {service.price}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.about.slice(0, 180)}</p>
                                <Link onClick={handleCheckOut} to="checkout" className="no-underline w-full inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Check out
                                    <FiArrowRightCircle className='ml-1' />
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
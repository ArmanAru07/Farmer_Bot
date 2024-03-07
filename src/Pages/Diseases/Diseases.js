import React from 'react';
import { Link } from 'react-router-dom';

const Diseases = () => {
    return (
        <div className='grid grid-cols-3 relative mt-10 mb-16 ml-10 mr-10'>
            <Link to="/blog" className="card w-96 bg-base-100 shadow-xl image-full mb-10">
                <figure><img src="https://cdn.mos.cms.futurecdn.net/PGFS4mSeAcKRKrkRZ4Wsr9.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Black rot.!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </Link>

            <div className="card w-96 bg-base-100 shadow-xl image-full mb-10">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMFNz6Is3bauGY1UuVVSeNxt9fN-HxOJXItY3WfUCVh__C9QrAwuLUGx8dqYAfn22dRE&usqp=CAU" alt="Shoes" /></figure>
                <Link to="/blog" className="card-body">
                    <h2 className="card-title">Black Spot.!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    </div>
                </Link>
            </div>
            <Link to="/blog">
                <div className="card w-96 bg-base-100 shadow-xl image-full mb-10">
                    <figure><img src="https://plantdoctor.co.nz/assets/uploads/2019/10/Blossom-end-rot.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BLOSSOM END ROT.!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/blog">
                <div className="card w-96 bg-base-100 shadow-xl image-full mb-10">
                    <figure><img src="https://plantdoctor.co.nz/assets/uploads/2019/10/Blossom-end-rot.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BLOSSOM END ROT.!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/blog">
                <div className="card w-96 bg-base-100 shadow-xl image-full mb-10">
                    <figure><img src="https://plantdoctor.co.nz/assets/uploads/2019/10/Blossom-end-rot.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BLOSSOM END ROT.!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/blog">
                <div className="card w-96 bg-base-100 shadow-xl image-full mb-10">
                    <figure><img src="https://plantdoctor.co.nz/assets/uploads/2019/10/Blossom-end-rot.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BLOSSOM END ROT.!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/blog">
                <div className="card w-96 bg-base-100 shadow-xl image-full mb-10">
                    <figure><img src="https://plantdoctor.co.nz/assets/uploads/2019/10/Blossom-end-rot.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BLOSSOM END ROT.!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    );
};

export default Diseases;
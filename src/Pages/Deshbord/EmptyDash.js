import React, { useEffect, useState } from 'react';
// import './EmptyDash.css'
import Scroller from '../../Shared/Scroller';
import './EmptyDash.css';
import { Carousel } from 'flowbite-react';

const EmptyDash = () => {




    return (
        <Carousel className='' slideInterval={2000}>

            <div >
                <div className="flex flex-col items-center">
                    {/* Add your round image here */}
                    <div className="overflow-hidden w-1/2 h-full mx-auto mb-6" >
                        <img className="w-full h-full object-cover" src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2021/05/untitled-1621428046658.jpg" alt="avatar" />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center">
                    {/* Add your round image here */}
                    <div className="overflow-hidden w-1/2 h-full mx-auto mb-6">
                        <img className="w-full h-full object-cover" src="https://i.ytimg.com/vi/J1pbhthO1gs/maxresdefault.jpg" alt="avatar" />
                    </div>
                </div>
            </div>


            <div>
                <div className="flex flex-col items-center">
                    {/* Add your round image here */}
                    <div className="overflow-hidden w-1/2 h-full mx-auto mb-6">
                        <img className="w-full h-full object-cover" src="https://3.bp.blogspot.com/-7nTd1-gVUMs/VFgaiZC-S2I/AAAAAAAAABc/MBUaXzTcUxU/s1600/10603795_10152701577197743_2719049423244688630_n.jpg" alt="avatar" />
                    </div>
                </div>
            </div>


        </Carousel>
    );
};

export default EmptyDash;
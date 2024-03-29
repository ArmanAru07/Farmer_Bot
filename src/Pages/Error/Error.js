import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';
import useTitle from '../../Hooks/useTitle';
// import GhostEyes from './Animation';

const Error = () => {

    useTitle("Page not Found");

    return (
        <div className='bg-black'>
            <h1>hi</h1>
            <div style={{ backgroundColor: '#111827' }} class="box">
                <div class="box__ghost">
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>

                    <div class="box__ghost-container">
                        <div class="box__ghost-eyes">
                            <div class="box__eye-left"></div>
                            <div class="box__eye-right"></div>
                        </div>
                        <div class="box__ghost-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="box__ghost-shadow"></div>
                </div>

                <div class="box__description">
                    <div class="box__description-container">
                        <div class="box__description-title">Whoops!</div>
                        <div class="box__description-text">It seems like we couldn't find the page you were looking for</div>
                    </div>

                    <Link to="/" target="_blank" class="box__button">Go back</Link>

                </div>
                {/* <GhostEyes /> */}
            </div>
        </div>

    );
};

export default Error;
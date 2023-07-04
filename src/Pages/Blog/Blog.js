import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                className="text-gray-700 pl-3 pr-4 py-2 md:p-0 flex items-center justify-between w-full md:w-auto"
                onClick={toggleDropdown}
            >
                Services

            </button>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="z-10 absolute -mt-9 divide-y lg:ml-[490px] divide-gray-100 rounded-lg shadow w-44"
                    style={{ backgroundColor: "white", marginLeft: 478 }}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        <li>
                            <Link
                                to="/shoppingPage"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Used Islamic Book
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

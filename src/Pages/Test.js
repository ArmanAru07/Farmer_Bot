import React, { useEffect, useState } from 'react';

const Test = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isTop = scrollTop === 0;

      setShrunk(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      <header className={`fixed w-full py-4 transition-all ${isShrunk ? 'h-12' : 'h-32'} bg-gray-900 text-white`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className={`text-xl font-semibold  ${isShrunk ? 'mt-1' : 'mt-3'}`}>
            Logo
          </a>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto py-28">
        <h1># Working step</h1>

        <h1>1. Work on therapy page</h1>
        <h1>2. Check responsive</h1>

        <br />
        <br />
        <h1># Problems</h1>

        <h1>1. In header user name increase, page links position change.</h1>
        <h1>2. The dropdown works in an empty page but not in the original website.</h1>
        <h1>3. 404 page background color.</h1>
        <h1>4. Therapy page cart position is not fixed.</h1>
        <h1>5. Therapy page toast is so fast and not showing properly.</h1>

        <br />
        <br />
        <h1># Work but need to know</h1>

        <h1>Why in timercart if we not use break time useEffect, then check what happens.</h1>

        <br />
        <br />
        <h1># Update</h1>

        <h1>1. Give a small div to go to "my cart" in shop book option.</h1>
        <h1>2. Make an aside bar for service dropdown in mobile view.</h1>
        <h1>3. When scroll down, the header will be small.</h1>
        <h1>4. Therapy page card background image will be zoomed.</h1>
        <h1>5. Restaurant website feature option.</h1>
      </div>
    </div>
  );
};

export default Test;

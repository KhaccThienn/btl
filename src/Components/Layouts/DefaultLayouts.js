import React from 'react'
import Footers from './Footers/Footers'
import Headers from './Headers/Headers'
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { AiOutlineToTop } from 'react-icons/ai';

function DefaultLayouts({ children }) {
  const styles = {
    width: "50px",
    height: "50px",
    color: "white",
    backgroundColor: "rgb(83, 82, 81)",
    borderRadius: "50%",
  };
  
  useEffect(() => { window.scrollTo(0, 0) }, []);
  return (
    <div>
      <div className="">
        <Headers />
        <div className="">
          <div>
            <ScrollToTop
              smooth
              component={<AiOutlineToTop />}
              color="#757575"
              style={styles}
            />
            {children}
          </div>
        </div>
        <div>
          <Footers />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayouts
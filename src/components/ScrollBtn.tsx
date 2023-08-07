import { useState } from "react";
import { PiCatThin } from "react-icons/pi";

import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100px;
  left: 90%;
  bottom: 40px;
  height: 30px;
  font-size: 4rem;
  z-index: 1000;
  cursor: pointer;
  opacity: 0.8;
  color: #232324;
  margin-bottom: 40px;
`;

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button onClick={scrollToTop}>
      <PiCatThin style={{ display: visible ? "inline" : "none" }} />
    </Button>
  );
};

export default ScrollBtn;

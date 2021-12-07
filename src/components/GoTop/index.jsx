import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import { useMediaQuery } from '@mui/material';

const GoTop = (props) => {
    const [intervalId, setIntervalId] = useState(0);
    const [thePosition, setThePosition] = useState(false);
    const mobileMatches = useMediaQuery('(max-width:600px)');

    const timeoutRef = useRef(null);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
        // window.scrollTo(0, 0);
    }, [])

    const onScrollStep = () => {

        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, props.delayInMs);

    }

    return (
        <Wrapper onClick={scrollToTop}>
            {!mobileMatches && `GO TO TOP`}
            <DoubleArr>{`>>`}</DoubleArr>
        </Wrapper>
    );
};
export default GoTop;

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 98.1%;
  text-transform: uppercase;
  color: #B78300;
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: end;
    &:hover {
        color: #d5b562
    }
    &:hover > div {
        color: #d5b562
    }
`

const DoubleArr = styled.div`
    background: #b78300;
    padding: 10px 10px 12px 10px;
    border-radius: 50%;
    color: #fffbe2;
    margin-left: 0px;

    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    margin-left: 11px;
    text-align: center;
    cursor: pointer;
    transform: rotate(270deg);
`
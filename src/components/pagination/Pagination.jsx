import * as React from 'react';
import arrowLeft from '../../images/left.png';
import arrowRight from '../../images/right.png';
import styled from "styled-components";
import { Image } from "../common";

export default function Pagination({start, end, page, pageHandler, showPageNumber = true}) {
    const handleLeft = () => {
        pageHandler((page) => page - 1)
    }
    const handleRight = () => {
        pageHandler((page) => page + 1)
    }
    return (
        <Wrapper>
            <Button disabled={page === 1} onClick={handleLeft}>
                <Image src={arrowLeft}/>
            </Button>
            <Count>
                {showPageNumber ? `{page} / {end}`: ''}
            </Count>
            <Button disabled={page === end}  onClick={handleRight}>
                <Image src={arrowRight}/>
            </Button>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const Count = styled.h6`
  font-size: 44px;
  margin: 0 11px;
  color: #B78300;
`
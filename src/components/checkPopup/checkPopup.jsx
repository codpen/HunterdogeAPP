import {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import styled from "styled-components";

export const CheckPopup = ({setIsOpen, big = false, item={}}) => {
  const {account} = useWeb3React()
  

  return (
    <Modal big={big}>
      <CloseButton onClick={() => {
        console.log('WTF');
      }}>X</CloseButton>
             {item.Project_Address && <CheckLink href={`/token/${item.Project_Address}`}>Check Profile</CheckLink>}
             {item.Project_Website && <CheckLink href={item.Project_Website}>Check Website</CheckLink>}
             {item.Project_Presale_Link && <CheckLink href={item.Project_Presale_Link}>Check Pre-sale</CheckLink>}
    </Modal>
  )
}

const Modal = styled.div`
  position: absolute;
  top: -17px;
  //right: -155px;
  right: ${({big}) => big ? '-110px' : '50px'};
  width: 168px;
  height: 87px;
  background: #FFFFFF;
  border: 3px solid #FAF0CB;
  box-sizing: border-box;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 26px 18px 9px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

    &::before {
        content: ''; 
        position: absolute;
        left: 162px;
        top: 17px; 
        border: 15px solid transparent;
        border-left: 25px solid #fff;
      }
  
  @media screen and (min-width: 1800px) {
    right: -191px;
    &::before {
        left: -37px;
        border: 15px solid transparent;
        border-right: 25px solid #fff;
      }
  }
`

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 19px;
  height: 19px;
  top: 10px;
  right: 10px;
  border: none;
  background: #B78300;
  border-radius: 50%;
  cursor: pointer;
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 19px;
  transition: 0.5s;

  &:hover {
    background-color: #d5b562
  }
  
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;

  @media screen and (max-width: 992px) {
    font-size: 30px;
    line-height: 29px;
    width: 48px;
    height: 41px;
  }
`

const CheckLink = styled.a`
  font-size: 15px;
  font-weight: bold;
  line-height: 15px;
  text-align: center;
  color: rgba(171, 136, 46, 0.7);
  padding: 0px 5px;
  
  &:hover {
    color: #AB882E;
  }
`
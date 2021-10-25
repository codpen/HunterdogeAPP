import styled from "styled-components";

export const Button = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 8px;
    padding: 12px;

    background-color: #e44b05;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #bd3c00;
    }

    @media screen and (max-width: 725px) {
        display: flex;
        align-items: center;
        width: 148px;
        height: 32px;
    }
`;

export const AccountDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 25px;
    padding: 2px 2px 2px 1.6rem;
    height: 40px;
    /* width: 230px; */
    border: 2px solid #B78300;
    background-color: #fff;
    color: #B78300;
    font-size: 14px;
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 725px) {
        .account {
            display: none;
        }
    }
`;

export const WalletSpan = styled.span`
    display: block;
    margin-left: 10px;
    border-radius: 25px;
    padding: 10px;
    background-color: #FAF0CB;
`;
export const WalletMobileSpan = styled.span`
    display: none;
    margin-left: 10px;
    border-radius: 25px;
    padding: 10px;
    color: #ffffff;
    width: 145px;
    height: 40px;
    background-color: #FAF0CB;
    
    @media screen and (max-width: 725px) {
        .account-wallet-mobile {
            /* display: block; */
            display: flex;
            align-items: center;
            height: 32px;
        }
    }
`;

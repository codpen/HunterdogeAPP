import React, {useState} from 'react';
import {Button, Flex, Image, LinkWrapper, Text} from "../../../components/common";
import logo from '../../../images/hunter_logo.png';
import chart from '../../../images/mobile/chart_ico.svg';
import {Wrapp, WrappedButton, Title, Wrapper} from "./MobileMenuStyled";

const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Wrapper>
                <Wrapp>
                <div>
                    <Flex>
                        <Image src={logo} width={'25px'} height={'25px'}/>
                        <Title>HunterDoge</Title>
                    </Flex>
                    <Flex justify={'start'} margin={'1px 0 0 7px!important'}>
                        <Image src={chart} width={'10px'} height={'5px'}/>
                        <Text size={'8px'}>1 $HD = $0.0005 </Text>
                    </Flex>
                    <Flex justify={'start'} margin={'2px 0 0 18px!important'}>
                        <Button width={'43px'} height={'8px'} size={'7px'}>Buy $HD</Button>
                    </Flex>
                    
                </div>
                </Wrapp>
                
            </Wrapper>
        </>

    );
};

export default MobileMenu;



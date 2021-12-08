import {useState} from 'react';
import styled from 'styled-components';
import logo from '../../images/hunter_logo.png';
import {Button, Flex, Image, Text} from '../common';
import PickModal from '../modal/PickModal';

const LeaveComment = () => {
    const [isModal, setIsModal] = useState(false)

    return (
        <Block>
          <Flex justify={'start'}>
            <Title>leave a comment </Title>
            <TextDescr>You need to connect your wallet to leave a comment.</TextDescr>
          </Flex>
          <Flex margin={'17px 0 0 0'}>
            <Flex direction={'column'} margin={'0 25px 0 0'}>
                <Image src={logo} width={'103'}/>
                <ButtonPick onClick={() => setIsModal(!isModal)}>pick another picture
                {isModal && <PickModal setIsOpen={setIsModal}/>}
                </ButtonPick>
            </Flex>
            <InputMessage id="Message"/>
          </Flex>
          <Flex justify={'end'} margin={'13px 0 0 0'}>
              <Text size={'13px'} weight={900}>your nickname</Text>
              <InputNick/>
              <Button width={'183px'} bg={'#AB882E'}>add comment</Button>
          </Flex>
          
        </Block>
    )
}

export default LeaveComment;

const Block = styled.div`
    background: #FFFFFF;
    border: 2px solid rgba(183, 131, 0, 0.3);
    border-radius: 25px;
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
    margin-top: 120px;
    margin-bottom: 40px;
    padding: 20px 39px 19px 47px;
    max-width: 1039px
`

const Title = styled.p`
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: 98.1%;
    color: #B78300;
    text-transform: uppercase;
    /* padding: 29px 0 24px 50px; */
`

const TextDescr = styled.p`
    font-family: Raleway;
    font-style: italic;
    font-weight: 500;
    font-size: 15.57px;
    line-height: 98.1%;
    margin-left: 30px;


    /* titel */

    color: #B78300;

`

const ButtonPick = styled.button`
    width: 183px;
    height: 31px;
    background: #FFFFFF;
    border: 2px solid rgba(183, 131, 0, 0.3);
    border-radius: 25px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 98.1%;
    /* identical to box height, or 13px */
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    margin-top: 15px;
    color: #B78300;
    position: relative;
`;

const InputMessage = styled.textarea`
  width: 712px;
  height: 135px;
  padding: 15px;
  background: #FFF8CC;
  border-radius: 25px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  border: none;
  `

const InputNick = styled.input`
    width: 183px;
    height: 31px;
    background: #FFFFFF;
    border: 2px solid rgba(183, 131, 0, 0.3);
    box-sizing: border-box;
    border-radius: 25px;
    margin: 0 44px 0 18px;
`
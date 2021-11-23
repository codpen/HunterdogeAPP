import styled from "styled-components";
import close from '../../images/close_ico.svg';
import { Box } from '@mui/system';

const TabsStyled = ({ setPartActive, partActive, data, closeTab }) => (
  <Part>
    {data.map((item, index) => {
      return (
        <Tab key={index} className={(item.id ? item.id === partActive : partActive === index + 1) ? 'active' : ''} onClick={() => setPartActive(item.id ? item.id : index + 1)}>
          <span>{item.label}</span>
          {
            item.close 
            ?
            <Box component="img"
              src={close}
              onClick={() => closeTab(item.id)}
              sx={{
                position: 'absolute',
                right: '5px',
                top: '10px'
              }}
            />
            :
            false
          }
        </Tab>
      )
    })}
  </Part>
)

export default TabsStyled;

const Part = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px

`

const Tab = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 163.24px;
    height: 38px;
    background: rgba(183, 131, 0, 0.1);;
    border-radius: 25px 25px 0 0;
    cursor: pointer;
    &:hover {
      border: 1px solid #B78300;
      border-bottom: 1px solid rgba(183, 131, 0, 0.5);
      font-weight: 800
      & span{
        font-weight: 800;
      }
    }

    &:hover > span {
        font-weight: 800;
    }

    &.active {
        box-shadow: 5px 0px 0px rgba(0, 0, 0, 0.1);
        background: #FFF;
        height: 50px;
        border: 3px solid #FAF0CB;
        border-bottom: 1px solid #FFF;
        transform: translateY(4px);
    }
    
    &.active > span {
        font-weight: 900;
    }

    span {
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 98.1%;
    text-transform: uppercase;
    color: #B78300;
    transition: 0.4s;
    text-align: center;
  }
`
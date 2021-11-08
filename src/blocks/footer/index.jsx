import SocialLinks from "../../components/SocialLink";
import {FooterMain, Text, TextPrivacy,Underline} from "./FooterStyled";
import logo from '../../images/hunter_logo.png';
import hunterdogeBook from '../../images/hunterdoge_book.png';
import {Button, Link, Stack, Typography } from "@mui/material";
import { Box} from "@mui/system";

const Footer = () => {
  return(
    <FooterMain>
      <div className="container">
        <Stack direction="row" sx={{position: 'relative'}}>
          <Box sx={{mr: 30}}>
            <Stack direction="row" sx={{mb: 4}}>
              <Box component='img' src={logo}
                sx={{
                  height: '94px',
                  width: '94px',
                }}/>
              <Box component='h2'
                sx={{
                  fontSize: 58,
                  ml: 4,
                  color: '#fff'
                }}
              >
                HunterDoge
              </Box>
            </Stack>
            <SocialLinks/>
          </Box>
          <Stack sx={{mr: 24, gap: 4}}>
            <Text >
              Quick links
            </Text>
            
            <Link href="#">
              All Tokens
            </Link>
            <Link href="#">
              All Pre-Sales
            </Link>
            
          </Stack>
         
          <Stack sx={{mr: 37, gap: 4}}>
            <Text>
              Documents
            </Text>
            <Link href="#">
              Whitepaper
            </Link>
            <Link href="#">
              Tech paper
            </Link>
          </Stack>
          <Stack sx={{gap: 4}}>
            <Text>
              Contact
            </Text>
            <Typography sx={{fontSize: 19, color: '#fff', fontWeight: 500}}>
              info@hunterdoge.com
            </Typography >
            <Button variant="yellow">
              Submit your Coin
            </Button>
          </Stack>
          <Box component="img" src={hunterdogeBook}
            sx={{
              position: 'absolute',
              right: -40,
              top: 60
            }}
          />
        </Stack>
        
      </div>
      
    </FooterMain>
    
  )
}

export default Footer;
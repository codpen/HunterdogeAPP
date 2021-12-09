import { Stack } from '@mui/material';
import { Box, width } from '@mui/system';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PromotedPreSales from '../components/promotedPresales';
import PopularTokens from '../components/popularTokens';
import PromotedSpots from '../components/promotedSpots';
import News from '../components/promotedPresales/news';
import PopularPreSales from '../components/popularPreSales';
import Menu from '../blocks/menu';
import CheckLiguidity from '../components/checkLiquidity';
import QuickFilter from '../components/quickFilter';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { SHEET_ID_BANNER } from "../constants";
import { useGoogleSheet } from '../hooks/useGoogleSheet';

import Paws from '../images/paws_bg.svg';
import Loupe from '../images/loupe_bg.svg';
import Bow from '../images/bow_bg.svg';
import Footer from '../blocks/footer';

const HomePage = () => {
	const mobileMatches = useMediaQuery('(max-width:600px)');
	const { data } = useGoogleSheet(SHEET_ID_BANNER)

	return (
		// <>
		// <Stack direction="row" alignItems="start"
		//   sx={{
		//     mt: 5,
		//     pl: '44px',
		//     pr: '51px',
		//     backgroundImage: `url(${Paws}), url(${Loupe}), url(${Bow})`,
		//     backgroundRepeat: 'no-repeat',
		//     // backgroundSize:'100% 100%', 
		//     backgroundPosition:'top 130px left 330px, top 130px right 340px, top 950px left 315px',       
		//   }}
		//   >

		//   <Menu/>

		<Box
			sx={{
				mx: mobileMatches ? '0px' : '65px',
				mt: mobileMatches ? '60px' : '0',
				display: 'flex',
				flexWrap: 'wrap',
				width: mobileMatches ? '100%' : '1037px',
				justifyContent: 'center'
			}}>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={6}
			>
				<CheckLiguidity />
				{
					mobileMatches &&
					<Link_ target="_blank" href={data[0]?.Link_Website}>
						<Banner url={data[0]?.Link_Banner} />
					</Link_>
				}
				<QuickFilter />
				{
					mobileMatches &&
					<Link_ target="_blank" href={data[1]?.Link_Website}>
						<Banner url={data[1]?.Link_Banner} />
					</Link_>
				}
			</Stack>
			<PopularTokens />
			{
				mobileMatches &&
				<Link_ margin={'20px 0px 0px 0px'} target="_blank" href={data[2]?.Link_Website}>
					<Banner url={data[2]?.Link_Banner} />
				</Link_>
			}
			<PopularPreSales />
			{
				mobileMatches &&
				<Link_ margin={'20px 0px 0px 0px'} target="_blank" href={data[3]?.Link_Website}>
					<Banner url={data[3]?.Link_Banner} />
				</Link_>
			}
		</Box>

		//   <Stack>
		//     <PromotedPreSales/>
		//     <PromotedSpots/>
		//     <News/>
		//   </Stack>


		// </Stack>
		// </>
	)
}

export default HomePage;


const Banner = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100px;
  background-image: url(${({ url }) => url});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
const Link_ = styled.a`
  margin: ${({margin}) => margin || 'inherit'};
  display: block;
  width: 100%;
  max-width: 900px;;
`
import React, { useState, useEffect } from 'react'
import { Stack } from '@mui/material';
import AllTokensTable from '../components/AlltokensTable';
import PopularPreSales from '../components/popularPreSales';
import PromotedPreSales from '../components/promotedPresales';
import SearchOrFilter from '../components/searchOrFilter';
import News from '../components/promotedPresales/news';
import { isMember } from '../connection/functions';
import { useWeb3React } from "@web3-react/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";

const AllTokens = () => {
	// const { account } = useWeb3React()
	const { account, chainId } = useWallet();
	const [checkMember, setCheckMember] = useState(false)
	useEffect(() => {
		const getIsMember = async () => {
			const is_member = await isMember(account)
			setCheckMember(is_member)
		}
		if (account) getIsMember()
		else setCheckMember(false)
	}, [account])

	return (
		// <Stack direction="row" alignItems="start"
		// sx={{
		//   mt: 5,
		//   pl: '44px',
		//   pr: '51px',
		//   // backgroundImage: `url(${Paws}), url(${Loupe}), url(${Bow})`,
		//   backgroundRepeat: 'no-repeat', 
		//   backgroundPosition:'top 130px left 330px, top 130px right 340px, top 950px left 315px',       
		// }}
		// >
		//   <Menu/>
		<Stack sx={{ ml: '60px' }}>
			{checkMember && <SearchOrFilter />}
			{/* <SearchOrFilter /> */}
			<AllTokensTable />
			<Stack direction="row" alignItems="center" sx={{ gap: 8 }}>
				<PopularPreSales />
				{/* <News/> */}
			</Stack>
		</Stack>
		//   {/* <Stack>
		//     <PromotedPreSales/>

		//   </Stack> */}
		// {/* </Stack> */}
	)
}

export default AllTokens;
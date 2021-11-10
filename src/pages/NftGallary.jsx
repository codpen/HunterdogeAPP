import React from 'react';
import CardNft from "../components/card";
import {NftContainer, NftTitle, NftWrapper} from '../components/common/pagesStyles'

import nft_1 from '../images/NFT/1. NFT_HunterChasingHotDog(e)s.gif';
import nft_2 from '../images/NFT/2. NFT_HunterLostInSpace.gif';
import nft_3 from '../images/NFT/3. NFT_HunterReadyForTheRace.gif';

const data = [nft_1, nft_2, nft_3]

const NftGallery = () => {
    return (
        <div>
            <NftTitle>Hunter’s nfts</NftTitle>
            <NftContainer>
                {data.map((value, idx) => (
                    <NftWrapper key={idx}>
                        <CardNft image={value}/>
                    </NftWrapper>
                ))}
            </NftContainer>
            {/*<Pagination count={56}/>*/}
        </div>
    );
};

export default NftGallery;

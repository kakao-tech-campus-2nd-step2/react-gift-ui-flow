import styled from '@emotion/styled';
import { useState } from 'react';

import {Button} from "@/components/common/Button"
import {RankingGoodsItems} from "@/components/common/GoodsItem/Ranking"
import {Grid} from "@/components/common/layouts/Grid"

import {itemList} from "./Items"


export const ItemList = () =>{

  const [All, setAll] = useState(false);

  const handleToggleShowAll = () => {
    setAll(!All);
  };

  const itemsToShow = All ? itemList : itemList.slice(0, 6);

  return(
    <Wrapper>
      <Grid columns={{initial: 6}} gap={16}>  
      {itemsToShow.map((item, index) => (
          <RankingGoodsItems
            key={index}
            rankingIndex={index + 1}
            imageSrc={item.imageSrc}
            title={item.title}
            amount={item.amount}
            subtitle={item.subtitle}
          />
        ))}
      </Grid>
      <TogleButton onClick={handleToggleShowAll}>
        {All? '접기' : '더보기'}
      </TogleButton>
    </Wrapper>
  )

}

export default ItemList
const Wrapper = styled.div`
  width: "100%";
`

const TogleButton = styled(Button)`
width: 800px;
position: relative;
margin: 20px auto;
background-color: white;
border: none;

  &:hover {
    background-color:rgb(174, 174, 174);
    border: none; 
    box-shadow: none; 
    outline: none;
  }

  &:focus {
    border: none;
    box-shadow: none; 
    outline: none;
  }
`

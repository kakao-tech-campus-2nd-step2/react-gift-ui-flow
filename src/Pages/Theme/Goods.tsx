import styled from '@emotion/styled';

import {DefaultGoodsItems} from "@/components/common/GoodsItem/Default"
import {itemList} from "@/components/common/HomeComponents/Ranking/ItemList/Items"
import {Grid} from "@/components/common/layouts/Grid"


export const ItemList = () =>{

  return(
    <Wrapper>
      <Grid columns={{initial: 6}} gap={16}>  
      {itemList.map((item) => (
          <DefaultGoodsItems
            imageSrc={item.imageSrc}
            title={item.title}
            amount={item.amount}
            subtitle={item.subtitle}
          />
        ))}
      </Grid>
    </Wrapper>
  )

}

export default ItemList;

const Wrapper = styled.div`
  width: "80%";
`
import { useContext } from "react";
import { RealTimeRankContext } from ".";
import { RankingGoodsItems } from "@/components/common/GoodsItem/Ranking";
import { Grid } from "@/components/common/layouts/Grid";

const Content = () => {
  const { rankData } = useContext(RealTimeRankContext);

  return (
    <Grid columns={6} gap={16}>
      {rankData.map((item, index) => (
        <RankingGoodsItems key={index} {...item} />
      ))}
    </Grid>
  );
};

export default Content;

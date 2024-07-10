import { css } from "@emotion/css";
import { Container } from "../common/layouts/Container";
import RealTimeRankingWrapper from "./RealTimeRankingWrapper";

const RealTimeRanking = () => {
  return (
    <div
      className={css`
        margin-top: 8rem;
      `}
    >
      <Container>
        <RealTimeRankingWrapper>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: 2.5rem;
            `}
          >
            <RealTimeRankingWrapper.Title />
            <RealTimeRankingWrapper.WhoFilter />
            <RealTimeRankingWrapper.PurposeFilter />
            <RealTimeRankingWrapper.Content />
            <div
              className={css`
                width: 24rem;
                margin-inline: auto;
              `}
            >
              <RealTimeRankingWrapper.ExpandBtn />
            </div>
          </div>
        </RealTimeRankingWrapper>
      </Container>
    </div>
  );
};

export default RealTimeRanking;

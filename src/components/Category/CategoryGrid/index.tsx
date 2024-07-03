import { Grid } from "@/components/common/layouts/Grid";
import CategoryItem from "../CategoryItem";
import { Container } from "@/components/common/layouts/Container";
import styled from "@emotion/styled";

const index = () => {
  return (
    <Container>
      <StyledCategoryGridSection>
        <Grid columns={6} gap={48}>
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
          <CategoryItem categoryName="생일" />
        </Grid>
      </StyledCategoryGridSection>
    </Container>
  );
};

const StyledCategoryGridSection = styled.section`
  padding: 6rem 0;
`;

export default index;

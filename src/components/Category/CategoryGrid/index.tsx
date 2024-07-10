import { Grid } from "@/components/common/layouts/Grid";
import CategoryItem from "../CategoryItem";
import { Container } from "@/components/common/layouts/Container";
import styled from "@emotion/styled";
import CATEGORY from "@/constants/category";

const index = () => {
  return (
    <Container>
      <StyledCategoryGridSection>
        <Grid columns={6} gap={48}>
          {CATEGORY.map(({ imageSrc, name, themeKey }, index) => (
            <CategoryItem
              key={`${index}-${name}-${themeKey}`}
              categoryName={name}
              imageSrc={imageSrc}
              themeKey={themeKey}
            />
          ))}
        </Grid>
      </StyledCategoryGridSection>
    </Container>
  );
};

const StyledCategoryGridSection = styled.section`
  padding: 6rem 0;
`;

export default index;

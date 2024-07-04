import { getThemeDetail } from "@/api";
import { Product } from "@/model/Product";
import { useEffect, useState } from "react";
import { Grid } from "../components/common/layouts/Grid/index";
import { Container } from "@/components/common/layouts/Container";
import { DefaultGoodsItems } from "@/components/common/GoodsItem/Default";
import ThemeBanner from "@/components/common/Banner/ThemeBanner";
import { css } from "@emotion/css";

const ThemeDetail = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    getThemeDetail().then((data) => setProduct(data));
  }, []);

  return (
    <>
      <ThemeBanner />
      <div
        className={css`
          margin-top: 2rem;
        `}
      >
        <Container>
          <Grid columns={4} gap={32}>
            {product?.map((product) => (
              <DefaultGoodsItems key={product.title} {...product} />
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ThemeDetail;

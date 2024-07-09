export interface CategoryItem {
  id: number;
  name: string;
  image: string;
}

export type Product = {
  id: number;
  subtitle: string;
  title: string;
  price: number;
  image: string;
};

export type FilterCategory = '전체' | '여성이' | '남성이' | '청소년이';
export type FilterSubCategory = '받고 싶어한' | '많이 선물한' | '위시로 받은';
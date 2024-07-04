import styled from "@emotion/styled";
import React from "react";

import { breakpoints } from "@/styles/variants";

const DetailElements = [
  { detailName: "want", title: "받고 싶어한" },
  { detailName: "most", title: "많이 선물한" },
  { detailName: "wish", title: "위시로 받은" },
];

type Prop = {
  detail: string;
  setDetail: React.Dispatch<React.SetStateAction<string>>;
};

type ElementProp = {
  title: string;
  detailName: string;
  isSelect?: boolean;
};

const DetailFilter: React.FC<Prop> = ({ detail, setDetail }) => {
  const DetailElement: React.FC<ElementProp> = ({ detailName, title, isSelect = false }) => {
    const handleClick = () => {
      setDetail(detailName);
    };

    return (
      <div>
        {isSelect ? (
          <SelectButton onClick={handleClick}>{title}</SelectButton>
        ) : (
          <StyledButton onClick={handleClick}>{title}</StyledButton>
        )}
      </div>
    );
  };

  return (
    <Wrapper>
      {DetailElements.map((element, index) => (
        <DetailElement
          detailName={element.detailName}
          title={element.title}
          isSelect={detail === element.detailName}
          key={index}
        />
      ))}
    </Wrapper>
  );
};
export default DetailFilter;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(230, 241, 255);

  border-radius: 12px;

  @media screen and (max-width: ${breakpoints.sm}) {
    border-radius: 8px;
  }
`;

const StyledButton = styled.button`
  color: rgba(70, 132, 233, 0.7);
  font-weight: 400;
  border: 0;
  outline: 0;
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;

  padding: 20px 30px;
  font-size: 22px;
  line-height: 22px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 13px 20px;
    font-size: 16px;
    line-height: 16px;
  }
`;

const SelectButton = styled(StyledButton)`
  color: rgb(70, 132, 233);
  font-weight: 700;
`;

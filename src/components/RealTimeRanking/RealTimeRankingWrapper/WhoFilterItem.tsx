import Icon from "@/components/common/GoodsItem/Icon";
import styled from "@emotion/styled";

interface WhoFilterItemProps {
  target: string;
  selected: string;
  onClick: (target: string) => void;
}

const WhoFilterItem = ({ target, onClick, selected }: WhoFilterItemProps) => {
  const isSelected = target === selected;
  return (
    <StyledWhoFilterItem
      onClick={() => onClick(target)}
      $isSelected={isSelected}
    >
      <Icon text={target}>
        <WhoFilterImage $isSelected={isSelected}>ALL</WhoFilterImage>
      </Icon>
    </StyledWhoFilterItem>
  );
};

interface WhoFilterStyleProps {
  $isSelected: boolean;
}

const StyledWhoFilterItem = styled.li<WhoFilterStyleProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? "#77A5F1" : "")};
`;

const WhoFilterImage = styled.div<WhoFilterStyleProps>`
  width: 65px;
  height: 65px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
  color: ${(props) => (props.$isSelected ? "white" : "#77A5F1")};
  background-color: ${(props) => (props.$isSelected ? "#77A5F1" : "#E6F1FF")};
`;

export default WhoFilterItem;

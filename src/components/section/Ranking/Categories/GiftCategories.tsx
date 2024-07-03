import styled from '@emotion/styled';

import { breakpoints, colors } from '@/styles/variants';

export const GiftCategories = () => {
  return (
    <Wrapper>
      <Button>받고 싶어한</Button>
      <Button>많이 선물한</Button>
      <Button>위시로 받은</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid rgba(70, 132, 233, 0.1)',
  backgroundColor: colors.skyBlue,
  borderRadius: '8px',
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    borderRadius: '12px',
  },
});

const Button = styled.button({
  padding: '13px 20px',
  fontSize: '16px',
  lineHeight: '16px',
  color: colors.blue,
  fontWeight: '700',
  transition: 'color 200ms ease 0s, font-weight 200ms ease 0s',
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    padding: '20px 30px',
    fontSize: '22px',
    lineHeight: '22px',
  },
});

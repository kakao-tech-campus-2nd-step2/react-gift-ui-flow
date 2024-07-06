import BreakpointContainer
  from '@components/atoms/container/ResponsiveContainer.styles';
import Container from '@components/atoms/container/Container';
import {
  ResponsiveContainerProps,
} from '@/types';

function ResponsiveContainer({
  sizeDefault, sizeXS, sizeSm, sizeMd, sizeLg, ...rest
}: ResponsiveContainerProps) {
  return (
    <BreakpointContainer
      sizeDefault={sizeDefault}
      sizeXS={sizeXS}
      sizeSm={sizeSm}
      sizeMd={sizeMd}
      sizeLg={sizeLg}
    >
      <Container
        elementSize={{
          width: '100%',
          height: '100%',
        }}
        {...rest}
      />
    </BreakpointContainer>
  );
}

export default ResponsiveContainer;

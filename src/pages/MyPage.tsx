import Container from '@components/atoms/container/Container';

function MyPage() {
  return (
    <Container
      elementSize="full-width"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Container padding="80px 0px 120px" elementSize="full-width">
        <h1>test</h1>
      </Container>
    </Container>
  );
}

export default MyPage;

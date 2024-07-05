import { Container } from '@/components/common/layouts/Container';

const Footer = () => {
  return (
    <Container maxWidth="1200px">
      <p>카카오톡 선물하기</p>
      <p>(주)카카오 대표이사 : 정신아</p>
      <p>주소 : 제주특별자치도 제주시 첨단로 242</p>
      <p>사업자등록번호 : 120-81-47521</p>
      <p>통신판매업신고번호 : 제2015 - 제주아라 - 0032호</p>
      <p>호스팅 사업자 : (주)카카오</p>
      <p>구매안전서비스 : 가입사실확인</p>
      <p>
        이메일 : <a href="mailto:cs.gift@kakaocorp.com">cs.gift@kakaocorp.com</a>
      </p>
      <p>고객센터 : 1544-2431 (통화료 발생) 평일 09:00~18:00 (※ 점심시간 12:00~13:00)</p>
      <p>© kakao Corp. All rights reserved</p>
      <p>
        (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다. 개별
        판매자가 판매하는 상품에 대해 (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며
        상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
      </p>
    </Container>
  );
};

export default Footer;

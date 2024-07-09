import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

interface Props {
    label: string;
    title: string;
    description: string;
    backgroundColor: string;
}

export default ({ label, title, description, backgroundColor }: Props) => {
    return (
        <Container
            className={css`
                background-color: ${backgroundColor};
                padding: 40px 0;
            `}
        >
            <LabelDiv>{label}</LabelDiv>
            <TitleDiv>{title}</TitleDiv>
            <DiscriptionDiv>{description}</DiscriptionDiv>
        </Container>
    );
};

const LabelDiv = styled.div({
    color: '#c8c8c8',
    fontWeight: 'bold',
    fontSize: '20px',
});
const TitleDiv = styled.div({
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: '30px',
    marginTop: '15px',
});
const DiscriptionDiv = styled.div({
    color: '#c8c8c8',
    fontSize: '24px',
    marginTop: '15px',
});

import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

type Props = {
    theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
    size?: 'large' | 'small' | 'responsive';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ ...props }: Props) => {
    return <Wrapper {...props} />;
};

const Wrapper = styled.button<Pick<Props, 'theme' | 'size'>>(
    {
        width: '100%',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'background-color 200ms',
    },
    ({ size = 'responsive' }) => {
        const largeStyle = {
            height: '60px',
            fontSize: '16px',
        };

        const smallStyle = {
            height: '40px',
            fontSize: '15px',
        };
        if (size === 'large') {
            return largeStyle;
        }

        if (size === 'small') {
            return smallStyle;
        }

        return {
            ...smallStyle,
            [`@media screen and (min-width:${breakpoints.sm})`]: {
                ...largeStyle,
            },
        };
    },
    ({ theme = 'kakao' }) => {
        if (theme === 'outline') {
            return {
                boxShadow: '0 0 0 1px #ccc inset',
                color: '#999',

                '&:hover': {
                    backgroundColor: '#f8f8f8',
                },
            };
        }

        if (theme === 'black') {
            return {
                color: '#fff',
                backgroundColor: '#111',

                '&:hover': {
                    backgroundColor: '#222',
                },
            };
        }

        if (theme === 'lightGray') {
            return {
                color: '#111',
                backgroundColor: '#f0f0f0',

                '&:hover': {
                    backgroundColor: '#ebebeb',
                },
            };
        }

        if (theme === 'darkGray') {
            return {
                color: '#fff',
                backgroundColor: '#444',

                '&:hover': {
                    backgroundColor: '#555',
                },
            };
        }

        return {
            color: '#111',
            backgroundColor: '#fee500',

            '&:hover': {
                backgroundColor: '#fada0a',
            },
        };
    },
);

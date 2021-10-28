import styled from 'styled-components';

export const theme = {
  COLORS: {
    'font-color': '#4D4D4D',
    'red-200': '#DB054A',
    'red-100': '#FEF3F8',
    'gray-50': '#F8F8F9',
    'gray-100': '#CFCFCF',
    'gray-200': '#888888',
    'blue-100': '#12a9b8',
    'purple-100': '#FDF3FD',
    'purple-200': '#6E2C9B',
  },

  WIDTHS: {
    CUR: window.innerWidth,
    HEIGHT: window.innerHeight,
    S: window.screen.width * 0.5,
    M: window.screen.width * 0.6,
    L: window.screen.width * 0.8,
    XL: window.screen.width,
    XXL: window.screen.width * 1.2,
  },

  MIXINS: {
    FLEX: props => {
      return `display:flex; justify-content:${
        props?.content || 'center'
      }; align-items:${props?.item || 'center'}; flex-direction:${
        props?.direction || 'row'
      };`;
    },
    MEMO: `letter-spacing: -1px;
    margin: 0 auto;
    padding-bottom:.1rem;
    white-space: nowrap;
    position: absolute;
    bottom: 0;
    font-size: 0.4rem;`,
  },
};

const BasicText = styled.span`
  margin: 0.3rem;
`;

export const BasicContainer = styled.div`
  display: flex;
`;

export const BasicButton = styled.button`
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const Title = styled(BasicText)`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Message = styled(BasicText)`
  display: inline-block;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.COLORS['gray-200']};
`;
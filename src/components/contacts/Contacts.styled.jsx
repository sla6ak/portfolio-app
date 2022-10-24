import styled from '@emotion/styled';

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({ sizeSVG }) => (sizeSVG > 25 ? '10px' : '15px')};
`;
export const NumberT = styled.div`
    margin-left: 5px;
    color: #3d3d3d;
    font-size: ${({ sizeSVG }) => (sizeSVG > 25 ? '20px' : '15px')};
`;

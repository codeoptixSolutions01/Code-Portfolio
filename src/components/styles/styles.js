'use client'

import styled from 'styled-components';

export const StyledTypography = styled.div`
  font-size: 36px;
  color: #000000;
    font-family: "Lexend";
    font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledParagraph = styled.p`
font-size: 24px;
font-family: Lexend;
font-weight: 400;
letter-spacing: 0em;
text-align: justify;
color:black;


  @media (max-width: 768px) {
    font-size: 18px;
    text-align:justify;
  }
`;
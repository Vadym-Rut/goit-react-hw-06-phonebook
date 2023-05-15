import styled from '@emotion/styled';

export const Container = styled.div`
    height: 100vh;
    font-size: 18px;
    color: #010101;
    padding: 50px;

    input {
      font-size: 18px;
      border-radius: 4px  
    }

    label {
        font-size: 18px;
    }

    button {
        cursor: pointer;
    }

    p {
       font-size: 20px;
       max-width: 340px; 
       text-align: left;
       line-height: 1.5;
    }
`;

export const TitleMain = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin: 0;
    padding-bottom: 15px;
`;

export const TitleSec = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin: 0;
    padding: 30px 0 15px 0;
`;
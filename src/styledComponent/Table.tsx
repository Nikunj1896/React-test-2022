import styled from "styled-components";

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: whitesmoke;
  width: 1000px;
  border-radius: 10px;
  tr {
    border-bottom: 1px solid #dddddd;
    font-weight: 600;
    :first-child {
      background-color: #4a6adc !important;
      color: #ffffff;
    }
    :nth-of-type(odd) {
      background-color: #f0f3fc;
    }
    :last-child {
      border-bottom: unset;
    }
  }

  td {
    padding: 14px;
    .points {
      font-weight: 500 !important;
      color: #9f9f9f;
    }
  }

  @media (max-width: 768px) {
    border-radius: 0px;
    tr {
      :first-child {
        background-color: unset !important;
        color: inherit;
      }
    }
    td {
      .points {
        display: none;
      }
    }
  }
`;

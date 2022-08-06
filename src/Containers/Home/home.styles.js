import styled from "styled-components";

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardOverview = styled.div`
  width: 100%;
  max-width: 360px;
  background-color: rgb(255, 255, 255);
  border: 2px solid #D8D8D8;
  border-radius: 6px;
  padding: 24px;
  margin: 24px;
`;

export const ImageStyle = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const Text = styled.span`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-weight:  ${(props) => (props.isBold ? 600: 400)};
  cursor: ${(props) => (props.cursor ? props.cursor: '')};
  padding: ${(props) => (props.padding ? props.padding: '')};
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : "")}
`;


export const Flex = styled.div`
  display: flex;
  justify-content:${(props) => (props.justifyContent ? props.justifyContent :'center')};
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding: '')};
  margin: ${(props) => (props.margin ? props.margin: '')};
`;

export const Button = styled.div`
  color: #fff;
  background-color: #1890ff;
  border-color:  #1890ff;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  margin: 8px;
  border-radius: 4px;
`
export const StatementView = styled.div`
width: 100%;
max-width: 360px;
`;

export const Date = styled.div` 

`
export const Description = styled.div` 

`
export const Amount = styled.div` 

`
export const Balance = styled.div` 

`

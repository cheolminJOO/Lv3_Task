import styled from 'styled-components'
import { NumericFormat } from 'react-number-format'

export const ButtonWrapper = styled.div`
  margin: 10px 0px;
  
`
export const AllButtonWrapper = styled.div`
  width : 900px;
  display: flex;
  flex-direction: column;

`

export const LargePrimaryButton = styled.button`
  width : 200px;
  height : 50px;
  color : ${((props) => props.color ? props.color : "black" )};
 
  background-color: white;
  border: 3px solid ${((props) => props.bordercolor ? props.bordercolor : "black")};
  border-radius: 20px;
  margin: 0px 10px;
  font-weight: bolder;
  cursor: pointer;
  &:active {
    background-color: gray;
  }

`

export const Medium = styled.button`
  width : 100px;
  height : 50px;

  
  background-color : ${(props) => props.backgroundColor ? props.backgroundColor : "black" };
  
  color : ${(props) => props.color ? props.color : "white"};
  font-weight: bolder;
  border: 1px white solid;
  border-radius: 20px;
  margin : 0px 10px;
  font-weight: 500;
  cursor: pointer;
  &:active {
    background-color: gray;
  }
  

`

export const Small = styled.button`
  width : 80px;
  height : 40px;
  background-color : ${(props) => props.backgroundColor ? props.backgroundColor : "black"};
  color : ${(props) => props.color ? props.color : "white"};
  border: 1px white solid;
  border-radius: 20px;
  cursor: pointer;
  &:active {
    background-color: gray;
  }
`

export const SelectWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 150px;
  overflow: hidden;
`

export const SelectWrapper2 = styled.div`
  display: flex;
  width: 400px;
  height: 150px;

`

export const SelectWrapperDiv = styled.div`
  display: flex;
  width : 900px;
  border : 2px solid gray;
  width : 900px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 100%;
  height: 900px;
`

export const PriceInputStyle = styled(NumericFormat)`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  margin: 0px 10px;

`
export const NameInputStyle = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  margin: 0px 10px;
`

export const ModalWrapper = styled.div`
  width : 900px; 
`

export const InputWrapper = styled.div`
  width: 900px;
`
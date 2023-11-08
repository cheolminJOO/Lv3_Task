import React, { useState } from 'react'
import * as S from './shared/ButtonStyle'
import { NumericFormat } from 'react-number-format'; // 콤마 생기게
import Select from 'react-select';
import { customStyles } from './shared/SelectStyle';
import { Portal } from 'react-portal';
import FirstModal from './modal/FirstModal';
import SecondModal from './modal/SecondModal';

const options = [
  { value: 'react', label: 'React😎', },
  { value: 'java', label: 'Java😁' },
  { value: 'spring', label: 'Spring🔥', isDisabled : true},
  { value: 'python', label: 'python👻' }
];

const options2 = [
  { value: 'react', label: 'React😎', isDisabled : true},
  { value: 'java', label: 'Java😁' },
  { value: 'spring', label: 'Spring🔥'},
  { value: 'python', label: 'python👻' }
];


export default function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [isOpenFirstModal, setIsOpenFirstModal] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleChange2 = (selectedOption2) => {
    setSelectedOption2(selectedOption2)
  }
  
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }
  const onClickLargePrimaryBtn = () => {
    alert("버튼을 만들어보자 !")
  }

  const onClickRedBtn = () => {
    prompt("파이팅")

  }

  const onClickSaveBtn = () => {
    const deleteComma = price.replace(/,/g, "")
    if(!name && !price ) {
      return alert("이름과 가격을 적으세요")
    }
    alert(`name : ${name}, price : ${deleteComma}원 `)
  }

  //콤마 제거

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangePrice = (event) => {
    setPrice(event.target.value)

  }

  const firstModalToggle = () => {
    setIsOpenFirstModal((prev) => !prev); //클릭하면 true에서 false로 다시 클릭하면 false에서 true로 바뀌니 이렇게 줘도 무방하다
  };


  const secondModalToggle = () => {
    setIsOpenSecondModal((prev) => !prev);
  };




  return (
    <S.Wrapper>
      <h1>Button & Input & Modal & Select</h1>
      {isOpenFirstModal && (
        <Portal node={document && document.getElementById('modal-root')}>
          <FirstModal onClose={firstModalToggle} />
        </Portal>
      )}

      {isOpenSecondModal && (
        <Portal node={document && document.getElementById('modal-root')}>
          <SecondModal onClose={secondModalToggle} />
        </Portal>
      )} 
      <S.AllButtonWrapper>
        <h2>Button</h2>  
        <S.ButtonWrapper>
          <S.LargePrimaryButton onClick={onClickLargePrimaryBtn}>Large Primary Button </S.LargePrimaryButton>
          <S.Medium>Medium</S.Medium>
          <S.Small>Small</S.Small>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <S.LargePrimaryButton onClick={onClickRedBtn} color = "red" bordercolor = "black">
            Large Nevigate Button
          </S.LargePrimaryButton>
          <S.Medium backgroundColor = "black" color = "red">
            Medium
          </S.Medium>
          <S.Small backgroundColor = "black" color = "red">
          Small
          </S.Small>
        </S.ButtonWrapper>
      </S.AllButtonWrapper>
      <S.InputWrapper>
        <h2>Input</h2>
        <label>이름</label><S.NameInputStyle onChange={onChangeName} />
        <label>가격</label><S.PriceInputStyle onChange={onChangePrice} thousandSeparator={true} prefix={''} /> 
        {/* prefix 처음에 넣을 값 설정, 공백으로 하면 안 생김 */}
        <S.Small color = "white" onClick={onClickSaveBtn}>저장</S.Small>
      </S.InputWrapper>
      <S.ModalWrapper>
        <h2>Modal</h2>
        <S.Medium color = "white" onClick = {firstModalToggle}>open Modal</S.Medium>
        
        <S.LargePrimaryButton onClick = {secondModalToggle}>open modal2</S.LargePrimaryButton>
      </S.ModalWrapper>
      
      <h2>Select</h2>
      <S.SelectWrapperDiv>
        <S.SelectWrapper>
        
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyles}
          />
        </S.SelectWrapper>
        <S.SelectWrapper2>
          <Select
            value={selectedOption2}
            onChange={handleChange2}
            options={options2}
            styles={customStyles}
          />
          </S.SelectWrapper2>
        </S.SelectWrapperDiv>
      
    </S.Wrapper>
  )
}


export const customStyles = { 
  control: () => ({ //provided는 react-select의 기본 스타일이 포함 돼 있다.
    margin : '0px 10px',
    borderRadius : '15px',
    display : 'flex',
    border : '1px solid gray',
    width:300,
    minWidth: 200,
    zIndex: 9999, // 다른 요소 위에 보이도록 설정
    fontSize: "20px",
  
  }),
  option : (provided,state) => ({
    // textAlign : 'center',  //글자 중앙(가로)
    display: 'flex',
    alignItems: 'center', // 수직 가운데 정렬
    justifyContent: 'center', // 수평 가운데 정렬 
    border : '1px solid black',
    width : '280px',
    height : "60px",
    backgroundColor : state.isDisabled ? 'gray' : state.isFocused ? 'red' : 'black',
    borderRadius : "50px",
    color : state.isDisabled ? 'black' : state.isFocused ? "black" : "white",
    margin : "8px 0px",
    fontSize : "20px",
    overflow : 'hidden',
    //isFocused => 마우스 올려놓으면 색깔 달라짐
    //isSelected => 선택된 것 색깔 달라짐
    //이유는 모르겠으나, 태그 안에 style 넣는 방식이랑 똑같다.
    // provided는 초기 설정된 값, 없애면 내가 처음부터 설정 가능

  }),
  menu: (provided) => ({

    width: 300,// 원하는 너비로 설정
    height:200,
    margin : '0px 10px',
    borderRadius : '15px',
  })
};
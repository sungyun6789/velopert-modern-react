import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const { name, nickname } = inputs;    // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {       // event의 약자 - e.target.value는 이벤트가 발생한 target의 value를 가르킨다.
        const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value   // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();  // 여기서 current는 DOM 엘리먼트 객체를 가리킨다.
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
export default InputSample;

/*
JS에서는 특정 DOM을 선택할 때 getElementById, querySelector, DOM Selector함수를 사용하지만
리액트를 사용할 때는 ref 라는 것을 사용한다.
ref를 사용할 때는 useRef라는 Hook 함수를 사용하는데 초기화 버튼을 눌렀을 때 이름 input에 포커스가 잡히도록
useRef 를 사용하여 기능을 구현하는 코드이다.
*/
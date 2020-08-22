import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {       // event의 약자 - e.target.value는 이벤트가 발생한 target의 value를 가르킨다.
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;
import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>} {/* &&기호로 코드 단축시키기, 앞에 값이 참이라면 뒤에 내용을 실행 */}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
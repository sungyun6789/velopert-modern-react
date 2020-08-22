import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {

  return (
    <Wrapper>
      {/*<> Fragment 감싸는 상황에서 사용 가능 </>*/}
      <Hello name="React" color="red" isSpecial />   {/* isSpecial = {true} === inSpecial 이름만 넣어줘도 true랑 같은 의미 */}
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;

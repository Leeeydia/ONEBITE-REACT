import { useState } from "react";
// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. ** 나만의 훅 (custom hook) 직접 만들 수 있다


const HookExam = () => {
  const[input, setInput] = useState("")
  count onChange = (e)=>{
    setInput{e.target.value}
  }
  return [input, onChange]
};

export default HookExam;

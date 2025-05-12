import { useState, useEffect } from "react";

// useEffect(() =>{...}), [] 로 마운트 타이밍을 처리함
const Clock3 = () => {
  // 📌 현재 시간 정보를 담을 상태 변수 date 선언 (초기값은 현재 시간)
  const [date, setDate] = useState(new Date());

  //   useEffect(() => {
  //     setCount(count + 1); // ❌ 의존성 배열 없이 이렇게 쓰면 무한 렌더링
  //   });

  // 함수형에서 마운트 시점 코드는 useEffect(() => {...}, []) 안에 작성한다.
  useEffect(() => {
    // 여기가 마운트 시점에 한 번 실행됨

    // 📌 1초마다 showSigan()을 실행해서 시간을 업데이트하는 타이머 시작
    const timerId = setInterval(() => showSigan(), 1000);

    // 📌 언마운트(컴포넌트가 사라질 때) 타이머 정리하는 함수 반환
    return () => {
      clearInterval(timerId); // 타이머 제거
    };
  }, []); // 여기서 [] 는 의존성 배열인데 아무것도 넣지 않으면 -> 처음 렌더링 시 딱 한번만 실행됨, 그래서 마운트 시점과 같다고 봐도 됨

  // 📌 현재 시간으로 상태(date)를 갱신하는 함수
  const showSigan = () => {
    setDate(new Date()); // 상태가 바뀌면 컴포넌트가 다시 렌더링됨
  };

  return (
    <div>
      <h2>함수형 컴포넌트~~</h2>
      {/* 정적 시간: 상태와 상관없이 컴포넌트가 렌더링된 시점의 고정된 시간 */}
      <h3>정적 시간 : 지금은 {new Date().toLocaleTimeString()}</h3>

      {/* 동적 시간: 상태(date)가 1초마다 바뀌며 갱신되는 실시간 시간 */}
      <h3>동적 시간 : 지금은 {date.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Clock3;

/*
useState를 사용하여 date라는 상태를 만들고,현재 시간을 저장한다

useEffect(() => { ... }, []) 구문을 사용하여 컴포넌트가 "처음 마운트될 때" 실행되는 코드를 작성한다.
- 여기서 setInterval로 1초마다 showSigan() 함수를 호출하여 시간을 갱신함
[] 의존성 배열이 비어있기 때문에 마운트 시점에 딱한번만 실행된다

언마운트(화면에서 사라질 때) 시에는 clearInterval()로 타이머를 제거하여 메모리 누수를 방지한다.

JSX에서는 this를 사용하지 않고 date 상태를 직접 참조함

동적 시간은 useState를 통해 관리되며 정적시간은 렌더링 시 고정되 new Date() 값을 보여준다.

*/

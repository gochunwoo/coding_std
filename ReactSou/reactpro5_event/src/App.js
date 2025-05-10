import React, { useState } from "react";
import Subject from "./mydir/Subject";
import Subject2 from "./mydir/Subject2";

const App = () => {
  // 메인 컴포넌트
  // state 초기화, 수정함수가 필요없으면 적지 않아도됨
  const [subject] = useState({
    title: "웹문서",
    subtitle: "리액트 나이스",
  });

  const [friends] = useState([
    { bun: 1, irum: "장비", nai: 20 },
    { bun: 2, irum: "관우", nai: 30 },
  ]);

  // 이벤트 처리함수
  const handleChangeComponen = () => {
    friends.forEach((friend) => {
      console.log(
        `${friend.bun}번, 이름은 ${friend.irum}, 나이는 ${friend.nai}살.`
      );
    });
  };

  return (
    <div>
      <h2>이벤트 연습용</h2>
      <hr />
      <Subject
        title={subject.title}
        subtitle={subject.subtitle}
        changComponet={handleChangeComponen}
      />
      <hr />
      <Subject2
        subtitle={subject.subtitle}
        friends={friends}
        changComponet={handleChangeComponen}
      />
      <button onClick={handleChangeComponen}>버튼클릭</button>
    </div>
  );
};

export default App;

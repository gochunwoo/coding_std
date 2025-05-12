import { useState, useEffect } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    irum: "",
    nai: "",
    menu: "파전",
  });

  const dataChange = (e) => {
    const name = e.target.name; // form tag 내의 여러 tag의 name 속성 얻기
    const value = e.target.value;
    console.log({ [name]: value });
    console.log({ ...formData });

    setFormData({
      ...formData, // formData 객체는 모든 키:값 쌍을 복사해 새로운 객체를 생성
      [name]: value, // form tag 내의 변경된 name에서 가져온 값으로 해당 필드만 갱신함
    });
  };

  const dataSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 막기
    const { nai } = formData;
    // 입력자료 오류검사, 나이가 숫자인지 boolean으로 확인
    if (!Number(nai) || isNaN(Number(nai))) {
      alert("숫자랑 문자 몰라?");
    }
  };
  return (
    <>
      <h3>
        안녕(함수형컴포넌트) 나의 이름은 {formData.irum}, 이고 나이는
        {formData.nai}살 이고 {formData.menu} 에 막걸리 한잔하고싶어
      </h3>
      <form onSubmit={dataSubmit}>
        이름 입력 : <input type="text" name="irum" onChange={dataChange} />
        <br />
        나이 입력 : <input type="text" name="nai" onChange={dataChange} />
        <br />
        야식 입력 :
        <select name="menu" value={formData.menu} onChange={dataChange}>
          <option value="치킨">치킨</option>
          <option value="피자">피자</option>
          <option value="초밥">초밥</option>
        </select>
        <br />
        <br />
        <button type="submit">자료검사</button>
      </form>
    </>
  );
}

export default MyForm;

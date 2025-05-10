function Subject2(props) {
  const lists = [];
  const datas = props.friends;
  let i = 0;
  while (i < datas.length) {
    lists.push(
      <h5 key={datas[i].bun}>
        {datas[i].irum}의 나이는 {datas[i].nai}살
      </h5>
    );
    i = i + 1;
  }
  return (
    <div>
      <h2>자식 컴포넌트함수</h2>
      <h2>글 기사 내용 : {props.subtitle}</h2>
      {lists}
      <br />
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          props.changComponet();
        }}
      >
        {props.subtitle}
      </a>
    </div>
  );
}

export default Subject2;

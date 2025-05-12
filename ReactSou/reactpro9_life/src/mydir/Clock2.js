import React from "react";

class Clock2 extends React.Component {
  constructor(props) {
    // 컴포넌트 생성자 메서드, 컴포넌트가 생성되면 가장 먼저 실행되는 메서드
    super(props);
    this.state = { date: new Date() }; // 지정할수있는곳은 생성자뿐
  }
  // 컴포넌트디드마운트 는 컴포넌트가 마운트된 직후(DOM 트리에 삽입된 직후) 호출됩니다
  // DOM 노드를 필요로 하는 초기화 작업은 이 메서드에서 수행해야합니다
  // 외부 API 로부터 데이터를 가져와야 한다면, 네크워크 요청을 시작하기에 적절한 위치

  // 컴포넌트가 처음 마운트된 직후 딱 한 번  실행되는 부수효과(side-effect) 를 처리하는 데 사용합니다
  // 조건 없이 상태(state)를 설정하면 무한루프가 발생할수 있으므로 주의
  // 최신 코드에서는 클래스 컴포넌트보다는 함수형 컴포넌트 + Hooks (useEffect) 를 사용하는 것이 권장됩니다
  componentDidMount() {
    // 컴포넌트가 마운트됨, 즉 컴포넌트의 첫번째 렌더링이 마치면 호출되는 메소드다
    // 일정한 시간 간격을 두고 반복해서 코드를 실행(시간표시) - setInterval()
    this.timerId = setInterval(() => this.showSigna(), 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 화면에서 사랒지기 직전에 호출된다,
    clearInterval(this.timerId); // setInterval 함수 수행 종료
  }

  showSigna() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>클래스 컴포넌트2~~</h2>
        <h3>정적 시간 : 지금은 {new Date().toLocaleTimeString()}</h3>
        <h3>동적 시간 : 지금은 {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock2;

/*
정리
리액트에서 마운트란?
컴포넌트가 처음으로 화면DOM 에 추가되는 과정을 뜻합니다.
이때 실행되는 함수가 대표적으로 componentDidMount() 입니다
함수형에서는 useEffect(() => {}, []) 가 이역할을 함

componentDidMount()는 컴포넌트가 화면에 나타나고 나서 바로 실행돼요.

화면에 실제로 나타나기 전엔 이 함수는 실행되지 않아요.

화면에 나왔다는 건, 브라우저가 div, h1 같은 태그를 진짜로 DOM에 붙였다는 뜻이에요.
API 요청하기 (예: 서버에서 데이터 불러오기)

외부 라이브러리 연결하기 (차트, 애니메이션 등)

타이머 만들기 (setTimeout, setInterval)

DOM 직접 조작 (ex. document.getElementById())
*/

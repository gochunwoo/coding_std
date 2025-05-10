import { Component } from "react";

class Navdata extends Component {
  render() {
    return (
      <ul>
        <strong>{this.props.msg}</strong>
        <li>
          <a href="http://www.naver.com">네이버</a>
        </li>
        <li>
          <a href="http://www.daum.net">다음</a>
        </li>
        <li>
          <a href="../abc.html">abc파일 문서</a>
        </li>
      </ul>
    );
  }
}

export default Navdata;

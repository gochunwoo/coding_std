"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// useEffect(() =>{...}), [] 로 마운트 타이밍을 처리함
var Clock3 = function Clock3() {
  var _useState = (0, _react.useState)(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1]; //   useEffect(() => {
  //     setCount(count + 1); // ❌ 의존성 배열 없이 이렇게 쓰면 무한 렌더링
  //   });
  // 함수형에서 마운트 시점 코드는 useEffect(() => {...}, []) 안에 작성한다.


  (0, _react.useEffect)(function () {
    // 여기가 마운트 시점에 한 번 실행됨
    var timerId = setInterval(function () {
      return showSigan();
    }, 1000);
    return function () {
      clearInterval(timerId);
    };
  }, []); // 여기서 [] 는 의존성 배열인데 아무것도 넣지 않으면 -> 처음렌더링 시 딱 한번만실행됨 그래서 마운트 시점과 같다고 봐도됨

  var showSigan = function showSigan() {
    setDate(new Date());
  };
};

var _default = Clock3;
exports["default"] = _default;
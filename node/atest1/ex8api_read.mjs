import https from "https";
import { EventEmitter } from "events";

const url = "https://jsonplaceholder.typicode.com/posts/1";
const apiEvent = new EventEmitter();

// 이벤트 리스너 등록
apiEvent.on("apiResult", (result) => {
  if (result.success) {
    console.log("API 결과:", result.data);
  } else {
    console.error("에러:", result.error);
  }
});

function readApi() {
  https
    .get(url, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        try {
          const json = JSON.parse(data);
          apiEvent.emit("apiResult", { success: true, data: json });
        } catch (err) {
          apiEvent.emit("apiResult", { success: false, error: err });
        }
      });
      resp.on("error", (err) => {
        apiEvent.emit("apiResult", { success: false, error: err });
      });
    })
    .on("error", (err) => {
      apiEvent.emit("apiResult", { success: false, error: err });
    });
}

readApi();

import { promises } from "fs";

const ss = "텍스트 문서를 작성합니다. 자성자는 유비입니다.";

async function processFile() {
  try {
    console.log("처리1");
    await promises.writeFile("ex3write.txt", ss);
    const data = await promises.readFile("ex3write.txt", "utf-8");
    console.log(data.toString());
    console.log("처리2");
  } catch (err) {
    console.log(err);
  }
}

processFile();

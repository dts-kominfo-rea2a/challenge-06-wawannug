// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  let result = [];

  fs.readFile(
    file1, { encoding: "utf8" }, (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }
      const resultData = JSON.parse(data);
      result.push(resultData.message.split(" ")[1]);
    }
  )

  fs.readFile(
    file2, { encoding: "utf8" }, (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }
      const resultData = JSON.parse(data);
      result.push(resultData[0].message.split(" ")[1]);
    }
  )

  fs.readFile(
    file3, { encoding: "utf8" }, (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }

      const resultData = JSON.parse(data);
      result.push(resultData[0].data.message.split(" ")[1]);
      fnCallBack(null, result);
    }
  )
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

const passexam = false;

// addEventListener("click", getData());
// промис

// const getData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     passexam ? resolve("Папа подарил 100$.") : reject("Папа не подарил 100$.");

//     throw new Error();
//   }, 5000);
// });

// getData
//   .then((value) => {
//     console.log("попали в then");
//     console.log(getData);
//     console.log(value);
//   })
//   .then((value) => {
//     console.log("попали в then");
//     console.log(getData);
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log("попали в catch");

//     console.log(getData);
//     console.error(value);
//   });

const getData = () => {
  console.log("hey!");

  try {
    console.log("try");

    throw new Error("Kate error");
  } catch (error) {
    console.log("error", error);
  }
};

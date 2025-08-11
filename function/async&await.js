const login = () => {
  console.log("Masukan Nama Dan Akun Anda");
  let username = prompt("Masukan Username");
  let password = prompt("Masukan Password");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Pengecekan Data Login");
      if (username === "admin" && password === "1234") {
        resolve("Login Berhasil");
      } else {
        reject("Login Gagal, Silahkan Coba Lagi");
      }
    }, 1000);
  });
};

function goToHomePage(cek) {
  return Promise.resolve(`Goto Home Page : ${cek}`);
}

login()
  .then((response) => {
    console.log("Validated Data");
    return goToHomePage(response);
  })
  .then((cek) => {
    console.log(cek);
  });

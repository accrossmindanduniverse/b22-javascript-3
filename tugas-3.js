//1.

const kalkulasi = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = num1 + num2
      if (number) {
        resolve(number)
      }else {
        reject(new Error(NaN))
      }
    }, 2000)
  })
}

const handleCallbackForKalkulasi = (data1, data2) => {
  kalkulasi(data1, data2).then((res) => {
    console.log(res)
    console.log(res * 2)
  }).catch((err) => {
    console.log(err)
  })
}

const kalkulasiMain = () => {
  handleCallbackForKalkulasi(4, 5)
}

kalkulasiMain()


//2.

const salam = (greeting) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const str = greeting
      if (str) {
        resolve(str)
      } else {
        reject(new Error ('isi terlebih salam dahulu'))
      }
    }, 3000)
  })
}

const handleCallbackForSalam = (data) => {
  salam(data).then((res) => {
    console.log(res)
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

const salamMain = () => {
  handleCallbackForSalam('hello')
}

salamMain()

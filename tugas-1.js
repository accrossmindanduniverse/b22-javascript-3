const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      }else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

const cekHariKerjaThenCatch = (data) => {
  cekHariKerja(data).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

const cekHariKerjaTryCatch = (data) => {
  try{
    cekHariKerjaThenCatch(data)
  }catch(err) {
    console.log(err)
  }
}

const main = () => {
  cekHariKerjaThenCatch('selasa')
  cekHariKerjaTryCatch('sabtu')
}

main()

//then dan catch
// adalah sebuah kondisi yang akan mengembalikan Boolean, yang mana ketika then akan mengembalikan nilai true, dan catch akan mengembalikan nilai false

//try dan catch
// try dan catch hampir memiliki fungsi yang sama dengan then dan catch, bedanya try dan catch digunakan untuk error handling pada async/await. Pada blok pertama (try) digunakan ketika kondisi bernilai true, dan blok kedua (catch) digunakan pada saat kondisi bernilai false
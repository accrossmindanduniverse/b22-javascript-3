const getMonth = (callback) => {
  setTimeout(() => {
    let error = false
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if(!error) {
      callback(null, month)
    }else {
      callback(new Error('Sorry Data Not Found', []))
    }
  }, 4000)
}

const handleCallback = (errMessage, month) => {
  if (month) {
    month.map((res) => {
      console.log(res)
    })
  } else {
    console.log(errMessage)
  }
}

getMonth(handleCallback)


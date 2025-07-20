/* async tutorials */

function delay(delayTime = 5000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`delaying for ${delayTime}!`)
      /* resolving after delay  */
      resolve()
    }, delayTime)
  })
}

async function time() {
  await delay()

  const time = Date.now()
  if (time % 2 === 0) {
    return "Time is even!"
  } else {
    const err = new Error()
    err.code = "TIME_ERR"
    err.timestamp = Date.now()
    err.message = "Time is an illusion!!"
    throw err
  }
}

async function runTime() {
  try {
    const whatIsTime = await time()
    console.log("[17]-whatIsTime?", whatIsTime)
  } catch (error) {
    console.log("[21]-error", error)
  }
}

runTime()

import * as core from '@actions/core'

async function run() {
  try {
    console.log("pouet")
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()

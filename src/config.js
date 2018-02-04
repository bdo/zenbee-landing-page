const env = process.env.REACT_APP_ENV || 'qa'

const config = {
  qa: {
    firebase: {
      apiKey: "AIzaSyBdxRAVOeAxfsjHLGbfF8CdgSldJJ0VSnU",
      authDomain: "zenbee-qa.firebaseapp.com",
      databaseURL: "https://zenbee-qa.firebaseio.com",
      projectId: "zenbee-qa",
      storageBucket: "zenbee-qa.appspot.com",
      messagingSenderId: "72351613486"
    },
  },
  production: {
    firebase: {
      apiKey: "AIzaSyDX96Ow2KbAK-hY-DysBVWkoA7Kf_3w-IA",
      authDomain: "zenbee-57e70.firebaseapp.com",
      databaseURL: "https://zenbee-57e70.firebaseio.com",
      projectId: "zenbee-57e70",
      storageBucket: "zenbee-57e70.appspot.com",
      messagingSenderId: "633748144454"
    },
  },
}

export default config[env]

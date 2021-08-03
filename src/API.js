class API{
  static getArticles(){
    return fetch('https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json')
      .then(respond => respond.json())
  }
}

window.API = API

export default API
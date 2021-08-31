import db from "../db/setupDB.js";

/**
 * @desc test
 * @param {object} {response} 
 * @return {object} {success, data}
 */
export const testRouter = ({response}) => {
  response.body = {
    success: true,
    data: "Hello World"
  }
}

/**
 * @desc get articles
 * @param {object} {response} 
 * @return {object} {success, data}
 */
export const getArticles = ({response}) => {
  // get articles from database
  const articles = db.queryEntries("SELECT * FROM articles");

  if(articles) {
    response.status = 200;
    response.body = {
      success: true,
      data: articles
    }
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: []
    }
  }
}

/**
 * @desc get articles
 * @param {object} {params, response} 
 * @return {object} {success, data}
 */
export const getArticle = ({params, response}) => {
  // get articles from database by params(id)
  const articles = db.queryEntries("SELECT * FROM articles");
  const article = articles.find(a => a.id === +params.id);

  if(article) {
    response.status = 200;
    response.body = {
      success: true,
      data: article
    }
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: null
    }
  }
}
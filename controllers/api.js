import db from "../db/setupDB.js";
import { log } from "../deps.js";
import {articleValidation} from "../utils/validation.js";
import {createUpdateQuery} from "../utils/query.js";

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

  if(articles == "") {
    response.status = 404;
    return response.body = {
      success: false,
      data: [],
      msg: `No contents of article.`
    }
  }

  // convert schedule to JSON
  articles.forEach(a => a.schedule = JSON.parse(a.schedule))

  response.status = 200;
  response.body = {
    success: true,
    data: articles
  }
}

/**
 * @desc get article by id
 * @param {object} {params, response} 
 * @return {object} {success, data}
 */
export const getArticle = ({params, response}) => {

  // get articles from database by params(id)
  let article = db.queryEntries(`SELECT * FROM articles WHERE id = ${+params.id}`);
  
  if(article == "") {
    response.status = 404;
    return response.body = {
      success: false,
      data: null,
      msg: `No such article in the database id: ${+params.id}`
    }
  }
  
  // articleは１個の要素を持つリストになっている
  article = article[0];

  // convert text of schedule to JSON
  article.schedule = JSON.parse(article.schedule);

  response.status = 200;
  response.body = {
    success: true,
    data: article
  }
}

/**
 * @desc add article
 * @param {object} {request, response} 
 * @return {object} {success, data}
 */
export const addArticle = async ({request, response}) => {
  // get request body
  const body = await request.body();
  const article = await body.value;

  // validate article to find null value
  const errorMessage = articleValidation(article);

  // if article has null value return error response
  if(errorMessage) {
    response.status = 400;
    return response.body = {
      success: false,
      data: null,
      msg: `Please input ${errorMessage}.`
    }
  }

  // insert article into database
  db.query(
    `INSERT INTO articles (
      userName,
      gameName,
      profile,
      schedule,
      meal_description,
      notice
    ) VALUES (
      (?), (?), (?), (?), (?), (?)
    )`,
    [
      article.userName,
      article.gameName,
      article.profile,
      JSON.stringify(article.schedule),
      article.meal_description,
      article.notice
    ]
  );

  log.info("Insert article to database successfully");

  // res
  response.status = 201;
  response.body = {
    success: true,
    data: article
  }
}

/**
 * @desc update article by id
 * @param {object} {params, request, response} 
 * @return {object} {success, data}
 */
export const updateArticle = async ({params, request, response}) => {
  // get request body
  const body = await request.body();
  const updateContent = await body.value;

  // validate updateContent to find null value
  const result = articleValidation(updateContent);

  // if updateContent has null value return error response
  if(result) {
    response.status = 400;
    return response.body = {
      success: false,
      data: null,
      msg: `Don't set null value on: ${result}.`
    }
  }

  // find article from database by id
  const article = db.queryEntries(`SELECT * FROM articles WHERE id = ${+params.id}`);

  if(article == "") {
    response.status = 404;
    return response.body = {
      success: false,
      data: null,
      msg: `No such article in the database id: ${+params.id}`
    }
  }

  // JSON stringify (schedule) to compare
  if(updateContent.schedule) {
    updateContent.schedule = JSON.stringify(updateContent.schedule)
  }

  // update article
  const updatedArticle = {...article[0], ...updateContent};

  // insert article into database
  const query = createUpdateQuery(updateContent, +params.id);

  // execute query
  db.query(query);

  log.info("Update article successfully")

  // JSON parse to response
  updatedArticle.schedule = JSON.parse(updatedArticle.schedule)

  // res
  response.status = 201;
  response.body = {
    success: true,
    data: updatedArticle
  }
}

/**
 * @desc delete article by id
 * @param {object} {params, response} 
 * @return {object} {success, data}
 */
export const deleteArticle = ({params, response}) => {

  // find article from database by id
  let article = db.queryEntries(`SELECT * FROM articles WHERE id = ${+params.id}`);

  if(article == "") {
    response.status = 404;
    return response.body = {
      success: false,
      data: null,
      msg: `No such article in the database id: ${+params.id}`
    }
  }

  // articleは１個の要素を持つリストになっている
  article = article[0]

  // delete article by id
  db.query(`delete from articles where id = ${+params.id}`);

  log.info(`delete article id: ${+params.id} successfully`);

  // JSON parse to response
  article.schedule = JSON.parse(article.schedule)

  // res
  response.status = 200;
  response.body = {
    success: true,
    data: article
  }
}
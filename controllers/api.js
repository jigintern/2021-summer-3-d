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
 * @desc get article
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

/**
 * @desc add articles
 * @param {object} {request, response} 
 * @return {object} {success, data}
 */
export const addArticle = async ({request, response}) => {
  // get request body
  const body = await request.body();
  const article = await body.value;

  // validation here

  // you should more strict validation after!!
  if(!article.name) {
    response.status = 404;
    response.body = {
      success: false,
      data: null,
      msg: "No contents of the request"
    }
  } else {

    // uuid
    article.id = globalThis.crypto.randomUUID();

    // insert this article to the database
    db.query(
      `INSERT INTO articles (name) VALUES ((?))`,
      ["sampleArticles3"]
    );

    // res
    response.status = 201;
    response.body = {
      success: true,
      data: article
    }
  }
}

/**
 * @desc update articles
 * @param {object} {params, request, response} 
 * @return {object} {success, data}
 */
export const updateArticle = async ({params, request, response}) => {
  // get request body
  const body = await request.body();
  const UpdateContent = await body.value;
  const id = params.id;

  // validation here

  // you should more strict validation after!!
  if(!UpdateContent.name) {
    response.status = 404;
    response.body = {
      success: false,
      data: null,
      msg: "No contents of the request"
    }
  }

  // find article from database by id
  const article = db.queryEntries(`SELECT * FROM articles WHERE id = ${+id}`);

  if(!article) {
    response.status = 404;
    response.body = {
      success: false,
      data: null,
      msg: `No such article in the database id: ${id}`
    }
  } else {

    // update article
    const updatedArticle = {...article[0], ...UpdateContent};

    // update article in the database (forEach clumns) to fix!!!
    db.query(`update articles set name = '${updatedArticle.name}' where id = ${+id}`);
  
    // res
    response.status = 201;
    response.body = {
      success: true,
      data: updatedArticle
    }
  }
}
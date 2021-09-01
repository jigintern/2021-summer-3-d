import {log} from "../deps.js";

/**
 * 
 * @desc Validation - if article has null value
 * @param {object} article 
 * @return null or Array(include keys that has null value)
 */
export const articleValidation = (article) => {

  let nullKeys = [];
  Object.values(article).forEach((value, index) => {
    if(value == "") {
      nullKeys.push(Object.keys(article)[index])
    }
  })
  
  if(nullKeys.length == 0) {
    return null
  } else {
    log.error(`This aricle has null value in: ${nullKeys.join(", ")}`);
    return nullKeys.join(", ");
  }
}
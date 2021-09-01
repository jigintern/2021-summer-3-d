
/**
 * 
 * @desc create Update
 * @param {objact} object 
 * @param {number} id 
 * @returns 
 */
export const createUpdateQuery = (object, id) => {
  let query = [];
  Object.values(object).forEach((value, index) => {
    query.push(`${Object.keys(object)[index]} = '${value}'`)
  })

  return `update articles set ${query.join(', ')} where id = ${+id}`
}
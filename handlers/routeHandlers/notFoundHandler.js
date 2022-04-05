/*
 * Title: Not Found Handler
 * Description: 404 not found Handlers
 * Author: Munna Khandakar (learnt from 'Learn With Sumit')
 * Date: 05/05/2020
 *
 */

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  // console.log(requestProperties);
  callback(404, {
    message: "url not found...",
  });
};

module.exports = handler;

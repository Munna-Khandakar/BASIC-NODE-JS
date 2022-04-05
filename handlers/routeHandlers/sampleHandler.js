/*
 * Title: Sample Handler
 * Description: Sample Handlers
 * Author: Munna Khandakar (learnt from 'Learn With Sumit')
 * Date: 05/05/2020
 *
 */

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  // console.log(requestProperties);
  callback(200, {
    message: "this is a sample url",
  });
};

module.exports = handler;

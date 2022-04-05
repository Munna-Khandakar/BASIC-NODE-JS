/*
 * Title: Routes
 * Description: Application Routes
 * Author: Munna Khandakar (learnt from 'Learn With Sumit')
 * Date: 05/05/2020
 *
 */

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;

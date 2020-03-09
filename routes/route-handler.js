// main route handler 

let home = require('./home-route');
let projects = require('./projects-route');

module.exports = {
    '/': home,
    '/projects': projects
}
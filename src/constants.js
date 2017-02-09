/*
 * You might need to provide your own config here to point to the api
 */

/* if running on localhost assume that api is running on local dev server w/ defaults */
if (window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1') {
    module.exports.API_HOST = window.location.hostname;
    module.exports.API_PORT = '8000';
} else {
    /* rhys' vm config */
    module.exports.API_HOST = 'mdb.vm.com';
    module.exports.API_PORT = '80';
}
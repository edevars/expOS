const routes = require('next-routes')

module.exports = routes().
add('index','/expo-os','index').
add('speakers','/expo-os/speakers','speakers').
add('workshops','/expo-os/workshops','workshops')
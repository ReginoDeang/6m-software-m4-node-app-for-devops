// This is the only function that will be called by the endpoint.
//request and response
function print(req, res) {
  res.send(
    "Hello I am Regino and I successfully deployed my app in Heroku!!yodelayheehoo"
  );
}
module.exports = print;

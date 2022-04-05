module.exports.handler = (event) => {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      message: "hello",
    }),
  }
}

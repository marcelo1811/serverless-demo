module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      message: "hello",
    }),
  }
}

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: 1,
        name: "clean up",
        status: "open",
      },
    }),
  }
}

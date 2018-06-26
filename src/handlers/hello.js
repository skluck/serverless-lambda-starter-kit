function HelloWorld(event, context, callback) {
  const response = {
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response),
  });
}

export { HelloWorld };

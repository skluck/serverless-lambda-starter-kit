function Scheduled(event, context, callback) {
  const message: 'Go Serverless v1.0! Your function executed successfully!';

  callback(null, {
    message,
    event
  });
}

export { Scheduled };

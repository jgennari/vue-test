module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const response = {
        message: "Hello, World!",
        timestamp: new Date().toISOString()
    };

    context.res = {
        status: 200,
        body: response,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};

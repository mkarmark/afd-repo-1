module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        headers: { 'foobar': 'hahahah', 'Cache-Control': 'private, max-age=25'},
        body: req.headers
    }
};

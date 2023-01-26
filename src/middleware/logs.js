const logRequest = (req, res, next) => {
    console.log('Terjadi request Ke PATH: ', req.path);
    next();
}

module.exports = logRequest;
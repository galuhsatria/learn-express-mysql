const logRequest = (req, res, next) => {
    console.log('Teriadi request pada PATH : ', req.path);
    next();
}

module.exports = logRequest;
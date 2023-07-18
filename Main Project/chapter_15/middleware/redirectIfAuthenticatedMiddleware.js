module.exports = (req, res, next) => {
    if (req.session.userId) {
        return res.redirect('/') // if log in successful redirect to home page
    }
    next()
}
let db = require('../../database/models')

const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;
const getBaseUrl = (req) => req.protocol + '://' + req.get('host');

module.exports = {
    list: (req, res) => {
        db.Genre.findAll()
        .then(genres => res.json({
            meta: {
                link: getUrl(req),
                status: 200,
                total: genres.length
            },
            data: genres
        }));
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
        .then(genre => res.json({
            meta: {
                link: getUrl(req),
                status: 200
            },
            data:genre
        }))
    }

}
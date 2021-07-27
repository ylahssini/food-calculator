const db = require('../db.json');

module.exports = (req, res) => {
    if ('name' in req.query && req.query.name.trim() !== '') {
        let { name } = req.query;
        const result = db.filter((item) => {
            return new RegExp(name.toLowerCase(), 'g').test(item.name.toLowerCase())
        });

        res.json(result);
    } else {
        res.json([]);
    }
}
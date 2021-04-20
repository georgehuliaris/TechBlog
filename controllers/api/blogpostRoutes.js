// borrowed from 24 again, make sure to change what needs changing!!!!
const router = require('express').Router();
const { Blogpost } = require('../../model');
const withAuth = require('../../utilis/auth');
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Blogpost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogpostData = await Blogpost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!blogpostData) {
            res.status(404).json({ message: 'No Blogpost found with this id!' });
            return;
        }
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
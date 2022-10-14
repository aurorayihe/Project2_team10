const router = require('express').Router();
const {Review} = require('../../models');
const withAuth = require ('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.findAll({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try{
        const newReview = await Review.getOne({
            where: {
                id: req.params.id,
            }
        });
        
        if (!newReview) {
            res.status(404).json({ message: 'No movie found with this id!'});
            return;
        }

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });

        if (!reviewData) {
            res.status(404).json({ message: 'No movie found with this id!'});
            return;
        }

        res.status(200).json(reviewData);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
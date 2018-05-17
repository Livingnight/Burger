const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([
        'burger_name', 'devoured'
    ], [
            req.body.burger_name, req.body.devoured
        ], result => {
            res.json({id: result.insertId})
        });


});

router.put('/api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(`condition: ${condition}`);

    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
        if( result.changedRows === 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});
router.delete('/api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, result => {
        if(result.affectedRows === 0) {
            return res.status(404).end();
        }    else {
            res.status(200).end();
        }
    });

});

module.exports = router;
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router();

module.exports = router
//Create connection
const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  });

router.get('/', (req, res) => {
    res.send('Welcome!');
});

router.get('/products/:name', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE product_name LIKE ' + "'%" + req.params.name + "%'" +'OR product_id LIKE ' + "'%" + req.params.name + "%'";
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

// showProducts() GET /products
router.get('/product/api-1', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'laptop'" + 'and price>0 and price<599';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});
// showProducts() GET /products
router.get('/product/api-2', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'laptop'" + 'and price>600 and price<799';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-3', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'laptop'" + 'and price>800';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-4', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'pc'" + 'and price>0 and price<399';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-5', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'pc'" + 'and price>400 and price<799';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-6', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'pc'" + 'and price>799';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-7', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'tablet'" + 'and price>0 and price<599';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-8', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'tablet'" + 'and price>600 and price<799';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-9', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'tablet'" + 'and price>800 ';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-10', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'2-in-1'" + 'and price>0 and price<599';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-11', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'2-in-1'" + 'and price>600 and price<799';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});

router.get('/product/api-12', (req, res, next) => {
    let sql = 'SELECT * FROM product WHERE kind=' + "'2-in-1'" + 'and price>800 ';
    db.query(sql, (err, results) => {
        if (err) {
            next(err);
        }
        res.status(200);
        res.send(results);
    });
});
const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    console.log(__dirname);
    res.render("index");
})
router.get('/aboutUs' , (req, res) => {
    console.log(__dirname);
    res.render("page/aboutUs");
})
router.get('/bloglist' , (req, res) => {
    console.log(__dirname);
    res.render("page/bloglist");
})
router.get('/contact' , (req, res) => {
    console.log(__dirname);
    res.render("page/contact");
})
router.get('/faq' , (req, res) => {
    console.log(__dirname);
    res.render("page/faq");
})
router.get('/services' , (req, res) => {
    console.log(__dirname);
    res.render("page/services");
})
router.get('/shop' , (req, res) => {
    console.log(__dirname);
    res.render("page/shop");
})
router.get('/team' , (req, res) => {
    console.log(__dirname);
    res.render("page/team");
})

module.exports = router;
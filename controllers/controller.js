const postMessage = require('../module/message');

const homePage = (req, res) => {
    postMessage.find()
        .then((data) => {
            res.render("index", { data: data });
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

}
const aboutPage = (req, res) => {
    res.render("about");
}

const new_post = (req, res) => {
    let new_post = new postMessage(req.body);
    new_post.save()
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    homePage,
    aboutPage,
    new_post
}
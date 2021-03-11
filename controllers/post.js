
const Post = require('../models').Post;
const Event = require('../models').Event;
const User = require('../models').User;

const constants = require('../constants');

const getAllPosts = (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'body', 'img', 'userId', 'eventId'],
        // include: [
        //     {
        //         model: Event
        //     }
        // ]
    })
    .then(allPosts => {
        res.status(constants.SUCCESS).json(allPosts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPostById = (req, res) => {
    Post.findByPk(req.params.postId)
    .then(foundPost => {
        if(foundPost === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            res.status(constants.SUCCESS).json(foundPost)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createPost = (req, res) => {
    console.log("creating post here")
    console.log(req.body)
    // req.body.userId = req.user.id;
    // req.body.eventId = req.params.event;
    // req.body.eventId = req.params.event;

    Post.create(req.body)
    .then(newPost => {
        res.status(constants.SUCCESS).json(newPost)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}


// const createPost = (req, res) => {
//     req.body.userId = req.user.id;
//     req.body.eventId = req.params.event;

//     Post.create(req.body)
//     .then(newPost => {
//         res.status(constants.SUCCESS).json(newPost)
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

const getPostsByEvent = (req, res) => {
    Post.findAll({
        where: {
            eventId: req.params.event
        },
        attributes: ['id', 'title', 'body', 'eventId', 'img']//was ci
    })
    .then(allPosts => {
        if(allPosts.length > 0){
            res.status(constants.SUCCESS).json(allPosts);
        }else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect place Id`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPostsByUser = (req, res) => {
    Post.findAll({
        where: {
            userId: req.user.id
        },
        attributes: ['id', 'title', 'body', 'userId', 'img'],
        include: [{
            model: Event
        }]
    })
    .then(allPosts => {
        res.status(constants.SUCCESS).json(allPosts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editPost = (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.eventId
        },
        returning: true
    })
    .then(updatedPost => {
        if(updatedPost[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            Post.findByPk(req.params.eventId, {
                // include: [
                //     {
                //         model: Event,
                //         attributes: ['name', 'workOn', 'img', 'location']
                //     },
                //     {
                //         model: User,
                //         attributes: ['id', 'username']
                //     }
                // ]
            })
            .then(foundPost => {
                if(foundPost === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
                }else{
                    res.status(constants.SUCCESS).json(foundPost)
                }
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const deletePost = (req, res) => {
    Post.findByPk(req.params.eventId)
    .then(foundPost => {
        // if(foundTask.eventId === req.user.id){
            Post.destroy({
                where: {id: req.params.eventId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        // } else {
        //     res.status(constants.FORBIDDEN).send('ERROR: Task not created by User')
        // }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
// const deletePost = (req, res) => {
//     Post.findByPk(req.params.postId)
//     .then(foundPost => {
//         if(foundPost.userId === req.user.id){
//             Post.destroy({
//                 where: {id: req.params.postId}
//             })
//             .then(() => {
//                 res.status(constants.SUCCESS).send('success')
//             })
//         } else {
//             res.status(constants.FORBIDDEN).send('ERROR: Post not created by User')
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

module.exports = {
    createPost,
    getPostsByEvent,
    getPostsByUser,
    getAllPosts,
    deletePost,
    editPost,
    getPostById
}



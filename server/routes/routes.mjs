import express from "express"
const router = express.Router()
import popularBlog from "../model/popularBlog.mjs"
import categories from "../model/categories.mjs"
import users from "../model/users.mjs"


//Post Method
router.post('/post', async (req, res) => {
    const data = new popularBlog({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getPopular', async (req, res) => {
    try{
        const data = await popularBlog.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getUsers', async (req, res) => {
    try{
        const data = await users.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getTags', async (req, res) => {
    try{
        const data = await categories.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})


export default router
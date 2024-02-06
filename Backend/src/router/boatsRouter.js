import { Router } from "express";
import { controller } from "../controller/index.js";
import multer from "multer";


const boatsRouter = Router();


const fileDestination = new URL(
    '../../data/img', import.meta.url
).pathname

console.log(fileDestination)

const storage = multer.diskStorage({
    destination: fileDestination, filename: (_, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

boatsRouter.get('/', controller.getAllBoats);

boatsRouter.get('/:boatId', controller.getOneBoat);

boatsRouter.delete('/delete/:boatId', controller.deleteBoat);

boatsRouter.put('/edit', controller.editBoat);

boatsRouter.post('/add', upload.single('boatImage'), controller.addNewBoat);

// boatsRouter.post('/upload', upload.single('boatImage'), (req, res) => {
//     console.log(req.body)
//     try {
//         res.json({ success: true, result: req.file.filename })
//     } catch (error) {
//         res.json({ success: false, error: error })
//     }
// })




export default boatsRouter;
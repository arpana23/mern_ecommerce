import multer from "multer";

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage })

// above line is exactly the same as writing:
/*
    multer({
        storage: storage
    });

    Because of object property shorthand, JavaScript lets you write:
    multer({ storage })
*/

// syntax

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "uploads/");
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });

export default upload
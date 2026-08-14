import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"
// import { json } from "express"

// function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]   /*we add req.files.image1 because if image is undifined*/
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        // we may the above code like:-
        /*
            const image1 = req.files.image1?.[0]
            const image2 = req.files.image2?.[0]
            const image3 = req.files.image3?.[0]
            const image4 = req.files.image4?.[0]
        */

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                console.log("File object:", item);
                console.log("File path:", item.path);
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                console.log(result);
                return result.secure_url

            })
        )


        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        /* we will upload the images on cloudinary and then that image url which is generated on cloudinary we will save that in the database. */

        res.json({ success: true, message: "Product added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for removing product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        // const product = await productModel.findById(req.body.id);
        const product = await productModel.findById(productId);
        res.json({ success: true, product })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { listProducts, addProduct, removeProduct, singleProduct }
import producto from "../models/producto.js";

//Registrar producto
const registerProducto=async (req,res)=>{
    //validra campos vacios
    if(!req.body.name||!req.body.price) return res.status(400).send("Data incomplete");

    //validar si el producto ya existe
    const existingProducto= await producto.findOne(
        {
            name:req.body.name
        }
    );
    if(existingProducto) return res.status(400).send("existing product");

    //guardar producto
    const productoSchema = new producto(
        {
            name:req.body.name,
            price:req.body.price,
            stock:req.body.stock
        }
    );
    const result=await productoSchema.save();
    if(!result) return res.status(400).send("Faild to register");

    return res.status(200).send({result});

}

export default {registerProducto};
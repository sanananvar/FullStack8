import {model, Schema} from "mongoose"
let ProductSchema =new Schema({
    name: String,
    desc:String,
    image:String

})

export let ProductModel = model("products6",ProductSchema)
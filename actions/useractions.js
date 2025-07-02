"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentfrom) => {
    await connectDB();
    let user = await User.findOne({username: to_username})
    var instance = new Razorpay({ key_id:user.razorpayid, key_secret:user.razorpaysecret})

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentfrom.name, message: paymentfrom.message })
    return x
}
export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    if (!u) return null;
    let user = u.toObject({ flattenObjectIds: true }); // now works
    return user;
}

export const fetchpayments = async (username) => {
    await connectDB();
    let p = await Payment.find({ to_user: username,done:true}).sort({ amount: -1 }).limit(10).lean()
    return p
}
export const updateProfile=async (data,oldusername)=>{
    await connectDB();
    let ndata=Object.fromEntries(data);
    if(oldusername!==ndata.username){
        let u=await User.findOne({username:ndata.username})
        if (u){
            return {error:"Username Already Exists"}
        }
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{
        await User.updateOne({email: ndata.email}, ndata)
    }
}

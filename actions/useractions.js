"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate=async (amount,to_username,paymentfrom)=>{
    await connectDB();
    var instance =new Razorpay({key_id:process.env.NEXT_PUBLIC_KEY_ID,key_secret:process.env.KEY_SECRET})
    
    let options={
        amount:Number.parseInt(amount),
        currency:"INR",
    }
    let x = await instance.orders.create(options)
    await Payment.create({oid:x.id,amount:amount,to_user:to_username,name:paymentfrom.name,message:paymentfrom.message})
    return x
}
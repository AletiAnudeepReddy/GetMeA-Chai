import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import Razorpay from "razorpay";
export const POST=async (req)=>{
    await connectDB();
    let body=await req.formData();
    body=Object.fromEntries(body);
    let p=await Payment.findOne({oid:body.razorpay_order_id});
    if (!p){
        return NextResponse.json({success:false,message:"Order id not found"});
    }
    let xx=validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},
      body.razorpay_signature,process.env.KEY_SECRET)
    
    if (xx){
        const updatedPayment=await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone:true`)
    }else{
        return NextResponse.error("Payment verification Failed")
    }
}
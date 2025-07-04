"use client"
import React from 'react'
import Script from 'next/script'
import { fetchuser,fetchpayments, initiate } from '@/actions/useractions'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {
    const { data: session } = useSession();
    
    const [paymentform, setpaymentform] = useState({
        name: '',
        message: '',
        amount: ''
    });
    const [currentUser, setcurrentUser] = useState({});
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
      getData()
    }, [])

    useEffect(() => {
        if(searchParams.get("paymentdone") == "true"){
        toast('Thanks for your donation!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
        router.push(`/${username}`)
     
    }, [])
    

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
        console.log(paymentform)
    }
    const getData= async ()=>{
        let u=await fetchuser(username);
        setcurrentUser(u);
        let dbpayments=await fetchpayments(username);
        setpayments(dbpayments);
        
    }
    const pay = async (amount) => {
        console.log(session.user.name)
        if (!session){
            alert('Login required')
        }
        let a = await initiate(amount,username, paymentform)
        let orderId = a.id

        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover w-full relative'>
                <img className='object-cover w-full h-48 md:h-[350]' src='/main.gif' alt='' />
                <div className='absolute -bottom-20 right-[32%] md:right-[45%] border-white border-4 overflow-hidden rounded-full'>
                    <img className='overflow-hidden rounded-full' width={165} height={165} src='/images.jpeg' alt='' />
                </div>
            </div>
            <div className='info flex flex-col justify-center items-center mt-24 gap-2'>
                <div className='text-white font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Lets help {username} get a chai!
                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments. ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div>
            </div>
            <div className='payment text-white flex flex-col md:flex-row justify-center gap-3 container w-[80%] mx-auto my-10'>
                <div className='suppoters w-full md:w-1/2 bg-slate-900 rounded-lg p-10'>
                    <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                    <ul className='mx-5 text-lg'>
                    {payments.length==0 && <li>No Payments yet</li>}
                    {payments.map((p,i)=>{
                        return <li key={i} className='my-3 flex gap-2 items-center'>
                            <img width={33} src='/avatar.gif' alt='user avatar' />
                            <span>
                                {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"
                            </span>
                        </li>
                    })}
                    </ul>
                </div>
                <div className='makepayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                    <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                    <div className='flex gap-2 flex-col'>
                        <input onChange={handleChange} value={paymentform.name} name='name' type='text' className='w-full p-3 m-1 rounded-lg bg-slate-800' placeholder='Enter Name' />
                        <input onChange={handleChange} value={paymentform.message} name='message' type='text' className='w-full p-3 m-1 rounded-lg bg-slate-800' placeholder='Enter Message' />
                        <input onChange={handleChange} value={paymentform.amount} type='text' name='amount' className='w-full p-3 m-1 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                        <button type="button" onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} className="text-white ml-1 mt-1 bg-gradient-to-br from-purple-600 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Pay</button>

                    </div>
                    <div className='flex flex-col md:flex-row gap-2 mt-2'>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
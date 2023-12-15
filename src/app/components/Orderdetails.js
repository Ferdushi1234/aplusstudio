'use client'

import styles from "@/app/orderdetails/orderdetails.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";
import Doorform from '@/app/components/Door_form'
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})
const Orderform = () => {
    const [user, setUser] = useState({
        custumer_name: "",
        productname: "",
        code: "",
        quantity: "",
        size: "",
        size2: "",
        colorName: "",
        message: ""
    })
    const [status, setStatus] = useState(null);


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/orderdetails', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    custumer_name: user.custumer_name,
                    productname: user.productname,
                    code: user.code,
                    quantity: user.quantity,
                    size: user.size,
                    size2: user.size2,
                    colorName: user.colorName,
                    message: user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    custumer_name: "",
                    productname: "",
                    code: "",
                    quantity: "",
                    size:"",
                    size2:"", 
                    colorName: "",       
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        } catch (e) {
            console.log(e)
        }
    }
    return (
        
    <div style={{marginTop:'-4rem'}}>
        <h1>For wall cladding order</h1>
        <form style={{marginTop:'-1rem'}} className={styles.contact_form} onSubmit={handleSubmit}>
             <div className={styles.input_field}>
             <label htmlFor="custumer_name" className={styles.label}>
                    Enter your name
                    <input type="text" name="custumer_name" id="custumer_name"
                        aria-label="custumer_name"
                        placeholder="name"
                        className={mulish.className}
                        value={user.custumer_name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="productname" className={styles.label}>
                    Enter Product name
                    <input type="text" name="productname" id="productname"
                        aria-label="productname"
                        placeholder="product name"
                        className={mulish.className}
                        value={user.productname}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
          <div className={styles.input_field}>
                <label htmlFor="code" className={styles.label}>
                   Product Code Number
                    <input type="text" name="code" id="code"
                        aria-label="code"
                        placeholder="Check on produt & Enter"
                        className={mulish.className}
                        value={user.code}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="quantity" className={styles.label}>
                    Product Quantity
                    <input type="number" name="quantity" id="quantity"
                        aria-label="quantity"
                        placeholder="quantity"
                        className={mulish.className}
                        value={user.quantity}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>
            <label htmlFor="Size" className={styles.label}>
                    Wall Size
                    </label>
            <div class="flex rounded-md shadow-sm">        
                    <input type="number" name="size" id="size"
                        aria-label="size"
                        placeholder="Height"
                        className=' py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                        value={user.size}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                    
                    <input  type="number" name="size2" id="size2"
                        aria-label="size2"
                        placeholder="weidth"
                        className='py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                        value={user.size2}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
            </div>

<div>    
</div>




<div className={styles.input_field}>
             <label htmlFor="colorName" className={styles.label}>
                    Colour Names
                    <input type="text" name="colorName" id="colorName"
                        aria-label="colorName"
                        placeholder="Enter Colours name"
                        className={mulish.className}
                        value={user.colorName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>






            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea name="message" id="message" rows={5}
                        aria-label="message"
                        placeholder="message about product"
                        className={mulish.className}
                        value={user.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send</button>
            </div>
        </form>
        <Doorform/>
    </div>
        
    );
};

export default Orderform;
import Link from "next/link";
import baseUrl from '@/utils/baseUrl'
import Image from 'next/image'
const getProducts = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/orderdetails`,{
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch orderdetails");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading orderdetails: ", error);
  }
};

export default async function ProductsList() {
  const { orderdetails } =  await getProducts ()|| {}
  return (
    <>
    <div  className="border border-slate-300 grid gap-6  md:grid-cols-5  ">
      {orderdetails && orderdetails.map((orderdetails) => (
        <div
          key={orderdetails._id}
          className="p-4   flex justify-between  items-start"
        >
          <div>
          <h1 className="mt-1 text-lg font-extrabold text-gray-900">Custumer name:--  {orderdetails.custumer_name}</h1>  
          <h2 className=" text-lg text-gray-900">Product name:--  {orderdetails.productname}</h2>              
          <h3 className="mb-1 text-gray-600">Code_of_Product:--  {orderdetails.code}</h3>
          <h3 className="mb-1 text-gray-600">Quantity:--  {orderdetails.quantity}</h3>
          <h3 className="mb-1 text-gray-600">Size:--  {orderdetails.size} X {orderdetails.size2}</h3>
          <h3 className="mb-1 text-gray-600">Colour_name:--  {orderdetails.colorName}</h3>
          <h3 className="mb-1 text-gray-600">Message:--     {orderdetails.message}</h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};






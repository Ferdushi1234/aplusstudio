import Link from "next/link";
import baseUrl from '@/utils/baseUrl'
import Image from 'next/image'
const getDoor_form = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/door_form`,{
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch door_form");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading door_form: ", error);
  }
};
export default async function Door_formList() {
  const { door_form } =  await getDoor_form ()|| {}
  return (
    <>
    <div  className="border border-slate-300 grid gap-6  md:grid-cols-5  ">
      {door_form && door_form.map((door_form) => (
        <div
          key={door_form._id}
          className="p-4   flex justify-between  items-start"
        >
          <div>
          <h1 className="mt-1 text-lg font-extrabold text-gray-900">Custumer name:--  {door_form.custumer_name}</h1>  
          <h2 className=" text-lg text-gray-900">Product name:--  {door_form.productname}</h2>              
          <h3 className="mb-1 text-gray-600">Code_of_Product:--  {door_form.code}</h3>
          <h3 className="mb-1 text-gray-600">Quantity:--  {door_form.quantity}</h3>
          <h3 className="mb-1 text-gray-600">Size:--  {door_form.size} X {door_form.size2}</h3>
          <h3 className="mb-1 text-gray-600">Colour_name:--  {door_form.colorName}</h3>
          <h3 className="mb-1 text-gray-600">Polish/vineer:--  {door_form.polish}</h3>
          <h3 className="mb-1 text-gray-600">Hinge:--  {door_form.hinge}</h3>
          <h3 className="mb-1 text-gray-600">Door_opning:--  {door_form.door_opning}</h3>
          <h3 className="mb-1 text-gray-600">Message:--     {door_form.message}</h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};






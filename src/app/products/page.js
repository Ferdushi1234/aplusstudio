import Link from "next/link";
import baseUrl from '@/utils/baseUrl'
import Image from 'next/image'
 
export const metadata= {
  title: 'Products | A Plus Studio',
  description: 'Products of  of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
}
const getProducts = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/products`,{
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch products");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } =  await getProducts ()|| {}
  return (
    <>
    <div style={{marginBottom:'-14rem'}} className="bg-gradient-to-r from-violet-100 to-pink-100  py-24 mx-auto    ">
    <h1 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 text-black py-2"> Products </h1>
    <h2 className="text-1xl mb-9 tracking-tight text-center text-gray-900 "> A Plus Studio makes deffrent type of Doors and Wall Cladding. You can see and if you want to order then Order now from A Plus Studio. </h2>
  </div>
    <div style={{marginBottom:'-6rem'}} className="py-24 w-screen bg-gradient-to-r from-violet-100 to-pink-100  flex items-center justify-center flex-wrap">
      {products && products.map((products) => (
        <div
          key={products._id}
          className="p-4   flex justify-between  items-start"
        >
          <div>
          <Link href={`/products/${products._id}`}>
            <Image 
            width={1000}
            height={1000}
            priority sizes='50vw'
            className="h-80 w-64 rounded-xl  p-2 shadow-md  bg-white transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... " src={products.mediaUrl} alt='' />
            
            </Link>
              <div className="mt-3">
          <h3 className="mt-1 text-lg font-medium text-gray-900">{products.name}</h3>
        <p className="mt-0 text-sm font-medium text-gray-900">Code: {products.code}</p>
        </div>
        <Link aria-label="Order/View" href={`/products/${products._id}`}>
        <button type="button" className="shadow-lg shadow-cyan-500/50 ... mt-2 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Order/View</button>
        </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};






import Image from "next/image";
import Link from "next/link";
export default function SlimRestaurantCard({item}) {
    console.log(item)
    let {fullname , description , price , image} = item
    return (
        <div className="w-[280px] bg-[#f8f9fa] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <Image
                src={`/${image}`} // Make sure this image exists in /public/images
                alt="Pasta Delight"
                width={280}
                height={180}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{fullname}</h3>
                <p className="text-sm text-gray-600 mt-1">
                    {description}
                </p>
                <div className="mt-3 flex justify-between items-center">
                    <span className="text-base font-bold text-green-600">Rs {price}</span>
                    <Link href={`/foodlover/${item._id}?name=${fullname}`}>
                        <button className="text-sm bg-yellow-300 text-[#1c1c1c] px-3 py-1 rounded-md hover:bg-yellow-400 transition-all duration-200 delay-75 cursor-pointer">
                            Order
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

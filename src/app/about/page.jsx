// app/about/page.jsx
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-10 text-gray-600">
                    Welcome to <span className="text-red-500 font-semibold">EatFood</span> – your ultimate destination for delicious, freshly made food delivered right to your doorstep.
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                            At FoodHub, our mission is simple – to serve quality food, fast and fresh. Whether you're craving something spicy, sweet, or savory, we’ve got it all.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                        <ul className="text-left text-gray-700 list-disc list-inside">
                            <li>Fresh ingredients cooked daily</li>
                            <li>Affordable pricing</li>
                            <li>Quick and reliable delivery</li>
                            <li>Friendly customer support</li>
                        </ul>
                    </div>

                    <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/pankcake.jpg"
                            alt="About FoodHub"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        Have questions? Reach out at{" "}
                        <a href="mailto:support@foodhub.com" className="text-red-500 underline">
                            support@EatFood.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

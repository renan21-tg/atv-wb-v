'use client';
import RegistrarConsumo from "@/components/Forms/RegistrarConsumo";

const Page = () => {
    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-blue-600 text-4xl font-bold mb-4">Consumo</h1>
            </div>
            <div className="flex justify-center">
                <div className="mt-6 p-4 bg-gray-100 rounded-xl w-full max-w-2xl">
                    <RegistrarConsumo />
                </div>
            </div>
        </div>
    );
};

export default Page;
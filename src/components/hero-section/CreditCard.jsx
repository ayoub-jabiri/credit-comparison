export default function CreditCard({
    color,
    name,
    rising,
    interestRate,
    isRecomended,
}) {
    return (
        <div className="col-span-4">
            <div
                className="relative shadow-md h-42.5 p-4 rounded-md flex flex-col justify-between"
                style={{ backgroundColor: color }}
            >
                <h3 className="text-white text-xl">{name}</h3>
                <div className="flex justify-between items-center text-[#ddd] text-sm pb-2 border-b">
                    <h4>Rising: {rising}</h4>
                    <h4>Interest Rate: {interestRate}</h4>
                </div>
                {isRecomended ? (
                    <img
                        src="/recomendation-badge.png"
                        alt="Recomendation Badge"
                        className="absolute bg-white top-4 right-4 w-7.5"
                    />
                ) : null}
                <img
                    src="/chip.png"
                    alt="Card Chip"
                    className="absolute top-[50%] right-4 translate-y-[-50%] w-7.5"
                />
            </div>
            <button className="block bg-transparent text-[#2196F3] text-sm border border-[#2196F3] hover:bg-[#2196F3] hover:text-white rounded-sm p-3 py-2 mt-4 mx-auto cursor-pointer transition">
                View Details
            </button>
        </div>
    );
}

import { RiCloseLine } from "@remixicon/react";

export default function CardDetails({ card }) {
    function closeCardDetails() {
        document.getElementById(`card-${card.id}-details`).style.left = "100%";
    }
    return (
        <div
            id={`card-${card.id}-details`}
            className="fixed left-full top-0 bg-[#00000026] w-full h-full z-10 transition-[left]"
        >
            <div className="bg-white w-[50%] h-full p-10 absolute right-0">
                <RiCloseLine
                    onClick={closeCardDetails}
                    className="absolute top-4 left-4 text-xl cursor-pointer"
                />
                <h5 className="text-xl text-center mb-6">
                    {card.name} Details
                </h5>
                <section className="flex justify-center gap-5">
                    <div>
                        <h6>Duration</h6>
                        <h6>Monthly Payment</h6>
                        <h6>Total Cost</h6>
                    </div>
                    <div>
                        <p>
                            :
                            <span className="text-[#2196F3] font-bold">
                                {" " + card.duration}
                            </span>
                        </p>
                        <p>
                            :
                            <span className="text-[#2196F3] font-bold">
                                {" " + card.monthly_payment}
                            </span>
                        </p>
                        <p>
                            :
                            <span className="text-[#2196F3] font-bold">
                                {" " + card.total_cost}
                            </span>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

import { RiCloseLine } from "@remixicon/react";
import CompoundInterest from "./CompoundInterest";

export default function CardDetails({ card }) {
    function closeCardDetails() {
        document.getElementById(`card-${card.id}-details`).style.left = "100%";
    }
    return (
        <div
            id={`card-${card.id}-details`}
            className="fixed left-full top-0 w-full h-full z-10 transition-[left]"
        >
            <div className="absolute right-0 bg-white w-[50%] h-full p-10 border-l border-[#ddd]">
                <RiCloseLine
                    onClick={closeCardDetails}
                    className="absolute top-4 left-4 text-xl cursor-pointer"
                />
                <h5 className="text-xl text-center pb-2 mb-4 border-b border-[#ddd]">
                    {card.name}
                </h5>
                <section className="mb-4">
                    <h6 className="font-bold mb-2">Credit Details:</h6>
                    <div className="flex justify-center gap-5">
                        <div>
                            <p>Duration</p>
                            <p>Monthly Payment</p>
                            <p>Total Cost</p>
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
                    </div>
                </section>
                <section>
                    <h6 className="font-bold mb-2">Compound Interest:</h6>
                    <CompoundInterest card={card} />
                </section>
            </div>
        </div>
    );
}

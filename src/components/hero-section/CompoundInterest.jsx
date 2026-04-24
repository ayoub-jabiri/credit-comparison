import TableRow from "./TableRow";

export default function CompoundInterest({ card }) {
    function calculateCompound(years) {
        return (
            card.initial_amount * Math.pow(1 + card.interest_rate, years)
        ).toFixed(2);
    }

    let yearsList = [];

    let currentAmount = card.initial_amount;

    for (let i = 1; i <= card.duration; i++) {
        let currentInterest = (currentAmount * card.interest_rate) / 100;
        currentAmount += currentInterest;

        yearsList.push(
            <TableRow
                key={i}
                year={i}
                currentInterest={currentInterest.toFixed(2)}
                total={currentAmount.toFixed(2)}
                compoundInterest={calculateCompound(i)}
            />
        );
    }

    return (
        <table className="block text-center overflow-auto">
            <thead className="block w-fit">
                <tr className="block bg-[#F1F1F1] min-w-[500px] w-full p-2 border border-[#D6D6D6]">
                    <th className="w-[50px]">Year</th>
                    <th className="w-[150px]">Interests</th>
                    <th className="w-[150px]">Total</th>
                    <th className="w-[150px]">Compound Interest</th>
                </tr>
            </thead>
            <tbody className="block min-w-[500px] w-fit border-l border-r border-b border-[#D6D6D6]">
                {yearsList}
            </tbody>
        </table>
    );
}

import TableRow from "./TableRow";

export default function CompoundInterest({ card }) {
    function calculateCompound(years) {
        return Math.pow(card.initial_amount * (1 + card.interest_rate), years);
    }

    let yearsList = [];

    let currentInterest = card.interest_rate;

    for (let i = 1; i < card.duration; i++) {
        currentInterest *= i;

        yearsList.push(
            <TableRow
                key={i}
                year={i}
                currentInterest={currentInterest}
                compoundInterest={calculateCompound(i)}
            />
        );
    }

    return (
        <table className="block text-center w-[400px] border border-[#D6D6D6]">
            <thead className="block bg-[#F1F1F1] w-full p-2 border-b border-[#D6D6D6]">
                <tr className="block">
                    <th className="w-[50px]">Year</th>
                    <th className="w-[150px]">Current Interest</th>
                    <th className="w-[200px]">Total</th>
                </tr>
            </thead>
            <tbody className="block">{yearsList}</tbody>
        </table>
    );
}

export default function TableRow({ year, currentInterest, compoundInterest }) {
    return (
        <tr className="block p-2 [&:not(:last-child)]:border-b border-[#D6D6D6]">
            <td className="w-[50px]">{year}</td>
            <td className="w-[150px]">{currentInterest}</td>
            <td className="w-[200px]" title={compoundInterest}>
                {String(compoundInterest).length <= 4
                    ? compoundInterest
                    : String(compoundInterest).slice(0, 5) + "..."}
            </td>
        </tr>
    );
}

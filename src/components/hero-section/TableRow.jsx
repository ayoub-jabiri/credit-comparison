export default function TableRow({
    year,
    currentInterest,
    total,
    compoundInterest,
}) {
    function fixNumber(num) {
        return String(num).length <= 7 ? num : String(num).slice(0, 7) + "...";
    }

    return (
        <tr className="block p-2 [&:not(:last-child)]:border-b border-[#D6D6D6]">
            <td className="w-[50px]">{year}</td>
            <td className="w-[150px]" title={currentInterest}>
                {fixNumber(currentInterest)}
            </td>
            <td className="w-[150px]" title={total}>
                {fixNumber(total)}
            </td>
            <td className="w-[150px]" title={compoundInterest}>
                {fixNumber(compoundInterest)}
            </td>
        </tr>
    );
}

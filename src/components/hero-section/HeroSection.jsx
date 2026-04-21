import CreditCard from "./CreditCard";
import data from "../../assets/data/data";

export default function HeroSection() {
    const dataList = data.map((el) => (
        <CreditCard
            key={el.id}
            color={el.color}
            name={el.name}
            rising={el.rising}
            interestRate={el.interest_rate}
            isRecomended={el.isRecomended}
        />
    ));
    return (
        <main>
            <h2 className="mb-4">Available credits:</h2>
            <section className="grid grid-cols-12 gap-5">{dataList}</section>
        </main>
    );
}

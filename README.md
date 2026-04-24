# Credit Comparison & Capital Evolution Tracker

A React-based Single Page Application (SPA) designed to help users navigate the complexities of credit offers and visualize the impact of compound interest. This project focuses on clean component architecture, efficient data flow via props, and implementing financial logic within a modern UI.

## 🎯 Project Objectives

The primary goal of this project is to bridge the gap between abstract financial conditions and tangible data visualization. Key learning and development focuses include:

-   **Component Decomposition:** Breaking down complex UI into reusable, atomic React components.
-   **State & Props Management:** Handling data flow across the application using static data structures.
-   **Financial Logic:** Implementing real-world mathematical formulas (Amortization and Compound Interest) using JavaScript functions and loops.
-   **UX/UI Design:** Using visual cues (like badges) to simplify decision-making for the user.

---

## 🚀 Features

### 1. Credit Offer Comparison

The application displays a collection of credit offers from various providers (banks).

-   **Offer Cards:** Quick view of the provider name, initial amount, and interest rates.
-   **Smart Recommendation:** The system automatically identifies and applies a **"Recommended" badge** to the offer with the lowest interest rate, helping users find the best deal instantly.

### 2. Deep-Dive Offer Details

Users can interact with any offer card to view a detailed breakdown:

-   **Duration:** The lifespan of the loan in years.
-   **Monthly Payment:** Clear calculation of the monthly financial commitment.
-   **Total Cost:** A transparent look at the total amount repaid (Principal + Interest).

### 3. Capital Evolution Simulator (Bonus)

An interactive tool to visualize how money grows over time using the power of compound interest.

-   **The Logic:** Based on the formula $A = P(1 + r)^n$.
-   **Iterative Calculation:** The simulation runs through a loop for each year, calculating interest on both the initial capital and the interest already accrued, providing a year-by-year breakdown.

---

## 🧮 Mathematical Concepts Applied

### Compound Interest

Unlike simple interest, compound interest is calculated on the principal amount plus the accumulated interest of previous periods.

**Formula used:**
`A = P(1 + r)^n`

-   **P:** Initial capital (Principal)
-   **r:** Annual interest rate
-   **n:** Number of years
-   **A:** Final amount

---

## 🛠️ Technical Stack

-   **Framework:** React (Functional Components)
-   **Logic:** JavaScript (Functions, Loops, Math objects)
-   **Data:** Static javascript-structured data for predictable component rendering.

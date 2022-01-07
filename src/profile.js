import react from "react";

const profile = _ => {
    const names = ["Timi", "Péter", "László", "Richárd", "Zsuzsa"];

    const [timi, , , ,richárd] = names;
    return (
        <react.Fragment>
            <h1> {timi} </h1>
            <h1> {richárd} </h1>
        </react.Fragment>
    )
}

export default profile;
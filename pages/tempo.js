import React from "react";

function Tempo(props) {
    // I don't know yet exactly what the useStat and useEffects does, what i know its this piece of code is rendering nothing at the first run of "Tempo", so it ensures that the server won't generate and render a HTML file diferent of the HTML file that will be hydrated by React!
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    );
}

// Function called only in the building process of the application, which will get the date and freeze it to the production phase.
// Generates statically the properties of a page.
export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString,
        },
        revalidate: 1,
    };
}

export default Tempo;

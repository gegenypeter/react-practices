import MyButton from "./textUnderButton";

const buttonListWithMap = () => {
    const buttonTexts = ["Save", "Click", "Send", "Cancel", "Delete"];

    return <div>{buttonTexts.map((text, i) => <MyButton text={text} key={i} />)}</div>
}

export default buttonListWithMap;
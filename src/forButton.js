import MyButton from "./textUnderButton";




const forOfButton = () => {
    let rows = [];
    for (let i = 0; i <= 10; i++) {
        rows.push(<MyButton />)

    }
    return <div>{rows}</div>
}
export default forOfButton
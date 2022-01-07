
const profile2 = () => {
    const user = {
        firstName: "Laci",
        lastName: "Szita"
    }
    // const firstName = user.firstName;
    // const lastName = user.lastName;
    
    const {firstName, lastName} = user;
    
    return <div>
        <h2> {firstName} </h2>
        <h3> {lastName} </h3>
    </div>
}



export default profile2;
function Mapping(props) {

    const { names, kuchbhi } = props;
    return (
        <>
            <div>
                <h1>Mapping</h1>
                {/* abhi direct div banke woh saara elements page pe print hoga mapping concept se  */}
                {/* varaible ko use krne ki liye hamesha curly braces mai likhne ka usko */}
                {/* aur map ek predefined function hai toh uska parenthesis fir usme ek callback function include krna pdega aur fr ek parenthesis jisme apneko fr joh tag chaiye usme data call kr lene ka.. aur call back apan isliye use krta hai kyuki nai toh execution hojate hai directly jaise code woh line pe aajye toh..  */}
                {names.map((name, i) => (
                    <li key={i}>
                        <a href="/">{name} </a>
                        <span> Index value - {i}</span>
                    </li>
                ))}
                {/* abhi map function se name apna normal for i krke iterate krte na waise concept hai,, toh name mai names array joh maine app.jsx mai define kiya hai aur joh props method se idhr call kiya apan ne usme se ek ek element ko a tag banake automatic print dera hai */}
            </div>
        </>
    )
}

export default Mapping;
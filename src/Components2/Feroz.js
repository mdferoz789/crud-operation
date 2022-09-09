function Feroz(){
    let data="feroz"

    function click () {
        return(
            data="hhhh",
        
        // alert ("button clicked")
        alert (data)
        );
    }
    return(
        <>
        <h1> Hello Faiz</h1>
        <h3>{data}</h3>
        <h2>sdsdfsdf</h2>
        <button onClick={()=>click()}> CLICK ME </button>
        <button onClick={()=> alert("hi thank")}> CLICK ME </button>
        </>
    )
}

export default Feroz
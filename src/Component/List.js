
function List(){
    const arr = ['html', 'css', 'js', "react", 'bootstrap'];
    const li = arr.map((el, index) => {
        return <li key={index}>{el}</li>;
    })
   // console.log(li)
    return(
        <>
        <ul>
            {/* <li>html</li>
            <li>css</li>
            <li>js</li> */}
            {li}
        </ul>
        </>
    );
}

export default List;
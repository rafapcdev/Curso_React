
function Button( {text,myf, children}) {


    return (
        <div>
            <button onClick={myf}>{text}</button>
            {children}
        </div>
    );
}  

export default Button;
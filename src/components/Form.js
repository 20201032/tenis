import "./Form.css"
function Form(){
    return(
        <form className="form">
                <input id="name" type="text" placeholder="Name"/>
                <input id="email" type="text" placeholder="E-mail"/>
                <textarea id="message" type="text" placeholder="Message"></textarea>
                <button className="btn" type="submit"> Send</button>
        </form>

    )

}
export default Form;
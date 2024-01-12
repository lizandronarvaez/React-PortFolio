import useForm from "../../hooks/useForm";
import "./Contact.css";
export const Contact = () => {
    const { form, handleDataFormulario, handleSubmitFormulario } = useForm();
    const { user_name, user_email, message } = form;

    return (
        <form className="form" onSubmit={handleSubmitFormulario}>
            <h2>Formulario de contacto</h2>
            <hr />
            <div className="formulario">
                <div className="formulario_box">
                    <input
                        type="text"
                        onChange={handleDataFormulario}
                        placeholder="Asunto mensaje"
                        name="user_name"
                        value={user_name}
                    />
                </div>
                <div className="formulario_box">
                    <input
                        type="email"
                        onChange={handleDataFormulario}
                        placeholder="Introduce un email"
                        name="user_email"
                        value={user_email}
                    />
                </div>
                <div className="formulario_box">
                    <textarea
                        onChange={handleDataFormulario}
                        placeholder="Introduce un mensaje"
                        name="message"
                        value={message}>

                    </textarea>
                </div>
                <button type="submit">
                    Enviar
                </button>
            </div>
        </form>
    )
}
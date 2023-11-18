import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2/dist/sweetalert2.all";

const useForm = () => {

    const formData = {
        user_name: "",
        user_email: "",
        message: ""
    };
    const [form, setForm] = useState(formData);

    const handleDataFormulario = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }
    const handleSubmitFormulario = async (e) => {
        e.preventDefault();
        // comprobar que los campos no esten vacios
        if (form.user_name.length <= 1 || form.user_email.length <= 1 || form.message.length <= 1) {
            Swal.fire(
                'Debes rellenar los campos',
                'Los campos deben estar llenos',
                'error'
            )
            return;
        }

        // enviar email
        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
            user_name: form.user_name.trim(),
            user_email: form.user_email.trim(),
            message: form.message.trim()
        },
            import.meta.env.VITE_PUBLIC_KEY)
            .then(result => {
                if (result.status === 200) {
                    Swal.fire(
                        'Formulario enviado!',
                        'Se ha enviado correctamente',
                        'success'
                    );
                }
            }).catch(error => {

                if (error) {
                    Swal.fire(
                        'Error en el envio',
                        'Ocurrio un error,vuelve a intentarlo',
                        'error'
                    );
                }

            })
        // limpiar el valor de los input
        setForm({
            user_name: "",
            user_email: "",
            message: ""
        })
    }

    return {
        handleDataFormulario,
        handleSubmitFormulario,
        form
    }
}

export default useForm
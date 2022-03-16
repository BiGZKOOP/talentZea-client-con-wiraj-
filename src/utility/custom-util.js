import Swal from "sweetalert2"

export const fireAlertMessage = (msg) => {
    Swal.fire(
        "Hmm...",
        msg,
        "error"
    )
}

export const fireAlertCustom = (title, msg, icon) => {
    Swal.fire(
        title,
        msg,
        icon
    )
}

export const fireAlertError = (title, msg) => {

    Swal.fire(
        title,
        msg,
        "error"
    )
}
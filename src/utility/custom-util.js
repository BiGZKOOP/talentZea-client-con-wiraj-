import Swal from "sweetalert2"

export const fireAlertMessage = (msg) => {
    Swal.fire(
        "Hmm...",
        msg,
        "error"
    )
}
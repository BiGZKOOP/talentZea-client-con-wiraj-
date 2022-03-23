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

//base64 file maker
export const getBase64 = (file) => {
    return new Promise((resolve) => {
        let name
        let base64 = ""
        // Make new FileReader
        const reader = new FileReader()

        // Convert the file to base64 text
        reader.readAsDataURL(file)

        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            base64 = reader.result
            name = file.name
            resolve({ base64, name })
        }
    })
}

//Use this to delete object attr
export const deleteAttrFromObject = (obj, attr) => {
    delete obj[attr]
    return obj
}

export const jsonToFormData = (obj) => {
    const formData = new FormData()
    Object.keys(obj).map(e => {
        formData.append(e, obj[e])
    })
    return formData
}
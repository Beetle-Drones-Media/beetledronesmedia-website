"use server"

async function SubmitContactForm(formData: FormData) {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    }
    console.log("Form sent and Received");
return data;

}

export { SubmitContactForm };
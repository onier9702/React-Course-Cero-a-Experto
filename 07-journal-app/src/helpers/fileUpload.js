
export const fileUpload = async ( file ) => {

    // const secureUrl = 'https://res.cloudinary.com/reino/image/upload/v1653755945/pcsef0kor1b9wbq3up1r.jpg';

    const cloudUrl = 'https://api.cloudinary.com/v1_1/reino/upload'; 

    const formData = new FormData();
    formData.append('upload_preset','lh4l7fpo');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw resp.json();
        }


    } catch (error) {
        console.log(error);
    }

    // return url of the image or file 
}







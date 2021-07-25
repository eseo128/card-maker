class ImageUploader {
    async upload(file) {
        //비동기 사용
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'u6g5h3nn');
        const result = await fetch(
            'https://api.cloudinary.com/v1_1/es-business-card-maker/image/upload',
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json();
    }
}

export default ImageUploader;
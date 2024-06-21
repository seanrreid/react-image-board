import { useState } from 'react';
import ImageList from './ImageList';

const ImageForm = () => {
    const [images, setImages] = useState([]);

    const handleChange = (event) => {
        const { target } = event;
        const { files } = target;
        const newImageArray = [...images, files[0]]
        setImages(newImageArray);
    }

    return (
        <>
            <form>
                <label>
                    File Upload
                    <input type='file' name='fileUpload' onChange={handleChange} />
                </label>
                <button>Add Image</button>
            </form>
            <ImageList images={images} />
        </>
    );
};

export default ImageForm;

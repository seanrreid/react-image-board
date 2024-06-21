const ImageList = ({ images }) => {
    return (
        <>
            <h3>Image List</h3>
            {images.length > 0 ? (
                <div style={{ maxWidth: 320, height: 'auto' }}>
                    {images.map((image) => (
                        <img
                            src={URL.createObjectURL(image)}
                            style={{ width: '100%' }}
                            key={image.lastModified}
                        />
                    ))}
                </div>
            ) : (
                <p>No Images Uploaded</p>
            )}
        </>
    );
};

export default ImageList;

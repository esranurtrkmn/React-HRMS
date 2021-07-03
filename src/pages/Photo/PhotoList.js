import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoService from "../../services/photoService";
import { Image } from "semantic-ui-react";

export default function PhotoList() {

    let { id } = useParams();
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        let photoService = new PhotoService();
        photoService
            .getByResumeId(id)
            .then((result) => setPhotos(result.data.data));
    }, [id]);
    return (
        <div>
            {photos.map((photo) => (
                <Image
                    key={photo.id}
                    centered
                    style={{ marginLeft: "10em", marginBottom: "2em", marginTop: "2em" }}
                    verticalAlign="bottom"
                    circular
                    src={photo.photoUrl}
                    size="small"
                />
            ))}
        </div>
    );
}
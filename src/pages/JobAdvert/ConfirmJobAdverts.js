import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Header, Icon } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import HourglassFullRoundedIcon from "@material-ui/icons/HourglassFullRounded";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import BusinessIcon from "@material-ui/icons/Business";

export default function ConfirmJobAdverts() {

    let jobAdvertService = new JobAdvertService();

    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService
            .getByConfirmFalse()
            .then((result) => setJobAdverts(result.data.data));
    }, []);

    const confirm = (id) => {
        jobAdvertService
            .confirm(id)
            .then(toast.success("İLAN ONAYLANDI"), window.location.reload());
    };

    return (
        <div>
            <Header as="h2" icon textAlign="center">
                <HourglassFullRoundedIcon></HourglassFullRoundedIcon>
                <Header.Content>ONAY BEKLEYEN İŞ İLANLARI</Header.Content>
            </Header>
            <Card.Group>
                {jobAdverts.map((jobAdvert) => (
                    <Card fluid>
                        <Card.Content>
                            <BusinessIcon></BusinessIcon>
                            <Card.Header>{jobAdvert.jobTitle.jobTitle}</Card.Header>
                            <Card.Meta>{jobAdvert.employer.companyName}</Card.Meta>
                            <Card.Description>
                                <Icon name="map marker alternate" />
                                {jobAdvert.city.cityName}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className="ui two buttons">
                                <Button
                                    onClick={() => confirm(jobAdvert.id)}
                                    inverted
                                    color="green"
                                >
                                    ONAYLA
                                </Button>
                                <Button
                                    as={NavLink}
                                    to={`/jobadverts/${jobAdvert.id}`}
                                    inverted
                                    color="blue"
                                >
                                    İNCELE
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
}

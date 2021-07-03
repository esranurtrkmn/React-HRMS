import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DigitalSkillService from "../../services/digitalSkillService";
import {
    Label,
    Table,
    Button,
    Icon,
    Segment,
    Container,
    Message,
    Card
} from "semantic-ui-react";


export default function DigitalSkillList() {
    let { id } = useParams();
    const [digitalSkills, setDigitalSkills] = useState([]);
    useEffect(() => {
        let digitalSkillService = new DigitalSkillService();
      
        digitalSkillService
            .getByResumeId(id)
            .then((result) => setDigitalSkills(result.data.data));
    }, [id]);
    return (
        <div>
            <Segment circle="true" vertical>
                <Container>
                    <Message color="teal">
                        <Message.Header
                            textalign="left"
                            style={{
                                textalign: "left",
                                fontSize: "2em",
                                color: "teal",
                                marginTop: "0.75em",
                            }}
                        >
                            {" "}
                            <Icon name="code" color="teal" /> Yetenekler{" "}
                            <Button
                                type="submit"
                                floated="right"
                                animated
                                basic
                                color="teal"
                                size="large"
                                style={{ marginBottom: "1em" }}
                            >
                                <Button.Content visible>Ekle</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="check" />
                                </Button.Content>
                            </Button>
                        </Message.Header>

                        {digitalSkills.map((digitalSkill) => (
                            <Card fluid color="teal" key={digitalSkill.id}>
                                <Card.Content>
                                    <Card.Meta>
                                        <Table basic="very" style={{ marginTop: "2em" }}>
                                            <Table.Body>
                                                <Table.Row textAlign="center">
                                                    <Table.Cell width={8}>
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Teknoloji Adı:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        width={8}
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {digitalSkill.skillName}
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Card.Meta>
                                    
                                </Card.Content>
                            </Card>
                        ))}
                    </Message>
                </Container>
            </Segment>
        </div>
    );
}
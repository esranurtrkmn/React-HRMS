import React, { useEffect, useState } from "react";
import {
    Card,
    Icon,
    Segment,
    Container,
    Table,
    Message,
    Label,
} from "semantic-ui-react";
import LanguageService from "../../services/languageService";
import LanguageUpdate from "./LanguageUpdate";
import { useParams } from "react-router-dom";


export default function LanguageList() {
    let { id } = useParams();

    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        let languageService = new LanguageService();
        languageService
            .getByResumeId(id)
            .then((result) => setLanguages(result.data.data));
    }, [id]);

    return (
        <div>
            <Segment circle="true" vertical>
                <Container>
                    {languages.map((language) => (
                        <Message color="teal" key={language.id} >

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
                                <Icon name="language" color="teal" /> Yabancı Dil{" "}

                            </Message.Header>



                            <Card fluid color="teal"  >
                                <Card.Content>
                                    <Card.Meta>
                                        <Table
                                            verticalAlign="middle"
                                            basic="very"
                                            style={{ marginTop: "2em" }}
                                        >
                                            <Table.Body>
                                                <Table.Row textAlign="center">
                                                    <Table.Cell>
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Dil adı:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        {" "}
                                                        {language.languageName}
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row textAlign="center">
                                                    <Table.Cell>
                                                        {" "}
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Dil Seviyesi:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {language.languageLevel}
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Card.Meta>
                                </Card.Content>
                                <Card.Description>
                                    {" "}
                                    <LanguageUpdate language={language} />
                                </Card.Description>

                            </Card>
                        </Message>
                    ))}
                </Container>
            </Segment>
        </div>
    );
}
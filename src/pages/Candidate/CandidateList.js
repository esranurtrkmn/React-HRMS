import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Card, Button } from 'semantic-ui-react'
import CandidateService from "../../services/candidateService";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {

        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                {candidates.map((candidate) => (
                    <Card >
                        <Card.Content>
                            <AccountCircleIcon></AccountCircleIcon>
                            <Card.Header>{candidate.firstName}</Card.Header>
                            <Card.Header>{candidate.lastName}</Card.Header>


                        </Card.Content>
                        <Card.Content extra>

                            <div className="ui">
                                <button class="ui linkedin button">
                                    <i class="linkedin icon"></i>
                                    LinkedIn
                                </button>
                                <Button basic color="blue" as={Link} to={`/resumes/${candidate.id}`}>
                                    ÖZGEÇMİŞ
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </div>
    );
}


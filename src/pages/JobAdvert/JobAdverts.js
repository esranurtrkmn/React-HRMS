import React, { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";

import JobAdvertFilter from "./JobAdvertFilter";
import JobAdvertFilterList from "./JobAdvertFilterList";

import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdverts() {
    const [jobAdverts, setJobAdverts] = useState([]);

    const [activePage, setActivePage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const [filter, setFilter] = useState({});

    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService
            .getByFilter(activePage, pageSize, filter)
            .then((response) => {
                setJobAdverts(response.data.data);
                setTotalPages(parseInt(response.data.message));
            });
    }, [filter, activePage, pageSize]);

    const handleOnFilter = (filter) => {
        setFilter(filter);
    };

    const handlePagination = (e, { activePage }) => {
        setActivePage(activePage);
    };

    const handlePaginationCount = (value) => {
        setPageSize(value);
    }

    return (
        <>
            <Grid style={{ marginTop: "40px", marginBottom: "25px" }}>
                <Grid.Row>
                    <Grid.Column style={{ textAlign: "left" }} width={4}>
                        <JobAdvertFilter handleOnFilter={handleOnFilter} />
                    </Grid.Column>

                    <Grid.Column style={{ textAlign: "left" }} width={12}>
                        <JobAdvertFilterList
                            jobAdverts={jobAdverts}
                            handlePagination={handlePagination}
                            handlePaginationCount={handlePaginationCount}
                            activePage={activePage}
                            setActivePage={setActivePage}
                            total={totalPages}
                            totalPages={Math.ceil(totalPages / pageSize)}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}
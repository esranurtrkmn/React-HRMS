import React, { useState, useEffect } from "react";

import { Dimmer, Loader, Pagination, Icon, Dropdown } from "semantic-ui-react";

import JobAdvertItem from "./JobAdvertItem";


export default function JobAdvertFilterList({
    jobAdverts,
    handlePagination,
    handlePaginationCount,
    activePage,
    setActivePage,
    total,
    totalPages,
}) {
    const [value, setValue] = useState(10);

    const paginations = [
        { paginationName: "1 İlan", value: 1 },
        { paginationName: "10 İlan", value: 10 },
        { paginationName: "25 İlan", value: 25 },
        { paginationName: "50 İlan", value: 50 },
        { paginationName: "100 İlan", value: 100 },
    ];

    const paginationOptions = constantsMethods.objectsToOptions(
        paginations,
        "paginationName",
        "value"
    );

    return (
        <>
            <div className="header" style={{ display: "flex", width: "100%" }}>
                <h1>İlanlar</h1>
                <span style={{ marginLeft: "auto", color: "grey" }}>
                    {jobAdverts.length > 0
                        ? jobAdverts.length + " ilan bulundu"
                        : null}
                </span>
            </div>
          

            {jobAdverts?.map((item) => (
                <JobAdvertItem key={item.id} item={item} />
            ))}

            <div style={{ display: "flex", width: "100%" }}>
                <Pagination
                    firstItem={null}
                    lastItem={null}
                    activePage={activePage}
                    onPageChange={handlePagination}
                    totalPages={totalPages}
                />

                <Dropdown
                    onChange={(e, data) => {
                        setActivePage(1)
                        setValue(data.value);
                        handlePaginationCount(data.value);
                    }}
                    selection
                    defaultValue={value}
                    text={"Sayfalama - " + value}
                    style={{ marginLeft: "auto" }}
                    options={paginationOptions}
                />
            </div>
        </>
    );
}
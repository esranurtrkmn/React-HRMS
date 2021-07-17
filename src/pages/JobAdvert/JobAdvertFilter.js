import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Segment, Divider, Button, Dropdown, Input, FormField, Grid } from "semantic-ui-react";
import JobTitleService from "../../services/jobTitleService";
import CityService from "../../services/cityService";
import WorkTypeService from "../../services/workTypeService";
import WorkPlaceService from "../../services/workPlaceService";


export default function JobAdvertFilter({ handleOnFilter }) {
    const [jobTitles, setJobTitles] = useState([]);
    const [cities, setCities] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);

    useEffect(() => {
        let jobTitleService = new JobTitleService();
        let cityService = new CityService();
        let workTypeService = new WorkTypeService();
        let workPlaceService = new WorkPlaceService();

        jobTitleService
            .getJobTitles()
            .then((response) => setJobTitles(response.data.data));
        cityService.getCities().then((response) => setCities(response.data.data));
        workTypeService
            .getWorkTypes()
            .then((response) => setWorkTypes(response.data.data));
        workPlaceService
            .getWorkPlaces()
            .then((response) => setWorkPlaces(response.data.data));
    }, []);

    const jobTitleOption = jobTitles.map((jobTitle, index) => ({
        key: index,
        text: jobTitle.jobTitle,
        value: jobTitle,
    }));

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city,
    }));

    const workTypeOption = workTypes.map((workType, index) => ({
        key: index,
        text: workType.typeName,
        value: workType,
    }));

    const workPlaceOption = workPlaces.map((workPlace, index) => ({
        key: index,
        text: workPlace.placeName,
        value: workPlace,
    }));

    const validationSchema = Yup.object().shape({
        search: Yup.string().min(1).max(25),
        minSalary: Yup.number(),
        maxSalary: Yup.number()
    });

    const initialValues = {
        search: undefined,
        jobTitle: undefined,
        city: undefined,
        workType: undefined,
        workPlace: undefined,
        minSalary: undefined,
        maxSalary: undefined
    };

    const onSubmit = (values) => {
        // alert(JSON.stringify(values))
        handleOnFilter(values)
    };

    return (
        <>
            <h1>Kariyer Hedefindeki İşi Bul</h1>
            <Segment raised style={{ textAlign: "left", padding: "15px" }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="ui large form">
                        <Input
                            name="search"
                            placeholder="Ara"
                            icon="search"
                            iconPosition="left"
                        />
                        <Divider clearing />
                        <Dropdown
                            name="jobTitle"
                            placeholder="İş Pozisyonu"
                            multiple
                            selection
                            options={jobTitleOption}
                        />
                        <Divider hidden />
                        <Dropdown
                            name="city"
                            placeholder="Şehir"
                            multiple
                            selection
                            options={cityOption}
                        />
                        <Divider hidden />
                        <Dropdown
                            name="workType"
                            placeholder="Çalışma Tipi"
                            multiple
                            selection
                            options={workTypeOption}
                        />
                        <Divider clearing />
                        <Dropdown
                            name="workPlace"
                            placeholder="Çalışma Yeri"
                            multiple
                            selection
                            options={workPlaceOption}
                        />
                        <Divider clearing />
                        <Input
                            name="minSalary"
                            placeholder="Min. Maaş"
                            icon="money"
                            iconPosition="left"
                            type="number"
                        />
                        <Divider clearing />

                        <Input
                            name="maxSalary"
                            placeholder="Max. Maaş"
                            icon="money"
                            iconPosition="left"
                            type="number"
                        />
                        <Divider clearing />

                        <Button  color="teal" size="large" style={{ marginTop: "35px" }} type="submit">
                            Filtrele
                        </Button>
                    </Form>
                </Formik>
            </Segment>
        </>
    );
}
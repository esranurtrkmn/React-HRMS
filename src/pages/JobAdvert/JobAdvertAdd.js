import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid, Header, Image } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobTitleService from "../../services/jobTitleService";
import WorkTypeService from "../../services/workTypeService";
import WorkPlaceService from "../../services/workPlaceService";
import JobAdvertService from "../../services/jobAdvertService";
import { useHistory } from "react-router-dom";
import * as moment from 'moment'

export default function JobAdvertAdd() {

    let jobAdvertService = new JobAdvertService();
    const JobAdvertAddSchema = Yup.object().shape({
        applicationDeadline: Yup.date().nullable().required("Son Başvuru Tarihi Boş Geçilemez"),
        jobDescription: Yup.string().required("Zorunlu"),
        jobTitle: new Yup.ObjectSchema().required("Zorunlu"),
        workType: new Yup.ObjectSchema().required("Zorunlu"),
        workPlace: new Yup.ObjectSchema().required("Zorunlu"),
        numberOfActiveJobs: Yup.string().required("Zorunlu").min(1, "1 den küçük olamaz"),
        city: new Yup.ObjectSchema().required("Zorunlu"),
        minSalary: Yup.number().min(0, "Sıfırdan küçük olamaz").required("Zorunlu"),
        maxSalary: Yup.number().min(0, "Sıfırdan küçük olamaz").required("Zorunlu")
    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            jobDescription: "",
            jobTitle: "",
            workType: "",
            workPlace: "",
            numberOfActiveJobs: "",
            city: "",
            minSalary: "",
            maxSalary: "",
            applicationDeadline: "",
        },
        validationSchema: JobAdvertAddSchema,
        onSubmit: (values) => {
            values.employer = { id: 51 };
            jobAdvertService.add(values).then((result) => console.log(result.data.data));
            alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
            history.push("/jobadverts");

        },
    });

    const [workTypes, setWorkTypes] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobTitles, setJobTitles] = useState([]);

    useEffect(() => {
        let workTypeService = new WorkTypeService();
        let workPlaceService = new WorkPlaceService();
        let cityService = new CityService();
        let jobTitleService = new JobTitleService();

        workTypeService.getWorkTypes().then((result) => setWorkTypes(result.data.data));
        workPlaceService.getWorkPlaces().then((result) => setWorkPlaces(result.data.data));
        cityService.getCities().then((result) => setCities(result.data.data));
        jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
    }, []);

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
    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city,
    }));
    const jobTitleOption = jobTitles.map((jobTitle, index) => ({
        key: index,
        text: jobTitle.jobTitle,
        value: jobTitle,
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    return (
        <div>
            <Header as="h3" color="teal" textAlign="left">
                <Image src="https://res.cloudinary.com/dtewzgzgk/image/upload/v1623772439/interim-hr-experts-icon_di1e9w.png" /> İş İlanı Kayıt Portalı
            </Header>
            <Card fluid>
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                            <Dropdown
                                clearable
                                item
                                placeholder="İş başlığı"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "jobTitle")
                                }
                                onBlur={formik.onBlur}
                                id="jobTitle"
                                value={formik.values.jobTitle}
                                options={jobTitleOption}
                            />
                            {formik.errors.jobTitle && formik.touched.jobTitle && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobTitle}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                                clearable
                                item
                                placeholder="Lokasyon"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "city")
                                }
                                onBlur={formik.onBlur}
                                id="city"
                                value={formik.values.city}
                                options={cityOption}
                            />
                            {formik.errors.city && formik.touched.city && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.city}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Türü"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workPlace")
                                }
                                onBlur={formik.onBlur}
                                id="workPlace"
                                value={formik.values.workPlace}
                                options={workPlaceOption}
                            />
                            {formik.errors.workPlace && formik.touched.workPlace && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workPlace}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Süresi"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workType")
                                }
                                onBlur={formik.onBlur}
                                id="workType"
                                value={formik.values.workType}
                                options={workTypeOption}
                            />
                            {formik.errors.workType && formik.touched.workType && (
                                <div className={"ui pointing red basic label"}>{formik.errors.workType}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı(min)"
                                        value={formik.values.minSalary}
                                        name="minSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.minSalary && formik.touched.minSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.minSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı(max)"
                                        value={formik.values.maxSalary}
                                        name="maxSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.maxSalary && formik.touched.maxSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.maxSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>

                                    <Input
                                        style={{ width: "100%" }}
                                        id="numberOfActiveJobs"
                                        name="numberOfActiveJobs"
                                        error={Boolean(formik.errors.numberOfActiveJobs)}
                                        onChange={formik.handleChange}
                                        value={formik.values.numberOfActiveJobs}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="Açık Pozisyon sayısı"
                                    />
                                    {formik.errors.numberOfActiveJobs && formik.touched.numberOfActiveJobs && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.numberOfActiveJobs}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>

                                    <Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.applicationDeadline)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "applicationDeadline")
                                        }
                                        value={formik.values.applicationDeadline}
                                        onBlur={formik.handleBlur}
                                        name="applicationDeadline"
                                        placeholder="Son Başvuru Tarihi"
                                    />
                                    {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.applicationDeadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <TextArea
                                placeholder="İş Özeti"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.jobDescription).toString()}
                                value={formik.values.jobDescription}
                                name="jobDescription"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.jobDescription && formik.touched.jobDescription && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobDescription}
                                </div>
                            )}
                        </Form.Field>
                        <Button
                            color="teal"
                            content="Ekle"
                            labelPosition="right"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}

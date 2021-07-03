import React, { useEffect, useState } from 'react'
import JobTitleService from '../../services/jobTitleService'
import { Form } from 'semantic-ui-react'

export default function JobTitleDropdown({onChangeEvent, value}) {

    const [jobTitles, setJobTitles] = useState([])

    useEffect(() => {
        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
    }, [])


    return (
        <div>
            <Form.Select
                placeholder='iş Pozisyonu seçiniz'
                label="iş Pozisyonu"
                name="jobTitle"
                search
                options={jobTitles.map((x, index) => {
                    return { text: x.jobTitle, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value={value}
            />
        </div>
    )
}

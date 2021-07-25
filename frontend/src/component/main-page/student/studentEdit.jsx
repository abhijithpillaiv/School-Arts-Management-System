import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Form from './studentEditsub'

function studentEdit() {
    const{id}=useParams()
    const [Details, setDetails] = useState(null)
    useEffect(() => {
        axios.get('/api/student/studentDetail/'+id).then((res) => {
            setDetails(res.data);  
        })
    }, [])

    return Details ? <Form preData={Details} /> : <div>Loading...</div>
    }
export default studentEdit

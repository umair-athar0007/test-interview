import React, { useEffect } from "react";
import { useState } from "react";
import Select from 'react-select';



export function Test() {
    const options = [
        { value: 'math', label: 'math' },
        { value: 'urdu', label: 'urdu' },
        { value: 'english', label: 'english' },
    ];
    const [teacheroptions, setteacheroptions] = useState([])
    const [allStudents, setAllStudents] = useState([])
    const [record, setrecord] = useState([])
    const initalStudent = {
        name: "",
        Dob: "",
        subject: "",

    }
    const [formData, setformData] = useState(initalStudent)
    const Tintial = {
        Sname: "",
        SDob: "",
        Ssubject: "",
        teacherName: "",
        marks: ""
    }
    const [teacherData, setteacherData] = useState(Tintial)

    const handelSubmitFormStudent = (e) => {
        e.preventDefault()
        setAllStudents([...allStudents, formData])
        console.log(formData)
        setformData(initalStudent)

    }
    const handelSubmitTeacherForm = (e) => {
        e.preventDefault()
        setrecord([...record, teacherData])

        setteacherData(Tintial)

    }
    const handelChange = (e) => {
        const { value, name } = e.target
        setformData((pre) => ({ ...pre, [name]: value }))
    }
    useEffect(() => {
        const Toptions = allStudents.map((eachS) => {
            setteacherData((pre) => ({ ...pre, Sname: eachS.name }))
            setteacherData((pre) => ({ ...pre, SDob: eachS.Dob }))
            setteacherData((pre) => ({ ...pre, Ssubject: eachS.subject }))
            return {
                value: eachS.name, label: eachS.name
            }
        })
        setteacheroptions(Toptions)
    }, [allStudents])
    // useEffect(() => {
    //     const Toptions = allStudents.map((eachS) => {
    //         return {
    //             value: eachS.name, label: eachS.name
    //         }
    //     })

    //     setteacheroptions(Toptions)
    // }, [teacherData])
    console.log(teacheroptions)
    console.log(allStudents)
    return (<div>

        <h2>
            test
        </h2>


        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>


            <div>
                <h2>Student Form</h2>
                <form onSubmit={handelSubmitFormStudent}>
                    <div >
                        <h2>Name</h2>
                        <input type="text" name="name" value={formData.name} onChange={handelChange} />
                    </div>
                    <div>
                        <h2>DOB</h2>
                        <input type="date" name="Dob" value={formData.Dob} onChange={handelChange} />
                    </div>
                    <div>
                        <h2>Subject</h2>
                        <div style={{ width: "150px" }}>

                            <Select
                                value={formData.subject}
                                onChange={(e) => { setformData((pre) => ({ ...pre, subject: e.value })) }}
                                options={options}
                            />
                        </div>
                    </div>


                    <button type="submit">Save </button>
                </form>
            </div>
            <div>
                <h2>Teacher Form</h2>
                <form onSubmit={handelSubmitTeacherForm}>
                    <div >
                        <h2>Name</h2>
                        <input type="text" name="teacherName" value={teacherData.teacherName} onChange={(e) => { setteacherData((pre) => ({ ...pre, teacherName: e.target.value })) }} />
                    </div>
                    <div >
                        <h2>Subject</h2>
                        <input type="text" value={teacherData.Ssubject} />
                    </div>

                    <div>
                        <h2>Select Student</h2>
                        <div style={{ width: "150px" }}>

                            <Select
                                value={formData.subject}
                                onChange={(e) => {
                                    setteacherData((pre) => ({ ...pre, subject: e.value }))
                                }}
                                options={teacheroptions}
                            />
                        </div>
                    </div>

                    <div >
                        <h2>marks</h2>
                        <input type="text" name="marks" value={teacherData.marks} onChange={(e) => { setteacherData((pre) => ({ ...pre, marks: e.target.value })) }} />
                    </div>



                    <button type="submit">Save </button>
                </form>
            </div>
        </div>
        <div>
            {record && record.length > 0 &&
                <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h2>Name</h2>
                        <h2>TeacherName</h2>
                        <h2>SubjectName</h2>
                        <h2>Marks</h2>
                    </div>
                    {
                        record.map((rc, index) => {
                            return <div key={index}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <h2>{rc.Sname}</h2>
                                    <h2>{rc.teacherName}</h2>
                                    <h2>{rc.Ssubject}</h2>
                                    <h2>{rc.marks}</h2>
                                   
                                </div>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    </div>)
}
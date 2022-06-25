import React, { useEffect, useState } from 'react'
import styles from "../../styles/Tleftnavbar.module.css"


// Prop data for demo purposes
const courseList = [
    {
        courseno:1,
        coursename:"Maths",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"6 p.m to 7 p.m",
        announcements:"Today's lecture is on the topic of geometry"
    },
    {
        courseno:2,
        coursename:"Science",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"7 p.m to 8 p.m",
        announcements:"Today we will discuss Human anatomy"
    }
]
// Prop data for demo purposes
const assignment = [
    {
        name:"robin",
        link:"google.com",
        score:9
    },
    {
        name:"bob",
        link:"google.com",
        score:6
    },
    {
        name:"john",
        link:"google.com",
        score:8
    },
    {
        name:"arya",
        link:"google.com",
        score:7
    },
    {
        name:"sansa",
        link:"google.com",
        score:9
    }

]

function TContent() {

    // actual method
    // load data dynamically from the server

    // const [courseList,setList] = useState([]);
    // const requestList = async () =>{
    //     const response = await fetch('http://localhost:8000/teacher', {
    //           credentials: 'include',
    //       });

    //     const content = await response.json()
        
    // }
    // useEffect(()=>{
    //     requestList()
    // },[])


    return (
        <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>

            {
                courseList.map((course)=>{
                    return (
                        <div className={styles.tabs}>
                            <div className={styles.categories}>
                                <h2>{course.coursename}</h2>
                                <p>Class timings: {course.timings}</p>
                                <span>Meeting Link: <span><a href={course.zoomlink} className={styles.links}>Link</a></span></span>
                                <p>{course.announcements}</p>
                            </div>
                        </div>
                    )
                })
            } 
        </div>
        <hr/>
        <div className={styles.assignmentContainer}>
            <h1>Assignments</h1>
            <div className={styles.table1}>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student</th>
                    <th scope="col">Assignment Link</th>
                    <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        assignment.map((details,i)=>{
                            return (
                                <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{  details.name.charAt(0).toUpperCase() + details.name.slice(1)}</td>
                                <td><a href={details.link} className={styles.links}>Link</a></td>
                                <td><div class="form-group">
                                    <label for="exampleInputEmail1">Score</label>
                                    <input type="Score" class="form-control" id="exampleInputScore1" aria-describedby="ScoreHelp" placeholder="Enter Score Out of 10" />
                                    
                                </div>
                                </td>
                                </tr>
                            )
                        })
                    }

                    

                    
                </tbody>
                </table>

                
            </div>
        </div>
    </div>
    )
}
export default TContent
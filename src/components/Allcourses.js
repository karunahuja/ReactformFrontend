import React, { useState, useEffect } from 'react';
import Course from './Course';

import { Button } from 'reactstrap'
import base_url from "./../api/bootapi";
import axios from 'axios'
import { toast } from 'react-toastify';

const Allcourse = () => {

    useEffect(() => {
        document.title = "All Courses"
    }, []);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(

            (response) => {

                //console.log(response);
                console.log(response.data);
                toast.success("Courses loaded",
                {
                    position:"bottom-center"
                });
                setCourses(response.data);
            },
            (error) => {
                //for error message

                console.log(error);
                toast.error("Error loading courses");


            }
        );
    };

    //calling loading course function 

    useEffect(() => {
        getAllCoursesFromServer();
    }, [])




    const [courses, setCourses] = useState([]);


    const updateCourses=(id)=>{
             
        setCourses(courses.filter((c)=>c.id!=id));


    }

    return (
        <div className="text-center">
            <Button onClick={() => {

                console.log("test");

                setCourses([...courses, {
                    title: "Angular Course 1",
                    description: "This is demo"
                },
                ])
            }}

            ></Button>
            <h1 >All Courses</h1>
            <p>List of courses are</p>
            {
                courses.length > 0 ? courses.map((item) =>

                    <Course key={item.id} course={item}
                    update={updateCourses}
                      />



                ) : "No courses Available"
            }

        </div>


    )



}


export default Allcourse;

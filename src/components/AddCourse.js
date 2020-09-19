import React, { Fragment,useEffect,useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';

import base_url from "./../api/bootapi";
import { toast } from 'react-toastify';


const AddCourse = () => {

    useEffect(() => {
        document.title="Add Courses"
    },[]);


    const [course,setCourse]=useState({});


    const handleForm=(e)=>{

        console.log(course);

        postDatatoServer(course);

        e.preventDefault();

    }

    //creating function to post data to server

    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(

            (response) => {

                //console.log(response);
                console.log(response.data);
                console.log("success");
                toast.success("Success");
                
            },
            (error) => {
                //for error message

                console.log(error);
                toast.error("Error loading courses");


            }
        );
    };




    return (

        <div>
            <h1 className="text-center my-3">Fill Course Details</h1>

            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }} type="text" name="userId" id="userId" placeholder="Enter" />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }} type="text" name="title" id="title" placeholder="Enter title" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }} type="textarea" style={{
                        height: 150
                    }} name="description" id="description" placeholder="Enter description" />
                </FormGroup>


                <Container className="text-center">   
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>

            </Form>


        </div>


    )


}
export default AddCourse;
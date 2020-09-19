import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter,Container
  } from 'reactstrap';

  import axios from 'axios';

  import base_url from "./../api/bootapi";
  import { toast } from 'react-toastify';


  const Course=( {course,update })=> {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(

            (response) => {

                console.log("success");
                toast.success("Success");
             
                update(id);
            },
            (error) => {
                //for error message

                console.log(error);
                toast.error("Error loading courses");


            }
        );
    };

return (
        <div >
      <Card className="text-center">
       
        <CardBody >
          <CardTitle className="font-weight-bold">{course.title}</CardTitle>
          <CardSubtitle className="font-weight-bold">{course.description}</CardSubtitle>
          <CardText>ENROLL NOW</CardText>
         <Container className="text-center">
         <Button onClick={()=>{
             
             deleteCourse(course.id);
             
         }} color="danger">Delete</Button>
          <Button color="warning" className="ml-3">Update</Button>
          </Container>
          
        </CardBody>
      </Card>
    </div>
    )
}

export default Course;

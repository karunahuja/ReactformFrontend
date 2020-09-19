import React, { useState, useEffect } from 'react';
import { Jumbotron, Button,Container } from 'reactstrap';

const Home=()=>{

    useEffect(() => {
        document.title="Home"
    },[]);



    return (

        <div>
    <Jumbotron className="text-center">
        <h1 className="display-3">Karun Ahuja</h1>
        <p className="lead">This is a simple react website developed By me.</p>
       
        <Container>

            <Button color="primary">Start Using</Button>
        </Container>


      </Jumbotron>


        </div>




    )



}

export default Home;
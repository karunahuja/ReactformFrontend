import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Button, Container,Row,Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home'
import Course from './components/Course'
import Allcourse from './components/Allcourses'
import AddCourse from './components/AddCourse'
import Menus from './components/Menu'
import {BrowserRouter as Router,Route} from 'react-router-dom'



function App() {

  const btnHandler=()=>{

    toast.error("this is my first message",
    {
      position:"top-center"
    });

  };

  return (
    <div>
<Router>

    <Container>

      <Header></Header>

      <Row>

        <Col md={4}>

          <Menus></Menus>
 
        </Col>

        <Col md={8}>

          <Route path="/" component={Home} exact></Route>
          <Route path="/add-course" component={AddCourse} exact></Route>
          <Route path="/view-courses" component={Allcourse} exact></Route>

        Content Side

        </Col>

      </Row>



    </Container>
    </Router> 
</div>
  );
}

export default App;

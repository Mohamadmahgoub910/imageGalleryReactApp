import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';



const Welcome = () => {
    return (
        <Jumbotron>
            <h1>Hello, World</h1>
            <p> This application use api of unsplash and display images </p>
            <Button variant="primary" href="https://unsplash.com/"
                target="_blank" >Learn more </Button>
        </Jumbotron>
    );
}
export default Welcome
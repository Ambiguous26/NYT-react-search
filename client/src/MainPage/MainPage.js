/** Import the components that will be displayed on the page */
import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Column} from "../../components/Grid";
import {Title, Input, Button} from "../../components/Form";
import API from "../../utils/API";

/** Define the page structure */
class MainPage extends Component{
    /** Define the state of the page */
    state = {
        articles: "",
        topic: "",
        startDate: "",
        endDate: ""
    };
    /** Upon loading the page */
    componentDidMount = () => {
        /** Call upon the load function */
        this.loadArticles();
    };
    /** Change the state of variables to display the articles */
    loadArticles = () =>{
        /** Reach into the API to retreive the articles */
        API.getArticles().then(res => 
            this.setState({articles: res.data})
        );
    };
    /** Handle the ability to save a liked article */
    saveArticle = () =>{

    };
    /** Handle deleting a given article */
    deleteArticle = () =>{

    };
    /** Chane the state variables as they're being typed in in the input */
    handleInputChange = event =>{
        /** Deconstruct the event targeted into separate variables, name and value */
        const {name, value} = event.target; 
        /** Change the state variables as needed */
        this.setState({
            /** The state variable with the name of the target will receive the value value */
            /** For example, the input with a name="target" will return [name] = "target" */
            /** This allows the state variable "target" to be changed to the value that was input */
            [name]: value
        });
    };
    handleFormSubmission = event =>{
        event.preventDefault();
        /** Assure that a topic has been entered */
        if (this.state.topic){
            
        };
    };
    /** Main function */
    render() {
        return (
            <div>
                <Jumbotron/>
                <Container>
                    <Row>
                        <Column size="md-2"/>
                        <Column size="md-8">
                                <Title><h1>Search</h1></Title>
                                <Input 
                                    heading="Topic"
                                    /** Set the value equal to the value of the topic */
                                    /** And changes as the state changes */
                                    value = {this.state.topic}
                                    /** As the input is being changed, refresh the state variable */
                                    onChange={this.handleInputChange}
                                    /** Making sure the name is the same as the state variable that will be changed */
                                    /** This ensures the destructuring works in the handeInputChange function */
                                    name="topic"
                                />
                                <Input 
                                    heading="Start Year"
                                    /** Set the value equal to the value of the startDate */
                                    /** And changes as the state changes */
                                    value = {this.state.startDate}
                                    /** As the input is being changed, refresh the state variable */
                                    onChange={this.handleInputChange}
                                    /** Making sure the name is the same as the state variable that will be changed */
                                    /** This ensures the destructuring works in the handeInputChange function */
                                    name="startDate"
                                />
                                <Input 
                                    heading="End Year"
                                    /** Set the value equal to the value of the endDate */
                                    /** And changes as the state changes */
                                    value = {this.state.endDate}
                                    /** As the input is being changed, refresh the state variable */
                                    onChange={this.handleInputChange}
                                    /** Making sure the name is the same as the state variable that will be changed */
                                    /** This ensures the destructuring works in the handeInputChange function */
                                    name="endDate"
                                />
                                <Button
                                    /** Disable the button if no topic has been input */
                                    disabled={!(this.state.topic)}
                                    /** Upon clicking the button, allow submission of the form */
                                    onClick={this.handleFormSubmission}
                                >
                                    Search
                                </Button>
                        </Column>
                        <Column size="md-2"/>
                    </Row>
                    <Row>
                        <Column size="md-2"></Column>
                        <Column size="md-8">
                            <Title><h1>Results</h1></Title>
                            
                        </Column>
                    </Row>
                    <Row>
                        <Column size="md-2"></Column>
                        <Column size="md-8">
                            <Title><h1>Saved Articles</h1></Title>
                            
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    };
};
export default MainPage;
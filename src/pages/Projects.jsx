import React from "react";
import '../styles/Projects.css';
import Card from "../components/Card";
import Cat from '../assets/cat.png';
import Weather from '../assets/weather.png';
import Todo from '../assets/todo.png'


function Projects(){
    return(
        <div id="projects" className="projects">
            <h1 style={{textAlign:"center"}}>Projects</h1>
            <div className="cards-container">
                <div className="cards">
                    <img src={Weather}></img>
                    <h2>Weather App</h2>
                    <p>A responsive weather app that displays real-time weather data using the OpenWeatherMap API</p>
                    <div className="tech-stack">
                        <h4>React</h4>
                        <h4>CSS</h4>
                        <h4>OpenWeatherMap API</h4>
                    </div>
                    <a href="https://github.com/Tharunputta157/ReactJS-WeatherApp" target="_blank"><button>Github</button></a>
                </div>

                <div className="cards">
                    <img src={Cat}></img>
                    <h2>Purrfect Planner</h2>
                    <p>A React-based task management app with cat-themed aesthetics. Plan your day with purrfection!</p>
                    <div className="tech-stack">
                        <h4>React</h4>
                        <h4>CSS</h4>
                        <h4>JavaScript</h4>
                        <h4>React Router</h4>
                    </div>
                    <a href="https://github.com/Tharunputta157/ReactJS-PurrfectPlanner_App" target="_blank"><button>Github</button></a>
                </div>
                <div className="cards">
                    <img src={Todo}></img>
                    <h2>To-Do List</h2>
                    <p>A simple and responsive React To-Do List app for managing daily tasks with ease.</p>
                    <div className="tech-stack">
                        <h4>React</h4>
                        <h4>CSS</h4>
                        <h4>HTML</h4>
                        <h4>JavaScript</h4>
                    </div>
                    <a href="https://github.com/Tharunputta157/ReactJs-ToDoList" target="_blank"><button>Github</button></a>
                </div>

            </div>
        </div>
    )
}

export default Projects;
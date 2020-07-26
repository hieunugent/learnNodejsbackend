import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import "./projectpage.css";
import ProjectDataService from "../../../../services/projectService";


const ProjectFrom =(props) => {
    return (
        <div className="leftaligning">
            <h2> {props.nameProject}</h2>
            <h3> {props.DescriptionProject } </h3>
        </div>
    );
}

export default function Project() {
   
    const [listProject, setListProject] = useState([]);
       
    useEffect(() => {
      retrieveProject();
    }, []);
    const handleNewProject =(event)=> {

            const {name, value} = event.target;
            setProjectInfo({
                ...projectFormInfo,
                [name]:value
            });

    };
    const addListProject = (newProject)=> {
        setListProject(preList => {
            return [...preList, newProject];
        });
    };
    const saveProject = () => {
        var data = {
            nameProject:projectFormInfo.nameProject,
            DescriptionProject: projectFormInfo.DescriptionProject,
        };
    
        console.log(data);
        addListProject(projectFormInfo);
        ProjectDataService.create(data)
            .then(response => {
              setProjectInfo({
                nameProject:response.data.nameProject,
                DescriptionProject: response.data.DescriptionProject,
              });
              console.log(response.data);
              
            }).catch(e=> {
                console.log(e);
                
            });

          setProjectInfo(initialProject);
    };
    
    const initialProject={
       
        nameProject:"",
        DescriptionProject:"",

    };
    const [projectFormInfo, setProjectInfo] = useState(
        initialProject
    );

      const retrieveProject = () => {
        ProjectDataService.getAll()
          .then((response) => {
            setListProject(response.data);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }; 


    return (
        <div className="">
            <h1> Project Start</h1>
            <div className="projectcss">
          
                <TextField
                    className="inputBox"
                    id="project-name"
                    name="nameProject"
                    label="Project Name"
                    value={projectFormInfo.nameProject}
                    placeholder="type your new project name"   
                    onChange={handleNewProject}
                    style={{marginRight:8}}
                    variant="standard"
                />
                <TextField
                    className="inputBox"
                    id="project-description"
                    name="DescriptionProject"
                    label="Description Project"
                    value={projectFormInfo.DescriptionProject}
                    placeholder="type your Description of your Project"
                    onChange={handleNewProject}
                    style={{marginRight:8}}
                    variant="standard"
                />
               
            </div>
             <div className="submitButton"> 
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={saveProject}

                >
                    <PostAddIcon fontSize="large" />
                    Submit Project
                </Button> 
             </div>
                    
            <div>
              <h1> Show All project that you have</h1>

              {listProject.map((list, index) => {
                return(
                    <div key={`${index}-${list.nameProject}`}>
                        <ProjectFrom
                            id={index}
                            value={list}
                            nameProject={list.nameProject}
                            DescriptionProject={list.DescriptionProject}
                        />
                    </div>
                );
              })}
           </div>
        </div>
    )
}
import React from "react";
import { useQuery } from "@apollo/client";
import Client from "./Client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import Project from "./Project";

const Projects = () => {
  const { loading, errors, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (errors) return <p>Error</p>;

  console.log(data);
  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-3">
          {data.projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <h2>No Projects</h2>
      )}
    </>
  );
};

export default Projects;

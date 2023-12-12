import React, { useState } from "react";
import ProjectPropOne from "./itemProp/ProjectPropOne";
import ProjectData from "../../data/project/ProjectData.json";

const AllData = ProjectData;

const ProjectFive = ({ colSize, parentClass, perPageShow }) => {


  return (
    <div
      className={`section section-padding-equal pt--200 pt_md--80 pt_sm--60 ${
        parentClass ? parentClass : ""
      }`}
    >
      <div className="container-fluid plr--30">
        <div
          className={`row row-cols-1 ${
            colSize ? colSize : "row-cols-sm-2 row-cols-xl-3"
          }`}
        >
          {AllData.map((portfoliData) => (
            <div className="col" key={portfoliData.id}>
              <ProjectPropOne projectStyle="" portfolio={portfoliData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFive;

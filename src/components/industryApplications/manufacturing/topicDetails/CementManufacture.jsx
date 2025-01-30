import React from "react";

import { objectives } from "../../../utility/projectData/manufactureData/cementManufacture/objectivesData";
import { constraints } from "../../../utility/projectData/manufactureData/cementManufacture/constraintsData";
import { successCriteria } from "../../../utility/projectData/manufactureData/cementManufacture/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/manufactureData/cementManufacture/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/manufactureData/cementManufacture/problemStatement";
import ProjectDetailsPage from "./ProjectDetailsPage";


import cementmanufacture from "../../../../assets/projectImage/cementmanufacturing.webp";
import cementArch from "../../../../assets/architecture/cementarchitecture.jpg"

const CementManufacture = () => {
  const headerTitle = "Cement manufacturing automation";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={cementmanufacture}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={cementArch}
        />
      </div>
    
    </>
  );
};

export default CementManufacture;

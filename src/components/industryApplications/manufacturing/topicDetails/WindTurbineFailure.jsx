import React from "react";

import { objectives } from "../../../utility/projectData/manufactureData/windTurbineFailure/objectivesData";
import { constraints } from "../../../utility/projectData/manufactureData/windTurbineFailure/constraintsData";
import { successCriteria } from "../../../utility/projectData/manufactureData/windTurbineFailure/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/manufactureData/windTurbineFailure/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/manufactureData/windTurbineFailure/problemStatement";
import ProjectDetailsPage from "./ProjectDetailsPage";

import windturbine from "../../../../assets/projectImage/windTurbine.png";

const WindTurbineFailure = () => {
  const headerTitle = "Wind Turbine Failure Prediction";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={windturbine}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
        />
      </div>
    </>
  );
};

export default WindTurbineFailure;

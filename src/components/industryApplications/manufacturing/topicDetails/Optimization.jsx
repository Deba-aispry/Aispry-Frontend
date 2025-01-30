import React from "react";

import { objectives } from "../../../utility/projectData/manufactureData/optimizationDowntime/objectivesData";
import { constraints } from "../../../utility/projectData/manufactureData/optimizationDowntime/constraintsData";
import { successCriteria } from "../../../utility/projectData/manufactureData/optimizationDowntime/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/manufactureData/optimizationDowntime/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/manufactureData/optimizationDowntime/problemStatement";
import ProjectDetailsPage from "./ProjectDetailsPage";

import optimization from "../../../../assets/projectImage/optimization.webp";
import machineArchi from "../../../../assets/architecture/downtimearchitecture.png"


const Optimization = () => {
  const headerTitle = "Optimization of Machine Downtime";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={optimization}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={machineArchi}
        />
      </div>
    </>
  );
};

export default Optimization;

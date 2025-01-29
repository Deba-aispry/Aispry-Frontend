import React from "react";

import { objectives } from "../../../utility/projectData/manufactureData/machineFailure/objectivesData";
import { constraints } from "../../../utility/projectData/manufactureData/machineFailure/constraintsData";
import { successCriteria } from "../../../utility/projectData/manufactureData/machineFailure/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/manufactureData/machineFailure/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/manufactureData/machineFailure/problemStatement";
import ProjectDetailsPage from "./ProjectDetailsPage";

import machine from "../../../../assets/projectImage/machine.png";

const MachineFailure = () => {
  const headerTitle =
    " Predictive Maintenance for PRIMA 13: Enhancing Operational Efficiency in Steel Rod Cutting and Bending";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={machine}
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

export default MachineFailure;

import React from "react";

import { objectives } from "../../../utility/projectData/healthCareData/autismDetection/objectivesData";
import { constraints } from "../../../utility/projectData/healthCareData/autismDetection/constraintsData";
import { successCriteria } from "../../../utility/projectData/healthCareData/autismDetection/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/healthCareData/autismDetection/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/healthCareData/autismDetection/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import autism from "../../../../assets/projectImage/autism.png";
import autismArch from "../../../../assets/architecture/autismarchitecture.png"

const AutismDetection = () => {
  const headerTitle = "Autism Detection";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={autism}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={autismArch}
        />
      </div>
    </>
  );
};

export default AutismDetection;

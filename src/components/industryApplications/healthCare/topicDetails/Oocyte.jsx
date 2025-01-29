import React from "react";

import { objectives } from "../../../utility/projectData/healthCareData/oocyte/objectivesData";
import { constraints } from "../../../utility/projectData/healthCareData/oocyte/constraintsData";
import { successCriteria } from "../../../utility/projectData/healthCareData/oocyte/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/healthCareData/oocyte/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/healthCareData/oocyte/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import oocyte from "../../../../assets/projectImage/oocyte.png";

const Oocyte = () => {
  const headerTitle = "Oocyte Project";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={oocyte}
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

export default Oocyte;

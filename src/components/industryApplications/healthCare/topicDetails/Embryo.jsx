import React from "react";

import { objectives } from "../../../utility/projectData/healthCareData/embryo/objectivesData";
import { constraints } from "../../../utility/projectData/healthCareData/embryo/constraintsData";
import { successCriteria } from "../../../utility/projectData/healthCareData/embryo/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/healthCareData/embryo/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/healthCareData/embryo/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import embryo from "../../../../assets/projectImage/embryo.png";

const Embryo = () => {
  const headerTitle =
    "AI-Driven Embryo Viability Assessment for Optimized IVF Outcomes";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={embryo}
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

export default Embryo;

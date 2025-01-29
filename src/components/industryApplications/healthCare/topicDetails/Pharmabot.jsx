import React from "react";

import { objectives } from "../../../utility/projectData/healthCareData/pharmabot/objectivesData";
import { constraints } from "../../../utility/projectData/healthCareData/pharmabot/constraintsData";
import { successCriteria } from "../../../utility/projectData/healthCareData/pharmabot/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/healthCareData/pharmabot/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/healthCareData/pharmabot/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import pharmabot from "../../../../assets/projectImage/pharmabot.png";

const Oocyte = () => {
  const headerTitle =
    "PharmaBot: A Natural Response Chatbot for Drug Classification and Information (LLM)";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={pharmabot}
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

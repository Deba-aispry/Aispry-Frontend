import React from "react";

import { objectives } from "../../../utility/projectData/ecommerceData/inventryAI/objectivesData";
import { constraints } from "../../../utility/projectData/ecommerceData/inventryAI/constraintsData";
import { successCriteria } from "../../../utility/projectData/ecommerceData/inventryAI/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/ecommerceData/inventryAI/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/ecommerceData/inventryAI/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import textextraction from "../../../../assets/projectImage/textextraction.png";

const StoreBills = () => {
  const headerTitle = "Text Extraction from Store Bills";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={textextraction}
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

export default StoreBills;

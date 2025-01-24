import React from "react";

import { objectives } from "../../../utility/projectData/manufactureData/objectivesData";
import { constraints } from "../../../utility/projectData/manufactureData/constraintsData";
import { successCriteria } from "../../../utility/projectData/manufactureData/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/manufactureData/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/manufactureData/problemStatement";

import ProjectDetailsPage from "./ProjectDetailsPage";

import steelImage from "../../../../assets/projectImage/steelImage.jpeg";
import InsightsIndex from "../../../insights&Achievements/InsightsIndex";
import ConnectWithUs from "../../../insights&Achievements/ConnectWithUs";

const ForecastingInventory = () => {
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={steelImage}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement = {ProblemStatement}
        />
      </div>
      <InsightsIndex />
      <ConnectWithUs />
    </>
  );
};

export default ForecastingInventory;

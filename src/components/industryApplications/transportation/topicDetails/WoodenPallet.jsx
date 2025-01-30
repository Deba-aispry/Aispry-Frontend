import React from "react";

import { objectives } from "../../../utility/projectData/transportationData/woodenPallet/objectivesData";
import { constraints } from "../../../utility/projectData/transportationData/woodenPallet/constraintsData";
import { successCriteria } from "../../../utility/projectData/transportationData/woodenPallet/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/transportationData/woodenPallet/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/transportationData/woodenPallet/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import woodenPallet from "../../../../assets/projectImage/woodenpallet.png";
import forecastingArch from "../../../../assets/architecture/forecastingarchitecture.png"

const WoodenPallet = () => {
  const headerTitle = "Wooden Pallet Forecasting";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={woodenPallet}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={forecastingArch}
        />
      </div>
    </>
  );
};

export default WoodenPallet;

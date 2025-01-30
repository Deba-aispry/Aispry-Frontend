import React from "react";

import { objectives } from "../../../utility/projectData/healthCareData/oocyte/objectivesData";
import { constraints } from "../../../utility/projectData/healthCareData/oocyte/constraintsData";
import { successCriteria } from "../../../utility/projectData/healthCareData/oocyte/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/healthCareData/oocyte/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/healthCareData/medicalInventory/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import medicalinventory from "../../../../assets/projectImage/medicalinventory.png";
import medicalArch from "../../../../assets/architecture/inventoryarchitecture.png";

const MedicalInventory = () => {
  const headerTitle = "Optimization in Medical Inventory";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={medicalinventory}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={medicalArch}
        />
      </div>
    </>
  );
};

export default MedicalInventory;

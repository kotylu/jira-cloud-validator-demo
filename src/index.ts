import { getFieldForIssue } from "./issue";
import { ASSIGNEE, getField, SPRINT } from "./fields";
import ValidatorResponse from "./interface/validatorResponse";
import ValidatorRequest from "./interface/validatorRequest";

export const requireAssignee = async(data: ValidatorRequest) : Promise<ValidatorResponse> => {
  return await requireFieldValidatorResponse(data.issue.key, ASSIGNEE);
};

export const requireSprint = async(data: ValidatorRequest) : Promise<ValidatorResponse> => {
  console.log(data);
  return await requireFieldValidatorResponse(data.issue.key, SPRINT);
};



const requireFieldValidatorResponse = async(issueKey: string, field: string) : Promise<ValidatorResponse> => {
  const fieldValue = await getFieldForIssue(issueKey, field);
  const fieldObject = await getField(field);
  return {
    result: !isNullOrUndefined(fieldValue),
    errorMessage: `${fieldObject.name} is required`
  };

}

const isNullOrUndefined = (obj: any) : boolean => {
  return obj === null || obj === undefined;
}
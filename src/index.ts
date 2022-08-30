import { getFieldForIssue } from "./issue";
import { ASSIGNEE, getField, SPRINT } from "./fields";
import ValidatorResponse from "./interface/validatorResponse";
import ValidatorRequest from "./interface/validatorRequest";

export const requireAssignee = async(data: ValidatorRequest) : Promise<ValidatorResponse> => {
  return await requireFieldValidatorResponse(data.issue.key, ASSIGNEE);
};

export const requireSprint = async(data: ValidatorRequest) : Promise<ValidatorResponse> => {
  return await requireFieldValidatorResponse(data.issue.key, SPRINT);
};

export const createValidator = ({issue, transition}) : ValidatorResponse => {
  /*
    there is a problem caused by running validator before Issue is created
    so issue param is empty (no key nor ID) 
    atlassian says they logged it but they don't mention issue where it is tracked
    https://community.developer.atlassian.com/t/jira-workflow-validator-in-create-transition-expression-has-complete-issue-object-lambda-function-only-id-key/51965
  */
  
  return {
    result: true,
    errorMessage: "no message"
  };
};



const requireFieldValidatorResponse = async(issueKey: string, field: string) : Promise<ValidatorResponse> => {
  const fieldValue = await getFieldForIssue(issueKey, field);
  const fieldObject = await getField(field);
  return {
    result: !isNullOrUndefined(fieldValue),
    errorMessage: `${fieldObject.name} is required`
  };
};

const isNullOrUndefined = (obj: any) : boolean => {
  return obj === null || obj === undefined;
};
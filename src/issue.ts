import api, { route } from "@forge/api";

export const getIssue = async(issueKey:string) => {
  const res = await api
    .asApp()
    .requestJira(route`/rest/api/latest/issue/${issueKey}`);

  const data = await res.json();
  return data;
};


export const getFieldForIssue = async(issueKey:string, field:string) => {
  const issue = await getIssue(issueKey);
  return issue["fields"][field];
}
import api, { route } from "@forge/api";

export const SPRINT = "customfield_10020";
export const ASSIGNEE = "assignee";

export const getField = async(fieldId: string) => {
  const res = await api
    .asApp()
    .requestJira(route`/rest/api/latest/field`);

  const data:any[] = await res.json();
  return data.filter(item => item.id === fieldId)[0];
}
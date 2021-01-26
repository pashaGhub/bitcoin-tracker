import { IAnalysisReducer } from "../reducers/analysisReducer";

export type AnalysisAction = { type: "UPDATE_DATA"; payload: IAnalysisReducer };

export const updateAnalysis = (data: IAnalysisReducer): AnalysisAction => ({
  type: "UPDATE_DATA",
  payload: data,
});

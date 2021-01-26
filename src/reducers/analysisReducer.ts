import { AnalysisAction } from "../actions/analysisActions";

export interface ITag {
  name: string;
  used: number;
}

export interface IAnalysisReducer {
  analizedUrl: string;
  uniqueTags: Array<ITag>;
  mostCommonTag: string;
}

const initialState = {
  analizedUrl: "",
  uniqueTags: [],
  mostCommonTag: "",
};

const analysisReducer = (
  state: IAnalysisReducer = initialState,
  action: AnalysisAction
) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default analysisReducer;

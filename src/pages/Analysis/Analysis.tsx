import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAllReducers } from "../../reducers";
import { ITag, IAnalysisReducer } from "../../reducers/analysisReducer";
import { updateAnalysis } from "../../actions/analysisActions";
import { getPageInfo } from "../../services/analysisServices";

import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/Button/Button";

const Analysis: React.FC = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const { analizedUrl, uniqueTags, mostCommonTag } = useSelector<
    IAllReducers,
    IAllReducers["analysis"]
  >((state) => state.analysis);

  const dispatch = useDispatch();

  const handleClick = async () => {
    if (inputUrl) {
      const response: any = await getPageInfo(inputUrl);

      const data = response.responseXML;

      // define all unique tags and each of it frequency
      let tags: Array<ITag> = [];
      for (let tag of data.getElementsByTagName("*")) {
        if (!tags.find((t: ITag) => t.name === tag.tagName)) {
          tags.push({ name: tag.tagName, used: 1 });
        } else {
          let findTag = tags.filter(
            (singleTag: ITag) => singleTag.name === tag.tagName
          )[0];
          findTag = { ...findTag, used: findTag.used + 1 };
          tags.splice(
            tags.findIndex((t: ITag) => t.name === tag.tagName),
            1,
            findTag
          );
        }
      }

      // find most common tag
      const commonTag = tags.sort((a: ITag, b: ITag) =>
        b.used > a.used ? 1 : a.used > b.used ? -1 : 0
      )[0];

      // set analysis state structure
      const stateData: IAnalysisReducer = {
        analizedUrl: response.responseURL,
        uniqueTags: tags,
        mostCommonTag: commonTag.name,
      };

      dispatch(updateAnalysis(stateData));
    } else {
      alert("No URL was provided! Please enter your URL and try again.");
    }
  };

  return (
    <div data-testid="analysis-component" className="analysis">
      <div className="analysis__search">
        <CustomInput
          title="Your url.."
          value={inputUrl}
          setValue={setInputUrl}
        />
        <Button text="Submit" eventHandler={handleClick} />
      </div>
      <div className="analysis__results">
        <h2>Analized URL:</h2>
        <div>{analizedUrl ? analizedUrl : "There is no url"}</div>
        <h2>All unique tags:</h2>
        <div>
          {uniqueTags.length ? (
            uniqueTags.map((t: ITag) => <span key={t.name}>{t.name} ,</span>)
          ) : (
            <span>There is no unique tags..</span>
          )}
        </div>
        <h2>The most commonly used tag:</h2>
        <div>{mostCommonTag ? mostCommonTag : "None..."}</div>
      </div>
    </div>
  );
};

export default Analysis;

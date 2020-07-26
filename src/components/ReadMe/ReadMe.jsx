import React, { useState, useCallback, useEffect } from "react";
import { octoParams, authorizedOktokit } from "./octohelpers";
import axios from "axios";

const ReadMe = ({ repoURL, readmeURL, branch, ...rest }) => {
  const [state, setState] = useState({
    repo: undefined,
    readme: undefined,
    markdown: "",
  });
  const updateDisplay = useCallback(() => {
    const octoData = octoParams({ repoURL, branch });
    const readme = repoURL && !readmeURL ? octoData.detail.README : readmeURL;
    if (!state.readme) {
      setState({ ...state, readme });
      axios
        .get(readme)
        .then((res) => {
          octoData.params.text = res.data;
          authorizedOktokit.markdown
            .render({ ...octoData.params })
            .then((octoResponse) => {
              if (octoResponse.status === 200)
                setState({
                  repo: repoURL,
                  readme,
                  markdown: res.data,
                  gfm: octoResponse.data,
                });
            });
        })
        .catch((err) => setState({ ...state, repo: repoURL, readme, err }));
    }
  }, [branch, readmeURL, repoURL, state]);
  useEffect(() => {
    updateDisplay();
  }, [updateDisplay]);
  return (
    <>
      <div
        className="octo-readme"
        dangerouslySetInnerHTML={{ __html: state.gfm }}
        {...rest}
      />
    </>
  );
};

export default ReadMe;

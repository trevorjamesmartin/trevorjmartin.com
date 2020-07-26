import { Octokit } from "@octokit/rest";

const authorizedOktokit = new Octokit({
  headers: {
    Authorization: `token ${process.env.REACT_APP_OCTO_TOKEN}`,
  },
  mode: {
    RequestMode: "cors",
  },
});

/**
 * README.md download url determined by repoURL
 * @param {String} repoURL ie "https://github.com/your/project"
 * @param {String} branch *optional, defaults to master
 */
function GithubREADME({ repoURL, branch, returndetail }) {
  if (repoURL.slice(repoURL.length - 3).toUpperCase() === ".MD") {
    return undefined;
  }
  const result = {};
  const [protocol, blank, baseURL, ...rest] = repoURL.split("/");
  result.url = protocol + blank + "//";
  result.baseURL = baseURL;
  if (baseURL.toUpperCase() === "GITHUB.COM") {
    const [username, ...projectname] = rest;
    result.username = username;
    result.projectname = projectname.join("/");
    result.README = `https://raw.githubusercontent.com/${result.username}/${
      result.projectname
    }/${branch || "master"}/README.md`;
  }

  return returndetail
    ? result
    : result && result.README
    ? result.README
    : undefined;
}

function octoParams({ repoURL, branch, mdMode }) {
  const detail = GithubREADME({ repoURL, branch, returndetail: true });
  const context = `${detail.username}/${detail.projectname}`;
  const mode = mdMode || "gfm";
  return { params: { text: "", mode, context }, detail };
}

export { octoParams, authorizedOktokit };

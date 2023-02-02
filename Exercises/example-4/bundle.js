(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // githubClient.js
  var require_githubClient = __commonJS({
    "githubClient.js"(exports, module) {
      var GithubClient2 = class {
        getRepoInfo(repoName, callback) {
          fetch("https://api.github.com/repos/" + repoName).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = GithubClient2;
    }
  });

  // githubModel.js
  var require_githubModel = __commonJS({
    "githubModel.js"(exports, module) {
      var GithubModel2 = class {
        constructor() {
          this.repoInfo = null;
        }
        setRepoInfo(repoInfo) {
          this.repoInfo = repoInfo;
        }
        getRepoInfo() {
          return this.repoInfo;
        }
      };
      module.exports = GithubModel2;
    }
  });

  // githubView.js
  var require_githubView = __commonJS({
    "githubView.js"(exports, module) {
      var GithubView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          const submitButtonEl = document.querySelector("#submit-button");
          const repoInputEl = document.querySelector("#repo-name-input");
          submitButtonEl.addEventListener("click", () => {
            const repoName = repoInputEl.value;
            this.client.getRepoInfo(repoName, (repoData) => {
              console.log(repoData);
            });
          });
        }
        display() {
        }
      };
      module.exports = GithubView2;
    }
  });

  // index.js
  var GithubClient = require_githubClient();
  var GithubModel = require_githubModel();
  var GithubView = require_githubView();
  var client = new GithubClient();
  var model = new GithubModel();
  var view = new GithubView(model, client);
})();

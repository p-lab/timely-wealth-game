System.config({
  defaultJSExtensions: true,
  transpiler: false,
  typescriptOptions: {
    "module": "system",
    "implicitAny": false
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  globalEvaluationScope: false,

  packages: {
    "lib": {
      "defaultExtension": false
    }
  },

  meta: {
    "*.ts": {
      "loader": "ts"
    }
  },

  map: {
    "domready": "npm:domready@1.0.8",
    "lodash": "npm:lodash@4.0.1",
    "ts": "github:frankwallis/plugin-typescript@2.5.5",
    "github:frankwallis/plugin-typescript@2.5.5": {
      "typescript": "npm:typescript@1.8.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@4.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

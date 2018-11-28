module.exports = {
//   "parser": "babel-eslint",
    "extends": [
      "airbnb",
      "prettier",
      // "prettier/react"
    ],
    //   "plugins": ["jest", "prettier", "module-resolver"],
    "env": {
      "browser": true,
      "jest": true,
      "node": true
    },
    "rules": {
    //   "semi": ["error", "always"]
    //   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    //   "module-resolver/use-alias": 2,
      "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "never",
        "functions": "ignore"
      }],
    //   "no-underscore-dangle": 0,
    }
}


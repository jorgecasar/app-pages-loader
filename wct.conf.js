module.exports = {
  "verbose": true,
  "plugins": {
    "local": {
      "browsers": ["chrome"]
    },
    istanbul: {
      dir: "./coverage",
      reporters: ["text-summary", "lcov"],
      include: [
        "**/*.html",
        "**/*.js"
      ],
      exclude: [
        "/polymer/polymer.js",
        "/platform/platform.js"
      ]
    }
  }
}
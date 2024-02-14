const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    app: "./src/assets/js/index.js"
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
};
/* module.exports = {
    mode: "production",
    entry: {
      app: "./js/achievement.js"
    },
    output: {
      filename: "ds.achievement.js",
      path: path.resolve(__dirname, "dist")
    }
  }; */
/*   module.exports = {
    mode: "production",
    entry: {
      app: "./js/application.js"
    },
    output: {
      filename: "ds.application.js",
      path: path.resolve(__dirname, "dist")
    }
  }; */
/*   module.exports = {
    mode: "production",
    entry: {
      app: "./js/carousel.js"
    },
    output: {
      filename: "ds.carousel.js",
      path: path.resolve(__dirname, "dist")
    }
  };
 */
/*   module.exports = {
    mode: "production",
    entry: {
      app: "./js/contact.js"
    },
    output: {
      filename: "ds.contact.js",
      path: path.resolve(__dirname, "dist")
    }
  }; */
/*   module.exports = {
    mode: "production",
    entry: {
      app: "./js/dropMenu.js"
    },
    output: {
      filename: "ds.dropMenu.js",
      path: path.resolve(__dirname, "dist")
    }
  }; */
/*   module.exports = {
    mode: "production",
    entry: {
      app: "./js/achievementCarousel.js"
    },
    output: {
      filename: "ds.achievementCarousel.js",
      path: path.resolve(__dirname, "dist")
    }
  }; */
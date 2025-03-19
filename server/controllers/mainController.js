exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs Notes",
    description: "Free NodeJs Notes App",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page.ejs",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "NoteNestPro",
    description: "Free NodeJs Notes App",
  };
  res.render("about", {
    locals,
    layout: "../views/layouts/front-page.ejs",
  });
};

exports.faqs = async (req, res) => {
  const locals = {
    title: "FAQs - NodeNestPro",
    description: "Frequently Asked Questions about the NodeJs Notes App",
  };
  res.render("faqs", {
    locals,
    layout: "../views/layouts/front-page.ejs",
  });
};

// New route for Features Page
exports.feature = async (req, res) => {
  const locals = {
    title: "Features - NodeNestPro",
    description: "Explore the features of the NodeNestPro App",
  };
  res.render("feature", {
    locals,
    layout: "../views/layouts/front-page.ejs",
  });
};

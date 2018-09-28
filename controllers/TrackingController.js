// ! TEST : Will be deleted
exports.testController = (req, res) => {
  res.render('index', { title: 'TEST PAGE' });
};

// ? requests the raw source of the website and passes it on to the next method
exports.requestSource = (req, res, next) => {
  // Make Request to get the sites raw HTML.
};

// ? examines the source to find if there are any known tracking scripts
exports.examineSource = (req, res) => {
  // Examine the source code of the website
  // Isolate the <head>
  // examine the <head> to known tracking links
  // Render a results page (res.render('results' {trackers: []}))
};

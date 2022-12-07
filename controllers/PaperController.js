const paper = require("../models/paper_model");

// Display list of all papers.
exports.paper_list = (req, res) => {
  res.send("NOT IMPLEMENTED: paper list");
};

// Display detail page for a specific paper.
exports.paper_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: paper detail: ${req.params.id}`);
};

// Display paper create form on GET.
exports.paper_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: paper create GET");
};

// Handle paper create on POST.
exports.paper_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: paper create POST");
};

// Display paper delete form on GET.
exports.paper_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: paper delete GET");
};

// Handle paper delete on POST.
exports.paper_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: paper delete POST");
};

// Display paper update form on GET.
exports.paper_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: paper update GET");
};

// Handle paper update on POST.
exports.paper_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: paper update POST");
};
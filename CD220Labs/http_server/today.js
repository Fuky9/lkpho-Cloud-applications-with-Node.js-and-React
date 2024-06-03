module.exports.getDate = function getDate() {
  let aestTime = new Date().toLocaleString("en-US", {
    timeZone: "Autralia/Brisbane",
  });
  return new Date(aestTime);
};

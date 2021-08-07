const names = [
  "Add new ROM",
  "Download speed are quite slow",
  "ROM get some errors",
  "Laggy website",
];

let problems = [];

names.forEach((item, index) => {
  let problem = {
    string: item,
    value: item.toLowerCase().replaceAll(" ", "_"),
  };
  problems.push(problem);
});

export default problems;

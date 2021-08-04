// (?=.*jack)(?=.*james)
string = [
    "Softeq#rule",
    "anu #rulesofSofteq",
    "Softeqjazz#rule"
];
string.forEach(s => console.log(/(?=.*Softeq)(?=.*#rule)/.test(s)) );
document.write("(?=.*Softeq)(?=.*#rule)");
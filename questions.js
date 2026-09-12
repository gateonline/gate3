const questions = [

/* =====================================================
   Q1 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "A step-growth polymerization contains only bifunctional monomers. Under ideal conditions, which statement is correct?",

    options: [
        "Gelation occurs at p = 0.5",
        "Gelation occurs at p = 1",
        "Gelation does not occur",
        "Gelation occurs when X̄n becomes infinite"
    ],

    answer: 2,

    type: "MCQ",

    marks: 1
},


/* =====================================================
   Q2 — MSQ — 1 MARKS
   ===================================================== */

{
    question:
        "Which of the following polymers is/are synthesized by ring-opening polymerization? <span style=\"color:red;\">(G-24)</span>",

    options: [
        "Poly(lactic acid)",
        "Poly(ε-caprolactone)",
        "Poly(styrene)",
        "Poly(aniline)"
    ],

    correctAnswers: [0, 1],

    type: "MSQ",

    marks: 1
},


/* =====================================================
   Q3 — MSQ — 1 MARK
   ===================================================== */

{
    question:
        "Which of the following statements about chain-transfer agents is/are correct?",

    options: [
        "They can reduce the molecular weight of the polymer.",

        "They necessarily reduce the rate of polymerization.",

        "They can generate a new radical capable of initiating another polymer chain.",

        "They necessarily terminate the entire radical population."
    ],

    correctAnswers: [0, 2],

    type: "MSQ",

    marks: 1
},


/* =====================================================
   Q4 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Free-Radical Polymerization Kinetics\n\n" +

        "Rp ∝ [M][I]^(1/2)\n\n" +

        "If the initiator concentration is increased by a factor of 9, while monomer concentration remains constant, the rate of polymerization changes by:",

    options: [
        "3 times",
        "6 times",
        "9 times",
        "81 times"
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},


/* =====================================================
   Q5 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A Nylon-6,6 sample has an average degree of polymerization of 520. The repeat-unit molecular mass is 226 g/mol. If the two chain ends together contribute 18 g/mol, the number-average molecular weight is:",

    options: [
        "117,520 g/mol",
        "117,538 g/mol",
        "117,556 g/mol",
        "117,800 g/mol"
    ],

    answer: 1,

    type: "MCQ",

    marks: 2
},


/* =====================================================
   Q6 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A polymer has specific volumes:\n\n" +

        "Completely amorphous = 1.18 cm³/g\n" +

        "Completely crystalline = 1.06 cm³/g\n" +

        "Sample = 1.10 cm³/g\n\n" +

        "The mass-fraction crystallinity is closest to:",

    options: [
        "33%",
        "50%",
        "67%",
        "80%"
    ],

    answer: 2,

    type: "MCQ",

    marks: 2
},


/* =====================================================
   Q7 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Which polymer is expected to have the highest glass-transition temperature?",

    options: [
        "HDPE",
        "PMMA",
        "Poly(vinyl carbazole)",
        "Natural rubber"
    ],

    answer: 2,

    type: "MCQ",

    marks: 1
},


/* =====================================================
   Q8 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A mixture contains 60 mol% bifunctional monomer and 40 mol% trifunctional monomer. Assuming the Flory ideal gelation criterion, the approximate critical conversion is:",

    options: [
        "0.67",
        "0.75",
        "0.83",
        "0.95"
    ],

    answer: 2,

    type: "MCQ",

    marks: 2
},


/* =====================================================
   Q9 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "The propagation step of a free-radical copolymerization is represented by the following possible reaction steps:\n\n" +

        "P1: M1* + M1 → M1*       rate constant = k11\n" +

        "P2: M1* + M2 → M2*       rate constant = k12\n" +

        "P3: M2* + M1 → M1*       rate constant = k21\n" +

        "P4: M2* + M2 → M2*       rate constant = k22\n\n" +

        "The reactivity ratios are defined as:\n\n" +

        "r1 = k11/k12\n" +

        "r2 = k22/k21\n\n" +

        "and the feed mole ratio is F = [M1]/[M2].\n\n" +

        "If the growing radical is M1*, the probability of reaction P2 is: <span style=\"color:red;\">(G-24)</span>",

    options: [
        "1/(r1F + 1)",
        "F/(F + r2)",
        "r1F/(r1F + 1)",
        "1/(r2F + 1)"
    ],

    answer: 0,

    type: "MCQ",

    marks: 2
},


/* =====================================================
   Q10 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Consider the following statements:\n\n" +

        "1. High conversion is necessary for obtaining high molecular weight in step-growth polymerization.\n" +

        "2. Stoichiometric imbalance can limit molecular weight.\n" +

        "3. A trifunctional monomer can promote gelation.\n" +

        "4. Increasing initiator concentration always increases the molecular weight in free-radical polymerization.\n\n" +

        "Which statements are correct?",

    options: [
        "1, 2 and 3 only",
        "1 and 4 only",
        "2 and 3 only",
        "1, 2, 3 and 4"
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},


/* =====================================================
   Q11 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "For a copolymerization, r1 = 2, r2 = 0.5 and F = [M1]/[M2] = 3. What is the probability that an M1* radical reacts with M2?",

    options: [
        "0.143",
        "0.200",
        "0.333",
        "0.667"
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},


/* =====================================================
   Q12 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "For a binary free-radical copolymerization, the reactivity ratio of monomer M2 is r2 = 0.25. Which of the following statements is correct?",

    options: [
        "M2* strongly prefers reacting with M2.",

        "M2* strongly prefers reacting with M1.",

        "M1* strongly prefers reacting with M2.",

        "M2 cannot participate in copolymerization."
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},


/* =====================================================
   Q13 — MCQ — 2 MARK
   ===================================================== */

{
    question:
        "Match the Quantity with Its Dependence.\n\n" +

        "P. Rate of free-radical polymerization\n" +
        "Q. Number-average degree of polymerization for balanced step-growth\n" +
        "R. Critical conversion for ideal gelation\n" +
        "S. Reactivity ratio r1\n\n" +

        "1. Proportional to [I]^(1/2)\n" +
        "2. 1/(1-p)\n" +
        "3. 2/f_avg\n" +
        "4. k11/k12\n\n" +

        "Choose the correct matching.",

    options: [
        "P-1, Q-2, R-3, S-4",
        "P-2, Q-1, R-4, S-3",
        "P-1, Q-3, R-2, S-4",
        "P-4, Q-2, R-3, S-1"
    ],

    answer: 0,

    type: "MCQ",

    marks: 2
},


/* =====================================================
   Q14 — MCQ — 1 MARKS
   ===================================================== */

{
    question:
        "Match the Polymerization Type with the Appropriate Example.\n\n" +

        "P. Ring-opening polymerization\n" +
        "Q. Free-radical addition\n" +
        "R. Oxidative polymerization\n" +
        "S. Step-growth condensation\n\n" +

        "1. Polystyrene\n" +
        "2. Poly(ε-caprolactone)\n" +
        "3. Polyaniline\n" +
        "4. Nylon-6,6\n\n" +

        "Choose the correct matching.",

    options: [
        "P-2, Q-1, R-3, S-4",
        "P-1, Q-2, R-3, S-4",
        "P-2, Q-3, R-1, S-4",
        "P-3, Q-1, R-2, S-4"
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},


/* =====================================================
   Q15 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "If a given polyethylene sample has specific volume v = 1.042 × 10^(-3) m³ kg^(-1), specific volume of the crystalline fraction vc = 0.989 × 10^(-3) m³ kg^(-1), and specific volume of the amorphous fraction va = 1.160 × 10^(-3) m³ kg^(-1), then the % crystallinity (based on mass fraction) of the polyethylene sample is ______ %. <span style=\"color:red;\">(G-24)</span>",

    type: "NAT",

    answer: 65,

    tolerance: 0.5,

    marks: 2
},


/* =====================================================
   Q16 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "A Nylon-6,6 sample has an average molecular mass of 67818 g/mol. The molecular mass of its repeating unit is 226 g/mol. Assuming an 18 g/mol end-group correction, calculate the average degree of polymerization.",

    type: "NAT",

    answer: 300,

    tolerance: 0.5,

    marks: 2
},


/* =====================================================
   Q17 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "A Nylon-6,6 polymer has an average degree of polymerization of 750. Taking the repeating-unit molecular mass as 226 g/mol and an end-group correction of 18 g/mol, calculate its molecular mass in units of 10^3 g/mol.",

    type: "NAT",

    answer: 169.52,

    tolerance: 0.01,

    marks: 2
},


/* =====================================================
   Q18 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "The average degree of polymerization of Nylon-6,6 is 415. If the molecular mass of the repeating unit is 226 g/mol and the end-group correction is 18 g/mol, calculate the molecular mass of the polymer to the nearest integer.",

    type: "NAT",

    answer: 93808,

    tolerance: 0.5,

    marks: 2
},


/* =====================================================
   Q19 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "A Nylon-6,6 polymer has a molecular mass of 113018 g/mol. The repeating-unit molecular mass is 226 g/mol. Assuming an end-group correction of 18 g/mol, determine the average degree of polymerization.",

    type: "NAT",

    answer: 500,

    tolerance: 0.5,

    marks: 2
},


/* =====================================================
   Q20 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "A Nylon-6,6 sample has an average degree of polymerization of 560. The molecular mass of the repeating unit is 226 g/mol. If the end-group correction is 18 g/mol, calculate the molecular mass of the polymer in kg/mol.",

    type: "NAT",

    answer: 126.58,

    tolerance: 0.01,

    marks: 2
},


/* =====================================================
   Q21 — MCQ — 1 MARKS
   ===================================================== */

{
    question:
        "Which statements are correct?\n\n" +

        "1. Isotactic polypropylene can crystallize because of its regular stereochemical arrangement.\n\n" +

        "2. Atactic polypropylene generally has poor crystallizability.\n\n" +

        "3. Tacticity has no effect on polymer properties.\n\n" +

        "4. Regular stereochemistry can improve chain packing.",

    options: [
        "1 and 2 only",
        "1, 2 and 4 only",
        "2 and 3 only",
        "1, 3 and 4 only"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},
/* =====================================================
   Q22 — MCQ — 1 MARKS
   ===================================================== */

{
    question:
        "A polymer has: Specific volume of amorphous phase = 1.18 cm³/g\n\n" +

        "Specific volume of crystalline phase = 1.06 cm³/g\n\n" +

        "Specific volume of sample = 1.10 cm³/g\n\n" +

        "The mass fraction crystallinity is closest to:",

    options: [
        "33%",
        "50%",
        "67%",
        "83%"
    ],

    answer: 2,

    type: "MCQ",

    marks: 1,

];

import BlackBeans from '../../../images/Nutrations/blackBeans.jpg'
import Chocolate from '../../../images/Nutrations/darkChocolate.jpg'
import Eggs from '../../../images/Nutrations/eggs.jpg'
import Tomatos from '../../../images/Nutrations/tomatoes.jpg'
import Salmon from '../../../images/Nutrations/wildSalmon.jpg'
import Beef from '../../../images/Nutrations/beef.jpg'
import Chicken from '../../../images/Nutrations/chicken.jpg'
import Cheese from '../../../images/Nutrations/Chees.jpg'
import Grain from '../../../images/Nutrations/grains.jpg'


var Nutration = [{
        type:'fatloss',
        img: Eggs,
        title: 'Eggs',
        nutriants: ['Amount Per', 'Calories', 'Total Fat', 'Cholesterol', 'Sodium', 'Potassium', 'Total Carbohydrate', 'Protein', 'Iron', 'Vitamin B-6', 'Magnesium', 'Calcium', 'Vitamin D', 'Cobalamin'],
        values: ['100 grams', 155, '11 g', '373 mg', '124 mg', '126 mg', '1.1 g', '13 g', '6%', '5%', '2%', '5%', '21%', '18%'],
        description: "Sunny side up, scrambled, hard-boiled, or fried—it doesn't matter. A pan, spatula, and carton of eggs are all you need to fry some serious flab. Eggs are one of the best sources of choline, a major fat-burning nutrient that helps turn off the genes responsible for belly-fat storage. Bonus: eggs are a great source of lean protein, which can set the fat-burning pace for your entire day when eaten for breakfast. In a study of 21 men published in the journal Nutrition Research, half were fed a breakfast of bagels while half ate eggs. The egg group were observed to have a lower response to ghrelin, were less hungry three hours later and consumed fewer calories for the next 24 hours!"
    }, {
        img: BlackBeans,
        type:'fatloss',
        title: 'Black Beans',
        nutriants: ['Nutrients per Serving', 'Calories', 'Protein', 'Fat', 'Carbohydrates', 'Fiber', 'Sugar'],
        values: ['black beans (1/2 cup)', '114', '8g', '0g', '20g', '7g', '0g'],
        description: "Research suggests these magical pulses are one of the closest things we have to a fat-burning pill. For starters, beans are a great source of resistant starch, a type of slow-digesting, insoluble fiber that feeds the healthy bacteria in your gut, triggering the production of the chemical butyrate, which encourages the body to burn fat as fuel and reduces fat-causing inflammation. They're also one of the top sources of soluble fiber. A recent study by Wake Forest Baptist Medical Center researchers found that for every additional 10 grams of soluble fiber eaten per day, a study subject's belly fat was reduced by 3.7 percent over five years. Black beans? One cup boasts an impressive 4.8 grams of soluble fiber."
    }, {
        img: Chocolate,
        type:'fatloss',
        title: 'Dark Chocolate',
        nutriants: ['Nutrients per Serving', 'Calories', 'Protein', 'Fat', 'Carbohydrates', 'Fiber', 'Sugar'],
        values: ['1-ounce', '170', '2g', '12g', '13g', '3g', '7g'],
        description: "If you thought losing weight would mean giving up all your indulgences, look no further than dark chocolate. Louisiana State University researchers found that gut microbes in our stomach ferment chocolate and boost our body's production of gut-healthy polyphenolic compounds, including butyrate, a fatty acid that encourages the body to burn fat as fuel and turns off genes linked to inflammation. (Add fruit to the chocolate to boost fermentation and the release of the compounds.) Make sure you go with chocolate that has a cacao content of 70 percent or above—these have the highest concentrations of antioxidant polyphenols."
    }, {
        img: Salmon,
        type:'fatloss',
        title: 'Wild Salmon',
        nutriants: ['Nutrients per Serving', 'Calories', 'Fat', 'Sodium', 'Protein', 'Vitamin B12', 'Vitamin D', "Omega 3s DHA & EPA"],
        values: ['for 3 ounces (85g)', '121', '5.4g', '37.4g', '22g', '3.8 mcg', '14.2 mcg', '730 mg'],
        description: "The fat-burning equation is simple: Protein builds muscle. More muscle = more fat burning. And fish is one of the healthiest sources of lean protein—especially wild salmon, says dietitian Lauren Minchen, MPH, RD, CDN. It's also a rich source of anti-inflammatory omega-3 fatty acids, which fuel fat burning, block fat storage and aid weight loss, she explains. But that's not all: 'Getting enough protein and healthy fat also helps to reduce cravings and has been shown to help keep weight off for longer,' adds Alissa Rumsey, MS, RD, CDN, CSCS."
    }, {
        img: Tomatos,
        type:'fatloss',
        title: 'Sun-Dried Tomatoes',
        nutriants: ['Nutrients per', 'Calories', 'Protein', 'Fat', 'Carbohydrates', 'Fiber', 'Sugar', 'Potassium '],
        values: ['100 g', '258', '14 g', '3 g', '56 g', '12 g', '38 g', '1565 mg'],
        description: "You say tomato, I say 9-oxo-ODA. That's the name of a compound found in the brilliant red fruits that Japanese researchers recently discovered can effectively activate your DNA to burn more fat. Tomatoes are also brimming in beta-carotene and lycopene, two potent antioxidants that mop up harmful compounds that promote fat storage. One Journal of Nutrition study found people whose diets contained the most beta-carotene and lycopene had the smallest waists and the least belly fat. And at only 5 calories apiece, grab a few sun-dried tomatoes! Cooked tomatoes contain more bioavailable lycopene than raw tomatoes, according to Cornell University researchers."
    },





    {
        img: Beef,
        type:'MuscleGain',
        title: 'Lean Beef',
        nutriants: ['Nutrients per','Calories' ,'Fat', 'Cholesterol', 'Sodium', 'Potassium', 'Protein '],
        values: ['100 g', '250', '15 g', '90 mg', '72 mg', '318 mg', '26 g'],
        description: "This should be a staple of your diet if you want to gain muscle mass. Lean beef is loaded with all sorts of things conducive to muscle growth, including iron, zinc, and B-vitamins. More importantly, it provides your body with high-quality protein (not all proteins are equal), and a high level of amino acid that works with insulin to promote muscle growth."
    },
    {
        img: Chicken,
        type:'MuscleGain',
        title: 'Skinless Chicken',
        nutriants: ['Nutrients per','Calories','Fat','Cholesterol','Sodium','Protein '],
        values: ['112 g','110','1 g', '55 mg','370 mg', '23 g' ],
        description: "Like beef, chicken is an excellent source of high-quality protein, which is important for muscle maintenance and repair, bone health, and weight maintenance. And of course, there are so many ways you can cook and prepare chicken."
    },
    {
        img: Cheese,
        type:'MuscleGain',
        title: 'Cottage Cheese',
        nutriants: ['Nutrients per','Calories','Fat','Cholesterol','Sodium','Protein' ,'Potassium','Carbohydrate'],
        values: ['100 g','98','4.3 g', '17 mg','364 mg', '11 g','104 mg','3.4 g' ],
        description: "Not many people know this, but cottage cheese is almost entirely pure casein protein. Casein is a slow-digesting protein, which means it is perfect for muscle maintenance. This is useful especially for people who have no choice but to go long periods without eating. Cottage cheese is also an excellent source of vitamin B12, calcium, and other important nutrients."
    },
    {
        img: Grain,
        type:'MuscleGain',
        title: 'Whole Grains',
        nutriants: ['Nutrients per','Calories','Fat','Cholesterol','Sodium','Protein' ,'Potassium','Carbohydrate'],
        values: ['100 g','265','4.2 g', '0 mg','381 mg', '13 g','230 mg','43 g' ],
        description: "Whole grains digest more efficiently and provide more nutrients than refined grains. This promotes sustained energy levels and overall health. In particular, brown rice can help boost your growth hormone levels, which are critical for encouraging lean muscle growth, fat loss, and strength gains."
    }
]

export default Nutration;
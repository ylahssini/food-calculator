const fs = require('fs');
const path = require('path');
const xml2json = require('xml2json');
const _ = require('lodash');
const chalk = require('chalk');

function init() {
    try {
        console.log(chalk.black.bgWhite.bold('S T A R T   M I G R A T I O N'));

        fs.readFile(path.join(process.cwd(), './server/data.xml'), async (error, data) => {
            if (error) {
                console.log(error);
            } else {
                const json = JSON.parse(xml2json.toJson(data));
                const items = json.Food_Display_Table.Food_Display_Row;
                const groupedItems = Object.entries(_.groupBy(items, 'Food_Code'));
                const collections = [];

                for (let i = 0; i < groupedItems.length; i += 1) {
                    const [key, foods] = groupedItems[i];
                    console.log(chalk.cyan(`🚀 Process starting key code ${key} with ${foods.length} item(s)`));

                    for (let j = 0; j < foods.length; j += 1) {
                        const food = foods[j];

                        try {
                            const inc = foods.length > 0 ? `_${j}` : '';
                            const id = `${key}${inc}`;

                            const item = {
                                id,
                                keycode: key,
                                name: food.Display_Name,
                                portion: {
                                    default: parseFloat(food.Portion_Default),
                                    name: food.Portion_Display_Name,
                                    amount: parseFloat(food.Portion_Amount),
                                },
                                factor: parseFloat(food.Factor),
                                increment: parseFloat(food.Increment),
                                multiplier: parseFloat(food.Multiplier),
                                grains: parseFloat(food.Grains),
                                whole_grains: parseFloat(food.Whole_Grains),
                                vegetables: {
                                    total: parseFloat(food.Vegetables),
                                    orange: parseFloat(food.Orange_Vegetables),
                                    drkgreen: parseFloat(food.Drkgreen_Vegetables),
                                    starchy: parseFloat(food.Starchy_vegetables),
                                    other: parseFloat(food.Other_Vegetables),
                                },
                                fruits: parseFloat(food.Fruits),
                                milk: parseFloat(food.Milk),
                                meats: parseFloat(food.Meats),
                                soy: parseFloat(food.Soy),
                                drybeans: parseFloat(food.Drybeans_Peas),
                                oils: parseFloat(food.Oils),
                                solid_fats: parseFloat(food.Solid_Fats),
                                satured_fats: parseFloat(food.Saturated_Fats),
                                added_sugars: parseFloat(food.Added_Sugars),
                                alcohol: parseFloat(food.Alcohol),
                                calories: parseFloat(food.Calories),
                            };

                            /* const doc = collection.doc(id);
                            await doc.set(item); */
                            collections.push(item);

                            console.log(chalk.green('🎉 Document added'));
                        } catch (error) {
                            console.log(chalk.red('💀 Document not added'));
                            console.log(error);
                        }
                    }

                    console.log(chalk.cyan(`✔️ Finish key code ${key} with ${foods.length} item(s)\n\n`));
                }

                fs.writeFileSync(path.join(__dirname, '../src/data.json'), JSON.stringify(collections));

                console.log(chalk.black.bgWhite.bold('E N D   M I G R A T I O N'));
            }
        });
    } catch (error) {
        console.log(error);
    }
}

init();

# Calorie Counter

**Tier:** 3-Advanced

Getting and staying healthy requires a combination of mental balance, 
exercise, and nutrition. The goal of the Calorie Counter app is to help the
user address nutritional needs by counting calories for various foods.

This app provides the number of calories based on the result of a user search
for a type of food. The U.S. Department of Agriculture MyPyramid Food Raw Data
will be searched to determine the calorie values.

Calorie Counter also provides you, the developer, with experience in transforming
raw data into a format that will make it easier to search. In this case, the
MyPyramid Food Raw Data file, which is an MS Excel spreadsheet, must be 
downloaded and transformed into a JSON file that will be easier to load and
search at runtime (hint: take a look at the CSV file format).

## User Stories

-   [v] Developer will implement load the MyPyramid data into a database or a
data structure other than an array for faster searching. 
-   [v] User can see an panel containing a food description input text box, 
a 'Search' button, and a 'Clear' button.
-   [v] User can enter search terms into the food description input text box.
-   [v] User can click on the 'Search' button to search for the matching food.
-   [v] User can see a warning message if no search terms were entered.
-   [v] User can see a warning message if no matches were found.
-   [v] User can see a list of the matching food items, portion sizes, and
calories in a scrollable results panel that is limited to 10 entries.
-   [v] User can click on the 'Clear' button to clear the search terms and 
results list. 

## Bonus features

-   [v] User can see the count of the number of matching food items adjacent to
the results list.
-   [ ] User can use a wildcard character in search terms.
-   [ ] User can see more than 10 entries from a search by clicking a Down
icon button to add more matching food items to the search results list.

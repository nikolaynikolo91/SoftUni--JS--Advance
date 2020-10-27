# Lab: Objects &amp; Classes


1.
## Towns to JSON

You&#39;re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes **&quot;|&quot;** and optionally spaces. The table will consist of exactly 3 columns **&quot;Town&quot;** , **&quot;**** Latitude ****&quot;** and **&quot;**** Longitude ****&quot;**. The **latitude** and **longitude** columns will always contain **valid numbers**. Check the examples to get a better understanding of your task.

### Input

The **input** comes as an array of strings – the first string contains the table&#39;s headings, each next string is a row from the table.

### Output

- The **output** should be an array of objects wrapped in **JSON.stringify()**.
- **Latitude** and **longitude** must be parsed to **numbers,** and represented till the **second digit after the decimal point**!


2.
## Sum by Town

You&#39;re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings representing towns and their incomes, every **even** index will be a **town** and every **odd** index will be an **income** belonging to that town. Create an object that will hold all the **towns as keys** and their **total income** (the sum of their incomes) **as values** to those keys and print it as a JSON.

### Input

The **input** comes as an array of strings - each even index is the name of a town and each odd index is an income belonging to that town.

### Output

The **output** should be printed on the console - JSON representation of the object containing all towns and their total incomes.


3.
## Populations in Towns

You have been tasked to create a register for different **towns** and their **population**.

### Input

The **input** comes as array of strings. Each element will contain data for a town and its population in the following format:

&quot; **{townName} \&lt;-\&gt; {townPopulation}**&quot;

If you receive the same town twice, **you should add** the **given population** to the **current one**.

### Output

As **output** , you must print all the towns, and their population.


4.
## From JSON to HTML Table

You&#39;re tasked with creating an HTML table of students and their scores. You will receive a single string representing an **array of objects** , the **table&#39;s headings** should be equal to the **object&#39;s keys** , while **each object&#39;s values** should be a **new entry** in the table. Any **text values** in an object should be **escaped** , in order to avoid introducing dangerous code into the HTML.

### Input

The **input** comes a **single string argument** (the array of objects).

### Output

The **output** should be printed on the console – for each **entry**** row **in the input print the** object ****representing**** it**.

### Note:

Object&#39;s **keys** will always be the **same.** Check more information for the **HTML Entity** [**here**](https://developer.mozilla.org/en-US/docs/Glossary/Entity) **.**

### HTML

You are provided with an HTML file to test your table in the browser.

| **index.html** |


5.
## Lowest Prices in Cities

You will be given several towns, with products and their price. You need to find **the lowest price** for **every product** and **the town it is sold at** for that price.

### Input

The **input** comes as array of strings. Each element will hold data about a **town** , **product** , and **its price** at that town. The **town** and **product** will be **strings** , the **price** will be a **number**. The input will come in the following format:

**{townName} | {productName} | {productPrice}**

If you receive the same **town** and **product**** more than once, **you should** update **the** old value **with the** new one**.

### Output

As **output** you must print **each**** product **with its** lowest price **and** the town **at which the product is** sold at that ****price**. If **two towns share** the **same lowest price** , print the one that was **entered first**.
The output, for every product, should be in the following format:

**{productName} -\&gt; {productLowestPrice} ({townName})**

The **order of output** is - **order of entrance**. See the examples for more info.


6.
## Person

Write a **class** that represents a personal record. It has the following properties, all set from the constructor:

- **firstName**
- **lastName**
- **age**
- **email**

And a method **toString()**, which prints a summary of the information. See the example for formatting details.

### Input

The constructor function will receive valid parameters.

### Output

The **toString()**method should **return** a string in the following format:

**&quot;{firstName} {lastName} (age: {age}, email: {email})&quot;**

Submit the class definition as is, **without** wrapping it in any function.


7.
## Get Persons

Write a function that returns an array of **Person** objects. Use the class from the previous task, create the following instances, and return them in an array:

For any empty cells, do not supply a parameter (call the constructor with less parameters).

### Input / Output

There will be **no input** , the data is static and matches the table above. As **output** , **return an array** with **Person**** instances**.

Submit a function that returns the required output.

8.
## Circle

Write a **class** that represents a **Circle**. It has only one data property - it&#39;s **radius** , and it is set trough the **constructor**. The class needs to have **getter** and **setter** methods for its **diameter** - the setter needs to calculate the radius and change it and the getter needs to use the radius to calculate the diameter and return it.

The circle also has a getter **area()**, which calculates and **returns** its area.

### Input

The constructor function and diameter setter will receive valid parameters.

### Output

The **diameter()** and **area()** getters should **return** numbers.

Submit the class definition as is, **without** wrapping it in any function.


9.
## Point Distance

Write a JS **class** that represents a **Point**. It has **x** and **y** coordinates as properties, that are set through the constructor, and a **static method** for finding the distance between two points, called **distance()**.

### Input

The **distance()** method should receive two **Point** objects as parameters.

### Output

The **distance()** method should **return** a number, the distance between the two point parameters.

Submit the class definition as is, **without** wrapping it in any function.


Page 5 of 5
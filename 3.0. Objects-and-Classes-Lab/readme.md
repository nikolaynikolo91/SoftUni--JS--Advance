# Lab: Objects &amp; Classes


1.
## Towns to JSON

You&#39;re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes **&quot;|&quot;** and optionally spaces. The table will consist of exactly 3 columns **&quot;Town&quot;** , **&quot;**** Latitude ****&quot;** and **&quot;**** Longitude ****&quot;**. The **latitude** and **longitude** columns will always contain **valid numbers**. Check the examples to get a better understanding of your task.

### Input

The **input** comes as an array of strings – the first string contains the table&#39;s headings, each next string is a row from the table.

### Output

- The **output** should be an array of objects wrapped in **JSON.stringify()**.
- **Latitude** and **longitude** must be parsed to **numbers,** and represented till the **second digit after the decimal point**!

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;| Town | Latitude | Longitude |&#39;,&#39;| Sofia | 42.696552 | 23.32601 |&#39;,&#39;| Beijing | 39.913818 | 116.363625 |&#39;] | [{&quot;Town&quot;:&quot;Sofia&quot;,&quot;Latitude&quot;:42.7,&quot;Longitude&quot;:23.32},
{&quot;Town&quot;:&quot;Beijing&quot;, &quot;Latitude&quot;:39.91, &quot;Longitude&quot;:116.36}] |
| [&#39;| Town | Latitude | Longitude |&#39;,&#39;| Veliko Turnovo | 43.0757 | 25.6172 |&#39;,&#39;| Monatevideo | 34.50 | 56.11 |&#39;] | [{&quot;Town&quot;:&quot;Veliko Turnovo&quot;,&quot;Latitude&quot;:43.08,&quot;Longitude&quot;:25.62},
{&quot;Town&quot;:&quot;Monatevideo&quot;,&quot;Latitude&quot;:34.5,&quot;Longitude&quot;:56.11}] |


2.
## Sum by Town

You&#39;re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings representing towns and their incomes, every **even** index will be a **town** and every **odd** index will be an **income** belonging to that town. Create an object that will hold all the **towns as keys** and their **total income** (the sum of their incomes) **as values** to those keys and print it as a JSON.

### Input

The **input** comes as an array of strings - each even index is the name of a town and each odd index is an income belonging to that town.

### Output

The **output** should be printed on the console - JSON representation of the object containing all towns and their total incomes.

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;Sofia&#39;,&#39;20&#39;,&#39;Varna&#39;,&#39;3&#39;,&#39;Sofia&#39;,&#39;5&#39;,&#39;Varna&#39;,&#39;4&#39;] | {&quot;Sofia&quot;:25,&quot;Varna&quot;:7} |
| [&#39;Sofia&#39;,&#39;20&#39;,&#39;Varna&#39;,&#39;3&#39;,&#39;sofia&#39;,&#39;5&#39;,&#39;varna&#39;,&#39;4&#39;] | {&quot;Sofia&quot;:20,&quot;Varna&quot;:3,&quot;sofia&quot;:5,&quot;varna&quot;:4} |


3.
## Populations in Towns

You have been tasked to create a register for different **towns** and their **population**.

### Input

The **input** comes as array of strings. Each element will contain data for a town and its population in the following format:

&quot; **{townName} \&lt;-\&gt; {townPopulation}**&quot;

If you receive the same town twice, **you should add** the **given population** to the **current one**.

### Output

As **output** , you must print all the towns, and their population.

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;Sofia \&lt;-\&gt; 1200000&#39;,&#39;Montana \&lt;-\&gt; 20000&#39;,&#39;New York \&lt;-\&gt; 10000000&#39;,&#39;Washington \&lt;-\&gt; 2345000&#39;,&#39;Las Vegas \&lt;-\&gt; 1000000&#39;] | Sofia : 1200000Montana : 20000New York : 10000000Washington : 2345000Las Vegas : 1000000 |
| [&#39;Istanbul \&lt;-\&gt; 100000&#39;,&#39;Honk Kong \&lt;-\&gt; 2100004&#39;,&#39;Jerusalem \&lt;-\&gt; 2352344&#39;,&#39;Mexico City \&lt;-\&gt; 23401925&#39;,&#39;Istanbul \&lt;-\&gt; 1000&#39;] | Istanbul : 101000Honk Kong : 2100004Jerusalem : 2352344Mexico City : 23401925 |


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

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;[{&quot;Name&quot;:&quot;Tomatoes &amp; Chips&quot;,&quot;Price&quot;:2.35},{&quot;Name&quot;:&quot;J&amp;B Chocolate&quot;,&quot;Price&quot;:0.96}]&#39;] | \&lt;table\&gt;\&lt;tr\&gt;\&lt;th\&gt;Name\&lt;/th\&gt;\&lt;th\&gt;Price\&lt;/th\&gt;\&lt;/tr\&gt;\&lt;tr\&gt;\&lt;td\&gt;Tomatoes &amp;amp; Chips\&lt;/td\&gt;\&lt;td\&gt;2.35\&lt;/td\&gt;\&lt;/tr\&gt;\&lt;tr\&gt;\&lt;td\&gt;J&amp;amp;B Chocolate\&lt;/td\&gt;\&lt;td\&gt;0.96\&lt;/td\&gt;\&lt;/tr\&gt;\&lt;/table\&gt; |
| [&#39;[{&quot;Name&quot;:&quot;Pesho \&lt;div\&gt;-a&quot;,&quot;Age&quot;:20,&quot;City&quot;:&quot;Sofia&quot;},
{&quot;Name&quot;:&quot;Gosho&quot;,&quot;Age&quot;:18,&quot;City&quot;:&quot;Plovdiv&quot;},{&quot;Name&quot;:&quot;Angel&quot;,&quot;Age&quot;:18,&quot;City&quot;:&quot;Veliko Tarnovo&quot;}]&#39;] | \&lt;table\&gt;\&lt;tr\&gt;\&lt;th\&gt;Name\&lt;/th\&gt;\&lt;th\&gt;Age\&lt;/th\&gt;\&lt;th\&gt;City\&lt;/th\&gt;\&lt;/tr\&gt;\&lt;tr\&gt;\&lt;td\&gt;Pesho &amp;lt;div&amp;gt;-a\&lt;/td\&gt;\&lt;td\&gt;20\&lt;/td\&gt;\&lt;td\&gt;Sofia\&lt;/td\&gt;\&lt;/tr\&gt;\&lt;tr\&gt;\&lt;td\&gt;Gosho\&lt;/td\&gt;\&lt;td\&gt;18\&lt;/td\&gt;\&lt;td\&gt;Plovdiv\&lt;/td\&gt;\&lt;/tr\&gt;\&lt;tr\&gt;\&lt;td\&gt;Angel\&lt;/td\&gt;\&lt;td\&gt;18\&lt;/td\&gt;\&lt;td\&gt;Veliko Tarnovo\&lt;/td\&gt;\&lt;/tr\&gt;\&lt;/table\&gt; |

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

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;Sample Town | Sample Product | 1000&#39;,&#39;Sample Town | Orange | 2&#39;,&#39;Sample Town | Peach | 1&#39;,&#39;Sofia | Orange | 3&#39;,&#39;Sofia | Peach | 2&#39;,&#39;New York | Sample Product | 1000.1&#39;,&#39;New York | Burger | 10&#39;] | Sample Product -\&gt; 1000 (Sample Town)Orange -\&gt; 2 (Sample Town)Peach -\&gt; 1 (Sample Town)Burger -\&gt; 10 (New York) |

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

### Example

| **Sample Input** |
| --- |
| let person = new Person(&#39;Anna&#39;, &#39;Simpson&#39;, 22, &#39;anna@yahoo.com&#39;);console.log(person.toString()); |
| **Output** |
| Anna Simpson (age: 22, email: anna@yahoo.com) |

7.
## Get Persons

Write a function that returns an array of **Person** objects. Use the class from the previous task, create the following instances, and return them in an array:

| **First Name** | **Last Name** | **Age** | **Email** |
| --- | --- | --- | --- |
| **Anna** | Simpson | 22 | anna@yahoo.com |
| **SoftUni** |
 |
 |
 |
| **Stephan** | Johnson | 25 |
 |
| **Gabriel** | Peterson | 24 | g.p@gmail.com |

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

### Examples

| **Sample Input** | **Output** |
| --- | --- |
| **let c = new Circle(2);****console.log(`Radius: ${c.radius}`);****console.log(`Diameter: ${c.diameter}`);****console.log(`Area: ${c.area}`); ****c.diameter = 1.6;**** console.log(`Radius: ${c.radius}`);****console.log(`Diameter: ${c.diameter}`);****console.log(`Area: ${c.area}`);** |
**Radius: 2**** Diameter: 4 ****Area: 12.566370614359172**** Radius: 0.8 ****Diameter: 1.6**** Area: 2.0106192982974678** |

9.
## Point Distance

Write a JS **class** that represents a **Point**. It has **x** and **y** coordinates as properties, that are set through the constructor, and a **static method** for finding the distance between two points, called **distance()**.

### Input

The **distance()** method should receive two **Point** objects as parameters.

### Output

The **distance()** method should **return** a number, the distance between the two point parameters.

Submit the class definition as is, **without** wrapping it in any function.

### Example

| **Sample Input** | **Output** |
| --- | --- |
| **let p1 = new Point(5, 5);****let p2 = new Point(9, 8);****console.log(Point.distance(p1, p2));** | **5** |

![](RackMultipart20201027-4-1ludjk3_html_63c6245aa4940ad8.gif) ![](RackMultipart20201027-4-1ludjk3_html_5f0f2ddacbac70d2.gif) ![](RackMultipart20201027-4-1ludjk3_html_51bd00be29b85496.gif) ![](RackMultipart20201027-4-1ludjk3_html_f746d52952cd7e91.gif)[![](RackMultipart20201027-4-1ludjk3_html_3aa486326bfa75e9.png)](https://softuni.org/)


Page 5 of 5
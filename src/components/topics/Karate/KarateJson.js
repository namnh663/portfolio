import React from 'react';
import '../Topic.css';

const KarateJson = () => {
    return (
        <div className="topic-detail">
            <h2>What is JSON</h2>
            <p>
                JSON stands for JavaScript Object Notation. JSON objects can be of two types: objects and arrays. Objects are enclosed in curly braces <code className="code">{'{}'}</code>, and arrays are enclosed in square brackets <code className="code">{'[]'}</code>. A typical JSON object contains key-value pairs separated by colons, with each pair separated by commas. Keys in a JSON object must be unique. An array is simply a list of values separated by commas, and each value has an index starting from 0.
            </p>
            <h3>JSON Structure</h3>
            <ul>
                <li><b>Simple Object</b>: A JSON object with key-value pairs.</li>
                <li><b>Nested Object</b>: A key in a JSON object that contains another JSON object.</li>
                <li><b>Array of Values</b>: A JSON array containing values.</li>
                <li><b>Array of Objects</b>: A JSON array containing JSON objects.</li>
            </ul>
            <h3>Data Types in JSON</h3>
            <ul>
                <li><b>String</b>: Enclosed in double quotes, e.g., <code className="code">"name": "John"</code>.</li>
                <li><b>Number</b>: Not enclosed in quotes, e.g., <code className="code">"age": 36</code>.</li>
                <li><b>Boolean</b>: Can be <code className="code">true</code> or <code className="code">false</code>, e.g., <code className="code">"isMarried": false</code>.</li>
                <li><b>Null</b>: Represents a null value, e.g., <code className="code">"wife": null</code>.</li>
            </ul>
            <h3>Manipulating JSON Data</h3>
            <p>Let's assume we have the following JSON object:</p>
            <pre>
                <code className="code">
                    {`{
                        "firstName": "John",
                        "lastName": "Smith",
                        "age": 36,
                        "cars": ["Honda", "BMW"],
                        "income": {
                            "Q1": 10000,
                            "Q2": 20000
                        },
                        "pets": [
                            {"type": "dog", "name": "Rex"},
                            {"type": "cat", "name": "Liza"}
                        ]}`}
                </code>
            </pre>
            <p>In Karate, we can manipulate this JSON object using various JSONPath expressions.</p>
            <ul>
                <li><b>Get Last Name</b>:
                    <pre>
                        <code className="code">
                            * def lastName = myObject.lastName
                        </code>
                    </pre>
                </li>
                <li><b>Get Second Car</b>:
                    <pre>
                        <code className="code">
                            * def secondCar = myObject.cars[1]
                        </code>
                    </pre>
                </li>
                <li><b>Get Income for Q2</b>:
                    <pre>
                        <code className="code">
                            * def q2Income = myObject.income.Q2
                        </code>
                    </pre>
                </li>
                <li><b>Get Type of First Pet</b>:
                    <pre>
                        <code className="code">
                            * def firstPetType = myObject.pets[0].type
                        </code>
                    </pre>
                </li>
                <li><b>Update Age to 40</b>:
                    <pre>
                        <code className="code">
                            * set myObject.age = 40
                        </code>
                    </pre>
                </li>
                <li><b>Update Cat's Name to Dog's Name</b>:
                    <pre>
                        <code className="code">
                            * set myObject.pets[1].name = myObject.pets[0].name
                        </code>
                    </pre>
                </li>
                <li><b>Add New Income for Q3</b>:
                    <pre>
                        <code className="code">
                            * set myObject.income.Q3 = 30000
                        </code>
                    </pre>
                </li>
                <li><b>Add a New Car</b>:
                    <pre>
                        <code className="code">
                            * set myObject.cars[] = 'Porsche'
                        </code>
                    </pre>
                </li>
                <li><b>Replace Honda with Tesla</b>:
                    <pre>
                        <code className="code">
                            * set myObject.cars[0] = 'Tesla'
                        </code>
                    </pre>
                </li>
                <li><b>Delete Record for Q2 Income</b>:
                    <pre>
                        <code className="code">
                            * remove myObject.income.Q2
                        </code>
                    </pre>
                </li>
                <li><b>Delete Second Car (BMW)</b>:
                    <pre>
                        <code className="code">
                            * remove myObject.cars[1]
                        </code>
                    </pre>
                </li>
            </ul>
            <h3>Summary</h3>
            <ul>
                <li><b>JSON Structure</b>: Objects and arrays.</li>
                <li><b>Possible Structures</b>: Simple objects, nested objects, simple arrays, arrays of objects.</li>
                <li><b>Data Types</b>: String, number, boolean, null.</li>
                <li><b>Manipulation</b>: Using JSONPath expressions, Karate allows easy manipulation of JSON data.</li>
            </ul>
        </div>
    );
};

export default KarateJson;

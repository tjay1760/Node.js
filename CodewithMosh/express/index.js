const Joi = require("joi");
const express = require('express');
const app = express();
app.use(express.json());

const people = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Josh" },
    { id: 4, name: "Gary" }
];

app.get('/', (req, res) => {
    res.send("Main");
});

app.get('/api/v1', (req, res) => {
    res.send(people);
});

app.post('/api/v1', (req, res) => {

    const result = validateCourse(req.body)

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const person = {
        id: people.length + 1,
        name: req.body.name,
    };

    people.push(person);
    res.send(person);
});

app.get("/api/v1/:id", (req, res) => {
    const person = people.find(c => c.id === parseInt(req.params.id));

    if (!person) {
        res.status(404).send("Person not available");
        return;
    }

    res.send(person);
});
app.put('/api/v1/:id', (req,res)=>{
    const person = people.find(c => c.id === parseInt(req.params.id));
    if (!person) {
        res.status(404).send("Person not available");
        return;
    }
const result = validateCourse(req.body)
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    person.name = req.body.name;
    res.send(person)
})
app.delete('/api/v1/:id',(req,res)=>{
    const person = people.find(c => c.id === parseInt(req.params.id));
    if (!person) {
        res.status(404).send("Person not available");
        return;
    }
    const index = people.indexOf(person)
    people.splice(index,1)
    res.send(person)
})
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
const validateCourse = (person) =>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(person);

}
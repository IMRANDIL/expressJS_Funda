let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
};



const postPeople = (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({ success: false, msg: `please provide name ` })
    }
    res.status(201).json({ success: true, person: name })
};


const postPostman = (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).json({ success: true, person: [...people, name] })
    }

    return res.status(400).json({ success: false, msg: `please provide name ` })
};



const putPeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => {
        return person.id === Number(id);
    });

    if (!person) {
        return res.status(404).json({ success: false, msg: `No Person with id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            return person.name = name;
        }
        return person;
    })

    res.status(200).json({ success: true, data: newPeople })

};





const deletePeople = (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => {
        return person.id === Number(id)
    });
    if (!person) {
        return res.status(404).json({ success: false, msg: `No user exists with this id ${id}` })
    }

    const newPerson = people.filter((person) => {
        return person.id !== Number(id)
    })
    return res.status(200).json({ success: true, data: newPerson })


};




module.exports = { getPeople, postPeople, postPostman, putPeople, deletePeople }
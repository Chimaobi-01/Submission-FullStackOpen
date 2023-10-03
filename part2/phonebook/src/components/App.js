import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { addPhonebook, deletePhonebook, fetchPhonebook, replacePhoneNumber } from "../services/phonebook";
import Notification from "./Notification";



const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filterPersons, setFilterPersons] = useState("");
    const [showMessage, setShowMessage ] = useState(null)

    useEffect(() => {
        fetchPhonebook()
            .then(response => setPersons(response))
            .catch(error => alert('Unable to connect to backend'))
    }, [])





    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };
    const handleFilterPersons = (event) => {
        setFilterPersons(event.target.value)
    }
    const handleDelete = id => {
        const pErson = persons.find(p => p.id === id)
        if (window.confirm(`Delete ${pErson.name} ?`)) {
            deletePhonebook(id)
                .then(response => {
                    setPersons(persons.filter(p => p.id !== id))
                })
        }

    }

    const addPerson = (event) => {
        event.preventDefault();

        if ((newName === "") && (newNumber === "")) {
            return
        }
        const newPerson = {
            name: newName,
            number: newNumber,
        };
        const isFound = persons.find(person => person.name === newPerson.name)

        if (isFound) {
            if (window.confirm(`${isFound.name} is already added to phonebook, replace the old number with a new one?`)) {
                replacePhoneNumber(isFound.id, newPerson)
                    .then(response => {
                        setPersons(persons.map(p => p.id !== isFound.id ? p : response))
                    })
                    .catch(error => {
                        setPersons(persons.filter(p => p.id !== isFound.id))
                        setShowMessage(
                            `Information of ${isFound.name} has already been removed from server`
                        )
                        setTimeout(() => {
                            setShowMessage(null)
                        }, 3000);
                    })
                setNewName("");
                setNewNumber("")
            }


        } else {
            addPhonebook(newPerson)
                .then(response => {
                    setPersons(persons.concat(response))
                    setShowMessage(
                        `Added ${response.name}`
                    )
                    setTimeout(() => {
                        setShowMessage(null)
                    }, 3000);
                })
                .catch(error => 'why bringing error naw?')
            setNewName("");
            setNewNumber("")
            // setPersons(persons.concat(newPerson));


        }

    };
    const filterResult = persons.filter(person => person.name.toLowerCase().includes(filterPersons.toLowerCase()))



    return (
        <div>
            <h2>Phonebook</h2>

            <Notification message={showMessage} />

            <Filter
                filterPersons={filterPersons}
                handleFilterPersons={handleFilterPersons}
            />
            <h2>add a new</h2>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons
                filterResult={filterResult}
                handleDelete={handleDelete}
            />

        </div>
    );
};

export default App;

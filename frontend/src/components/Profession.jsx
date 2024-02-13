import { useState, useEffect } from "react";

function Profession() {

    const [profession, setProfession] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/professions")
            .then((response) => response.json())
            .then(data => {
                setProfession(data);
            })
    }, [])

    return (
        <>
            <section className="content profesiones" id="profession">
                <h2 className="mt-3">Profesiones</h2>
                <div className="list-group shadow-sm p-3 mb-5 rounded">
                    <h4 className="list-group-item list-group-item-action active text-center" aria-current="true">
                        Listado de Profesiones
                    </h4>
                    {
                        profession.map((result, i) => <button type="button" className="list-group-item list-group-item-action text-center" key={`but-${i}`}> {result.profession} </button>)
                    }
                </div>
            </section>
        </>
    )
}

export default Profession;
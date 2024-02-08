import { useState, useEffect } from "react";

function Profession() {

    const [profession, setProfession] = useState([]);

    useEffect(() => {
        fetch("apiParaMostrarTodasLasProfesiones")
            .then((response) => response.json())
            .then(data => {
                setProfession(data.professions);
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
                        profession.map((result, i) => <button type="button" className="list-group-item list-group-item-action text-center" key={`but-${i}`}> {result.name} </button>)
                    }
                </div>
            </section>
        </>
    )
}

export default Profession;
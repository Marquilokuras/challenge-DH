import { useState, useEffect } from "react";

function Applicant() {

    const [applicant, setApplicant] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/applicants")
            .then((response) => response.json())
            .then(data => {
                setApplicant(data);
            })
    }, [])

    return (
        <>
            <section className="content aspirantes" id="candidate">
                <h2>Aspirantes</h2>
                <article className="person-boxes">
                    {
                        applicant.map((result, i) => {
                            return (
                                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded" key={`div-1-${i}`}>
                                    <div className="box-avatar" key={`div-2-${i}`}>
                                        <img src={`/img/${result.image}`} alt={`img-${result.name}`} key={`img-${i}`} />
                                    </div>
                                    <div className="box-bio" key={`div-3-${i}`}>
                                        <h2 className="bio-name" key={`name-${i}`}>{result.name} {result.lastname}</h2>
                                        {
                                            result.professions.map((res, i) => <p className="bio-position" key={`profe-${i}`}> {res.profession} </p>)
                                        }
                                    </div>
                                    <div className="box-actions" key={`div-4-${i}`}>
                                        <button key={`but-1-${i}`}>
                                            <i className="bi bi-star" key={`icon-1-${i}`}></i>
                                        </button>
                                        <button key={`but-2-${i}`}>
                                            <i className="bi bi-chat" key={`icon-2-${i}`}></i>
                                        </button>
                                        <button key={`but-3-${i}`}>
                                            <i className="bi bi-envelope" key={`icon-3-${i}`}></i>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </article>
            </section>
        </>
    )
}

export default Applicant;
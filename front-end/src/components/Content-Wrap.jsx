import HeaderWrap from "./HeaderWrap";
import Applicant from "./Applicant";
import Profession from "./Profession";
import "../assets/css/contentWrap.css";
import {Routes, Route} from "react-router-dom"

function ContentWrap() {
    return (
        <>
            <main className="content-wrap">
                <Routes>
                    <Route path="/" exact="true" element={<HeaderWrap />} />
                    <Route path="/applicant" element={<Applicant />} />
                    <Route path="/profession" element={<Profession />} />
                </Routes>
            </main>
        </>
    )
}

export default ContentWrap;
import HeaderWrap from "./HeaderWrap";
import Applicant from "./Applicant";
import Profession from "./Profession";
import Contact from "./Contact";
import NotFound from "./NotFound";
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
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    )
}

export default ContentWrap;
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Profile(){
    const user = useSelector((state) => state.user.value);
    const exam = useSelector((state) => state.exam.value);
    const [score, setScore] = useState();

    var examactivity = (value) => {
        setScore(value.value);
        //console.log(value);
    }

    return (
        <div>
            <form>
                { exam.map((myexam) => (
                <p on>{ myexam.qno + ". " + myexam.question }
                    <input type="radio" onChange={
                        (event) => {
                            examactivity(event.target.value)
                        }
                    } name={ myexam.qno } value={ myexam.options.a } /> { myexam.options.a }
                    <input type="radio" name={ myexam.qno } value={ myexam.options.b } /> { myexam.options.b }
                    <input type="radio" name={ myexam.qno } value={ myexam.options.c } /> { myexam.options.c }
                    <input type="radio" name={ myexam.qno } value={ myexam.options.d } /> { myexam.options.d }
                </p>
            ))};
            </form>
        </div>
    );
}

export default Profile;
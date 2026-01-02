import { useState } from "react";

function Multiple_Condition() {
    const [showResult, setShowResult] = useState(false);
    const marks = 75;

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Login Result System</h1>

            <button>Marks : {marks}</button>
            <br /><br />

            <button onClick={() => setShowResult(!showResult)}>
                {showResult ? "Hide Result" : "Check Result"}
            </button>

            <br /><br />

            {showResult ? (
                marks >= 90 ? (
                    <h3 style={{ color: "blue" }}>🌟 TOPPER</h3>
                ) : marks >= 80 ? (
                    <h3 style={{ color: "green" }}>✅ PASS</h3>
                ) : marks >= 70 ? (
                    <h3 style={{ color: "orange" }}>⚠ AVERAGE</h3>
                ) : (
                    <h3 style={{ color: "red" }}>❌ FAIL</h3>
                )
            ) : null}
        </div>
    );
}

export default Multiple_Condition;

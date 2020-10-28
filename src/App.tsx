import React, {useRef, useState} from 'react';
import './App.css';
import { Button } from 'reactstrap';

function App() {
    let diff= useRef("");
    const [userInp, setuserInp]= useState(parseInt(""));
    const [totalQuestions, settotalQuestions]= useState(0);
    const [correctAnswers, setcorrectAnswers]= useState(0);
    const [equation, setEquation]= useState("");
    const [currentCorrectAnswer, setcurrentCorrectAnswer]= useState(9999);
    const [isCorrect, setisCorrect]=useState("white")
    const [allowInput, setallowInput]=useState(true)


    const generateEquation_hard=()=>
    {
        if (totalQuestions<10 && userInp!==parseInt("")) {
            console.log(userInp);
            diff.current = "hard";
            setuserInp(0);
            setallowInput(false);
            let rhs = 0;
            let ans = 0;
            let equation = Math.floor(Math.random() * 100).toString();
            ans = ans + parseInt(equation)

            equation = equation + "/";
            rhs = Math.floor(Math.random() * 10 + 1);
            equation = equation + rhs.toString();
            setEquation(equation);
            ans = parseInt((ans / rhs).toFixed());
            console.log(equation);
            console.log(ans);
            setcurrentCorrectAnswer(ans);
            diffcultySet("hard");
        }
    }

    const generateEquation_medium=()=>
    {
        if (totalQuestions<10 && userInp!==parseInt("")) {
            diff.current = "medium";

            setuserInp(0);
            setallowInput(false);
            let rhs = 0;
            let ans = 0;
            let equation = Math.floor(Math.random() * 10 ).toString();
            ans = ans + parseInt(equation)

            equation = equation + "X";
            rhs = Math.floor(Math.random() * 10);
            equation = equation + rhs.toString();
            setEquation(equation);
            ans = ans * rhs;
            console.log(equation);
            console.log(ans);
            setcurrentCorrectAnswer(ans);
            diffcultySet("medium");
        }
    }

    const generateOperand_easy = () =>
    {
        var operands =["+","-"];
        return operands[Math.floor(Math.random() * 2)];

    }
    const generateEquation_easy=()=>
    {
        if (totalQuestions<10 && userInp!==parseInt("")) {
            diff.current = "easy";
            setallowInput(false);
            setuserInp(0);
            let rhs = 0;
            let ans = 0;
            let op = "";
            let equation = Math.floor(Math.random() * 10).toString();
            ans = ans + parseInt(equation)
            op = generateOperand_easy();
            equation = equation + op;
            rhs = Math.floor(Math.random() * 10);
            equation = equation + rhs.toString();
            setEquation(equation);
            if (op == "+")
                ans = ans + rhs;
            else
                ans = ans - rhs;
            console.log(equation);
            console.log(ans);
            setcurrentCorrectAnswer(ans);
            diffcultySet("easy");
        }

    }
    const diffcultySet = (e:any) =>
    {
        diff=e;
        console.log(diff);
    }

    const checkAnswer = () =>
    {
        if(totalQuestions<10 && equation!=="" ) {
            if (currentCorrectAnswer==userInp) {
                console.log(userInp)
                // setisCorrect("#91FF91");
                // setallowInput(true);
                setcorrectAnswers(correctAnswers+1);
                console.log("here")
            }
            // else
            // {
            //     setisCorrect("#FF9191");
            // }
            settotalQuestions(totalQuestions+1);

                if (diff.current == "easy") {
                    generateEquation_easy();
                } else if (diff.current == "medium") {
                    generateEquation_medium();
                } else if (diff.current == "hard") {
                    generateEquation_hard();
                }
        }
        else
        {
            setallowInput(true);
        }
    }
  return (
    <div className="App">
        <h3>Total Questions: {totalQuestions}</h3>
        <h4>Correct Answers: {correctAnswers}</h4>
        <p>
            <a>Difficulty Level   </a>
            <Button className={"button-difficulty"} outline color={"success"} value={"easy"} onClick={generateEquation_easy}> Easy </Button>
            <Button className={"button-difficulty"} outline color={"warning"} value={"medium"} onClick={generateEquation_medium}> Medium </Button>
            <Button className={"button-difficulty"} outline color={"danger"} value={"hard"} onClick={generateEquation_hard}> Hard </Button>
        </p>
        <a style={{fontSize:"12px"}}> Answer to the nearest whole number</a>
        <div className={"equation"} style={{fontFamily:"cursive"}}>{equation}</div>
            <p>
            <label className={"equation"}>
                =
                <input type="number" disabled={allowInput} style={{backgroundColor:isCorrect}} onChange={(e:any)=> {setuserInp(e.target.value)}} value={userInp}  />
            </label>
            </p>
            <Button outline color={"primary"} onClick={checkAnswer} size="lg">Enter</Button>
            <p>
                <Button  color="danger"  style={ {border: "2px", margin: "10px"}} size="sml" onClick={()=>{window.location.reload(false);}} >Restart</Button>
            </p>
            </div>
  );
}

export default App;

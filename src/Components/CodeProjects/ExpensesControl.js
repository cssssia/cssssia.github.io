import "./CodeProjects.css"

import expensesControl1 from "../../Photos/expensesControl-1.png"
import expensesControl2 from "../../Photos/expensesControl-2.png"
import expensesControl3 from "../../Photos/expensesControl-3.png"

function ExpensesControl() {
  return (
    <div>
      {/* <div className="vl"></div> */}
      <div className="ball"><p className="align">2022</p></div>
      <div className="gameProjects">
        <div className="vl">
          <div className="projectContainer">
            <h2 className="blue">Expenses Control</h2>
            <p>
              An web application with the objective of categorizing expenses by month and year, where the user can add
              their past and future costs, providing a description for each one, if desired,
              and being able to mark them as paid. Developed in TypeScript, Java and SQL.
            </p>

            {/* <div className="display"> */}
              {/* <div className="displayFlex"> */}
                <h3 className="blue">images</h3>
                <img src={expensesControl1} className="image"/>
                <img src={expensesControl3} className="image"/>
                <img src={expensesControl2} className="image"/>
              {/* </div> */}
            {/* </div> */}
            <p className="marginBottom">This application was develop by me as part of the Project - Technological Innovations section from Feevale University Analysis and Systems Development course, NH/RS</p>
            <br />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExpensesControl;

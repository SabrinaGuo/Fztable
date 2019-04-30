import React, { Component } from "react";
import "./style.scss";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      date: [
        {
          start: "12/27 (三)",
          end: "12/30 (六)",
          price: " 一 一 ",
          cheaper: false
        },
        {
          start: "12/27 (三)",
          end: "12/31 (日)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/27 (三)",
          end: "01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/27 (三)",
          end: "01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/27 (三)",
          end: "01/03 (三)",
          price: "15,568",
          cheaper: true
        },
        {
          start: "12/27 (三)",
          end: "01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/27 (三)",
          end: "01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "12/28 (四)",
          end: "12/30 (六)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/28 (四)",
          end: "12/31 (日)",
          price: "12,300",
          cheaper: true
        },
        {
          start: "12/28 (四)",
          end: "01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/28 (四)",
          end: "01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/28 (四)",
          end: "01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/28 (四)",
          end: "01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/28 (四)",
          end: "01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "12/29 (五)",
          end: "12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "12/29 (五)",
          end: "12/31 (日)",
          price: "12,300",
          cheaper: false
        },
        {
          start: "12/29 (五)",
          end: "01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/29 (五)",
          end: "01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/29 (五)",
          end: "01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/29 (五)",
          end: "01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/29 (五)",
          end: "01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "12/30 (六)",
          end: "12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "12/30 (六)",
          end: "12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "12/30 (六)",
          end: "01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/30 (六)",
          end: "01/02 (二)",
          price: "12,300",
          cheaper: true
        },
        {
          start: "12/30 (六)",
          end: "01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/30 (六)",
          end: "01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/30 (六)",
          end: "01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "12/31 (日)",
          end: "12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "12/31 (日)",
          end: "12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "12/31 (日)",
          end: "01/01 (一)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "12/31 (日)",
          end: "01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/31 (日)",
          end: "01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "12/31 (日)",
          end: "01/04 (四)",
          price: "12,300",
          cheaper: true
        },
        {
          start: "12/31 (日)",
          end: "01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "01/01 (一)",
          end: "12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/01 (一)",
          end: "12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/01 (一)",
          end: "01/01 (一)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/01 (一)",
          end: "01/02 (二)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/01 (一)",
          end: "01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "01/01 (一)",
          end: "01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "01/01 (一)",
          end: "01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "01/02 (二)",
          end: "12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/02 (二)",
          end: "12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/02 (二)",
          end: "01/01 (一)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/02 (二)",
          end: "01/02 (二)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/02 (二)",
          end: "01/03 (三)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "01/02 (二)",
          end: "01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "01/02 (二)",
          end: "01/05 (五)",
          price: "15,568",
          cheaper: false
        }
      ]
    };
  }

  getEndDate(dateKey) {
    const dateList = this.state.date;
    let i;
    let dateEnd = [];
    // console.log("dateList.length", dateList.length);
    for (i = 0; i < 7; i++) {
      dateEnd.push(dateList[i][dateKey]);
      // return dateEnd;
      //dateList.length /
      // console.log(dateEnd);
    }
    return dateEnd;
  }

  getStartDate(dateKey) {
    const dateList = this.state.date;
    let j;
    let dateStart = [];
    for (j = 0; j < dateList.length; j += 7) {
      dateStart.push(dateList[j][dateKey]);
      // return dateEnd;
      //dateList.length /
      // console.log(dateStart);
    }
    return dateStart;
  }

  render() {
    return (
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th className="pd-4 bgGr borderR">
                <div className="textRight">回程</div>
                <div className="textLeft">去程</div>
              </th>
              <td className="dFlex bgGr">
                {this.getEndDate("end").map((string, index) => {
                  return (
                    <div key={index} className="borderRB">
                      <span>{string}</span>
                    </div>
                  );
                })}
              </td>
            </tr>

            {this.getStartDate("start").map((startString, index) => {
              return (
                <tr>
                  <th key={index} className="dateCol borderRB">
                    <span>{startString}</span>
                  </th>
                  <td className="dFlex price">
                    <div className="borderRB">
                      <span>{this.state.date[0]["price"]}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

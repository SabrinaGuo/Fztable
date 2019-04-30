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
                <div className="borderRB date2">
                  <span>12/27(一)</span>
                </div>
                <div className="borderRB date2">
                  <span>12/28(二)</span>
                </div>
                <div className="borderRB date2">
                  <span>12/29(三)</span>
                </div>
                <div className="borderRB date2">
                  <span>12/30(四)</span>
                </div>
                <div className="borderRB date2">
                  <span>12/31(五)</span>
                </div>
                <div className="borderRB date2 newYear">
                  <span>01/01(六)</span>
                </div>
                <div className="borderB">01/02(日)</div>
              </td>
            </tr>

            <tr>
              <th className="dateCol borderRB">12/27(一)</th>
              <td className="dFlex price">
                <div className="borderRB">
                  <span>— —</span>
                </div>
                <div className="borderRB cheapest">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderB">
                  <span>$15,568</span>起
                </div>
              </td>
            </tr>

            <tr>
              <th className="dateCol borderRB">12/28(二)</th>
              <td className="dFlex price">
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB cheapest">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderB">
                  <span>$15,568</span>起
                </div>
              </td>
            </tr>

            <tr>
              <th className="dateCol borderRB">12/29(三)</th>
              <td className="dFlex price">
                <div className="borderRB">查看</div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderB">
                  <span>$15,568</span>起
                </div>
              </td>
            </tr>

            <tr>
              <th className="dateCol borderRB">12/30(四)</th>
              <td className="dFlex price">
                <div className="borderRB">查看</div>
                <div className="borderRB">查看</div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB cheapest">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderB">
                  <span>$15,568</span>起
                </div>
              </td>
            </tr>

            <tr>
              <th className="dateCol borderRB">12/31(五)</th>
              <td className="dFlex price">
                <div className="borderRB">查看</div>
                <div className="borderRB">查看</div>
                <div className="borderRB">查看</div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderB">
                  <span>$15,568</span>起
                </div>
              </td>
            </tr>

            <tr>
              <th className="dateCol borderRB newYear">01/01(六)</th>
              <td className="dFlex price">
                <div className="borderRB">查看</div>
                <div className="borderRB">查看</div>
                <div className="borderRB">查看</div>
                <div className="borderRB">查看</div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderRB">
                  <span>$15,568</span>起
                </div>
                <div className="borderB">
                  <span>$15,568</span>起
                </div>
              </td>
            </tr>

            <tr>
              <th className="dateCol borderR">01/02(日)</th>
              <td className="dFlex price">
                <div className="borderR">查看</div>
                <div className="borderR">查看</div>
                <div className="borderR">查看</div>
                <div className="borderR">查看</div>
                <div className="borderR">查看</div>
                <div className="borderR">
                  <span>$15,568</span>起
                </div>
                <div>
                  <span>$15,568</span>起
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

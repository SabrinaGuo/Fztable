import React, { Component } from "react";
import "./style.scss";

export default class table extends Component {
  constructor(props) {
    super(props);
    //接口需要

    this.state = {
      //設定狀態

      //data
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

  render() {
    console.log(this.state.date);
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
                  <span>{this.state.date[0]}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

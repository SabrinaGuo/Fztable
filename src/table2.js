import React, { Component } from "react";
import "./style.scss";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      date: [
        {
          start: "2018/12/27 (三)",
          end: "2018/12/30 (六)",
          price: " 一 一 ",
          cheaper: false
        },
        {
          start: "2018/12/27 (三)",
          end: "2018/12/31 (日)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/27 (三)",
          end: "2019/01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/27 (三)",
          end: "2019/01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/27 (三)",
          end: "2019/01/03 (三)",
          price: "15,568",
          cheaper: true
        },
        {
          start: "2018/12/27 (三)",
          end: "2019/01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/27 (三)",
          end: "2019/01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "2018/12/28 (四)",
          end: "2018/12/30 (六)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/28 (四)",
          end: "2018/12/31 (日)",
          price: "12,300",
          cheaper: true
        },
        {
          start: "2018/12/28 (四)",
          end: "2019/01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/28 (四)",
          end: "2019/01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/28 (四)",
          end: "2019/01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/28 (四)",
          end: "2019/01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/28 (四)",
          end: "2019/01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "2018/12/29 (五)",
          end: "2018/12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2018/12/29 (五)",
          end: "2018/12/31 (日)",
          price: "12,300",
          cheaper: false
        },
        {
          start: "2018/12/29 (五)",
          end: "2019/01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/29 (五)",
          end: "2019/01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/29 (五)",
          end: "2019/01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/29 (五)",
          end: "2019/01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/29 (五)",
          end: "2019/01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "2018/12/30 (六)",
          end: "2018/12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2018/12/30 (六)",
          end: "2018/12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2018/12/30 (六)",
          end: "2019/01/01 (一)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/30 (六)",
          end: "2019/01/02 (二)",
          price: "12,300",
          cheaper: true
        },
        {
          start: "2018/12/30 (六)",
          end: "2019/01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/30 (六)",
          end: "2019/01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/30 (六)",
          end: "2019/01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "2018/12/31 (日)",
          end: "2018/12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2018/12/31 (日)",
          end: "2018/12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2018/12/31 (日)",
          end: "2019/01/01 (一)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2018/12/31 (日)",
          end: "2019/01/02 (二)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/31 (日)",
          end: "2019/01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2018/12/31 (日)",
          end: "2019/01/04 (四)",
          price: "12,300",
          cheaper: true
        },
        {
          start: "2018/12/31 (日)",
          end: "2019/01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "2019/01/01 (一)",
          end: "2018/12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/01 (一)",
          end: "2018/12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/01 (一)",
          end: "2019/01/01 (一)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/01 (一)",
          end: "2019/01/02 (二)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/01 (一)",
          end: "2019/01/03 (三)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2019/01/01 (一)",
          end: "2019/01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2019/01/01 (一)",
          end: "2019/01/05 (五)",
          price: "15,568",
          cheaper: false
        },

        {
          start: "2019/01/02 (二)",
          end: "2018/12/30 (六)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/02 (二)",
          end: "2018/12/31 (日)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/02 (二)",
          end: "2019/01/01 (一)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/02 (二)",
          end: "2019/01/02 (二)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/02 (二)",
          end: "2019/01/03 (三)",
          price: " 查看 ",
          cheaper: false
        },
        {
          start: "2019/01/02 (二)",
          end: "2019/01/04 (四)",
          price: "15,568",
          cheaper: false
        },
        {
          start: "2019/01/02 (二)",
          end: "2019/01/05 (五)",
          price: "15,568",
          cheaper: false
        }
      ]
    };
  }

  getEndDate() {
    const dateList = this.state.date;
    let dateEnd = [];
    const endDate = dateList.filter((date, index) => {
      return (
        dateList
          .map(function(mapItem) {
            return mapItem["end"];
          })
          .indexOf(date["end"]) === index
      );
    });
    endDate.sort((a, b) => {
      return a["end"] > b["end"] ? 1 : -1;
    });
    // console.log(endDate);

    for (let i = 0; i < endDate.length; i += 1) {
      dateEnd.push(endDate[i]["end"].substring(5));
      // console.log(endN);
    }
    // console.log(endDate); //怎麼會跑那麼多組一樣的
    console.log(dateEnd);
    return dateEnd;
  }

  getStartDate() {
    const dateList = this.state.date;
    let dateStart = [];
    const startDate = dateList.filter((date, index) => {
      return (
        dateList
          .map(function(mapItem) {
            return mapItem["start"];
          })
          .indexOf(date["start"]) === index
      );
    });
    startDate.sort((a, b) => {
      return a["start"] > b["start"] ? 1 : -1;
    });

    for (let i = 0; i < startDate.length; i += 1) {
      dateStart.push(startDate[i]["start"].substring(5));

      // console.log(startN); //僅列出所有符合的日期
    }
    console.log(dateStart);

    return dateStart;
  }
  getPrice() {
    const dateList = this.state.date;
    let datePrice = []; //僅列出價錢
    for (let i = 0; i < 7; i += 1) {
      datePrice.push(dateList[i]["price"]);
      // console.log(priceN);
    }
    return datePrice;
  }

  render() {
    // const dateList = this.state.date;
    return (
      <div className="container">
        {console.log(this.getPrice())}
        <div className="leftGo">
          <i class="fas fa-chevron-left" />
        </div>
        <div className="rightGo">
          <i class="fas fa-chevron-right" />
        </div>
        <table>
          <tbody>
            <tr>
              <th className="pd-4 bgGr borderR">
                <div className="textRight">回程</div>
                <div className="textLeft">去程</div>
              </th>
              <td className="dFlex bgGr">
                {this.getEndDate().map((item, idx) => {
                  return (
                    <div className="borderRB date2" key={"az" + idx}>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </td>
            </tr>
            {this.getStartDate().map((itemStart, idx) => {
              return (
                <tr>
                  <React.Fragment key={"abc" + idx}>
                    <th className="dateCol borderRB">{itemStart}</th>
                    <td className="dFlex price">
                      {this.getPrice().map((itemPri, idx) => {
                        return (
                          <div className="borderRB" key={"ed" + idx}>
                            <span>{itemPri}</span>
                          </div>
                        );
                      })}
                    </td>
                  </React.Fragment>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

import React from "react";
import "./style.scss";

function App() {
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

export default App;

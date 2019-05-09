import React, { Component } from "react";
import "./style.scss";
import ticketInfo from "./ticketinfo.json";
import PropTypes from "prop-types";

export default class FrzTable extends Component {
  //預設傳入資料(若主頁沒有傳入則套用此預設值)
  static defaultProps = {
    count: { show: 4, slide: 1 },
    speed: 0.3,
    whenClick: function($element) {
      console.log($element);
    }
  };
  //確認傳入資料格式是否有誤
  static propTypes = {
    slide: PropTypes.number,
    show: PropTypes.number,
    speed: PropTypes.number,
    whenClick: PropTypes.func
  };

  state = {
    id: "",
    dateCross: [],
    originMove: 0, //原點會因為移動距離而改變
    countTouch: 0, //已按次數
    arrowRightHere: 1,
    arrowLeftHere: 0
  };
  classList = ["show1", "show2", "show3", "show4"];

  getEndDate() {
    let dateList = ticketInfo.data;
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
    // console.log(dateEnd);
    return dateEnd;
  }

  getStartDate() {
    let dateList = ticketInfo.data;
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
    // console.log(dateStart);

    return dateStart;
  }
  getPrice() {
    let dateList = ticketInfo.data;
    let datePrice = []; //僅列出價錢
    for (let i = 0; i < dateList.length; i += 1) {
      datePrice.push(dateList[i]["price"]);
      // console.log(priceN);
      // console.log(datePrice);
    }
    return datePrice;
  }

  onClick(e) {
    let idClick = e.target.getAttribute("id");
    this.props.whenClick(e.target);
    let dateRow = Math.floor(idClick / 7);
    let dateCol = idClick % 7;
    let row = [];
    let col = [];
    let both = [];
    //重新設定class的狀態
    //取得當格的key僅有他自己加上active
    //取得其他相鄰位置的key 加上 activeBg
    for (let i = 0; i < 7; i++) {
      row.push(dateRow * 7 + i); //等於每一格的位置
      col.push(i * 7 + dateCol); //等於每一格的位置
    }

    both = [...row, ...col];
    this.setState({
      dateCross: both,
      id: idClick
    });

    // console.log(both);
    // return idClick;
  }
  moveLeft = () => {
    const show = this.props.count.show; //3 顯示3格
    const slide = this.props.count.slide; //1 移動一格
    const org = 0;

    // let leftTounch = Math.floor((7 - show) / slide); //計算出每次可點擊的次數
    let clickCount = this.state.countTouch; //已經點擊數次
    let leftMove; //移動的位置
    let arrowLeft; //判斷左箭頭
    // console.log("計算左", leftTounch);
    // console.log("已點擊左", clickCount);
    //移動的距離 往左的left是正數 +
    if (this.state.countTouch !== 0) {
      leftMove = this.state.originMove + slide * (100 / show);
      clickCount = this.state.countTouch - 1;
      arrowLeft = 1;
      if (clickCount === 0) {
        leftMove = org;
        arrowLeft = 0;
      }

      // console.log("if計算左", leftTounch);
      // console.log("if已點擊左", clickCount);
    } else if (this.state.countTouch === 0) {
      leftMove = org;
      clickCount = this.state.countTouch;
      arrowLeft = 0;
      // console.log("else計算左", leftTounch);
      // console.log("else已點擊左", clickCount);
    }

    this.setState({
      originMove: leftMove, //丟回去變更原點
      countTouch: clickCount,
      arrowLeftHere: arrowLeft,
      arrowRightHere: 1 //當點擊左邊時 右邊可以產生箭頭
    });
  };
  moveRight = () => {
    const show = this.props.count.show; //3 顯示3格
    const slide = this.props.count.slide; //1 移動一格
    const org = 0;
    let chWidth = (7 - show) % slide;
    let rightTounch = Math.floor((7 - show) / slide);
    let clickCount = this.state.countTouch;
    let arrowRight;
    let rightMove; //移動的距離 往右的left是負數-

    if (rightTounch > this.state.countTouch) {
      rightMove = this.state.originMove - slide * (100 / show);
      clickCount = this.state.countTouch + 1;
      arrowRight = 1;

      if (chWidth === 0 && rightTounch === clickCount) {
        clickCount = this.state.countTouch + 1;
        arrowRight = 0;
      }
      // console.log("if計算右", rightTounch);
      // console.log("chWidth", chWidth);
      // console.log("if已點擊右", clickCount);
    } else if (rightTounch <= this.state.countTouch) {
      rightMove = org - (100 / show) * (7 - show);
      // clickCount = rightTounch - 1;
      clickCount = this.state.countTouch + 1;
      arrowRight = 0;
      // console.log("else計算右", rightTounch);
      // console.log("else已點擊右", clickCount);
    }
    this.setState({
      originMove: rightMove, //丟回去變更原點
      countTouch: clickCount,
      arrowRightHere: arrowRight,
      arrowLeftHere: 1 //當點擊右邊時 左邊可以產生箭頭
    });
    // console.log(rightTounch);
    // console.log(clickCount);
  };

  render() {
    let id = this.state.id;
    let dateList = ticketInfo.data;
    let showDiv = this.props.count.show - 1;
    let newOriginMove = this.state.originMove;
    // let newT = this.state.countTouch;
    // console.log(newT);
    let arrowR = this.state.arrowRightHere;
    let arrowL = this.state.arrowLeftHere;
    // console.log("左箭頭", arrowL);
    // console.log("右箭頭", arrowR);
    let moveSpeed = this.props.speed;
    let style = {
      left: `${newOriginMove}%`,
      transition: `${moveSpeed}s`
    };
    // console.log(moveSpeed);
    console.log(arrowL === 1 && "diNo");
    //為了使className不因為三元運算而印出""或是false 將運算值用變數包起來丟下去
    const arrowLL = arrowL === 0 ? " diNo" : "";
    const arrowRR = arrowR === 0 ? " diNo" : "";

    return (
      <div className="container">
        <div>
          <div className={`leftGo${arrowLL}`} onClick={this.moveLeft}>
            <i className="fas fa-chevron-left" />
          </div>
          <div className={`rightGo${arrowRR}`} onClick={this.moveRight}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>

        <div className="dFlex dateRow">
          <div className="allEndDate" style={style}>
            {/* 橫排日期 */}
            {this.getEndDate().map((endItem, idx) => {
              return (
                <div className={this.classList[showDiv]} key={"end" + idx}>
                  {endItem === "01/01 (一)" ? (
                    <span className="newYear">2018</span>
                  ) : (
                    ""
                  )}
                  {endItem}
                </div>
              );
            })}
          </div>
        </div>
        <div className="dateCol">
          {/* 直排日期  */}
          <div className="pd-4">
            <p className="textRight">回程</p>
            <p className="textLeft">去程</p>
          </div>
          <div className="dateOnly">
            {this.getStartDate().map((startItem, idx) => {
              return (
                <div className="" key={"start" + idx}>
                  {startItem === "01/01 (一)" ? (
                    <span className="newYear">2018</span>
                  ) : (
                    ""
                  )}
                  {startItem}
                </div>
              );
            })}
          </div>
        </div>

        <div className="priceShow">
          <div className={`allPrice ${this.classList[showDiv]} `} style={style}>
            {/* 中間價錢 */}
            {this.getPrice().map((priceItem, idx) => {
              let idClass = idx === Number(id) && idx !== 0 && "active";
              let idCross =
                this.state.dateCross.indexOf(idx) !== -1 && "activeBg";
              let cheaper = dateList[idx]["cheaper"] && "cheapest";
              let localeString =
                Number(priceItem).toLocaleString() === "非數值"
                  ? priceItem
                  : Number(priceItem).toLocaleString();
              let noHover =
                Number(priceItem).toLocaleString() === "非數值" && "nohover";
              let dot = Number(priceItem).toLocaleString() !== "非數值" && "起";
              return (
                <div
                  className={`${noHover} ${idCross} ${idClass} ${cheaper}  `}
                  key={"price" + idx}
                  id={idx}
                  onClick={e => this.onClick(e)}
                >
                  <span>{localeString}</span>
                  {dot}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

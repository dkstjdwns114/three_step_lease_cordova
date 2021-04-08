import React, { Component } from "react";
import CategoryTabs from "../Tab/CategoryTabs";

export default class CategoryView extends Component {
  state = {
    currentValue: "",
    currentValueKor: "",
    defaultBtnClass: "",
    activeBtnClass: "",
    active1: false,
    active2: false,
    active3: true,
    active4: false,
    isRadar: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      currentValue: "type_detail_close_20",
      currentValueKor: "2020년 폐업",
      defaultBtnClass: "btn btn-default",
      activeBtnClass: "btn btn-success"
    });
  }

  changeYearsValue = (value) => {
    this.setState({ currentValue: value });
  };

  close_19_click_handler = () => {
    if (!this.state.isRadar) {
      this.setState({
        currentValue: "type_detail_close_19",
        currentValueKor: "2019년 폐업",
        active1: true,
        active2: false,
        active3: false,
        active4: false
      });
    }
  };
  close_20_click_handler = () => {
    if (!this.state.isRadar) {
      this.setState({
        currentValue: "type_detail_close_20",
        currentValueKor: "2020년 폐업",
        active1: false,
        active2: false,
        active3: true,
        active4: false
      });
    }
  };
  open_19_click_handler = () => {
    if (!this.state.isRadar) {
      this.setState({
        currentValue: "type_detail_open_19",
        currentValueKor: "2019년 개업",
        active1: false,
        active2: true,
        active3: false,
        active4: false
      });
    }
  };
  open_20_click_handler = () => {
    if (!this.state.isRadar) {
      this.setState({
        currentValue: "type_detail_open_20",
        currentValueKor: "2020년 개업",
        active1: false,
        active2: false,
        active3: false,
        active4: true
      });
    }
  };

  isRadarClickHandler = () => {
    this.setState({
      isRadar: true,
      active1: false,
      active2: false,
      active3: false,
      active4: false
    });
  };

  isHorizontalClickHandler = () => {
    this.setState({ isRadar: false });
    this.setState({
      currentValue: "type_detail_close_20",
      currentValueKor: "2020년 폐업",
      active1: false,
      active2: false,
      active3: true,
      active4: false
    });
  };

  render() {
    return (
      <>
        <div className="col-xxl-6 col-lg-6 col-md-12" id="category_view">
          <div className="card">
            <div className="card-block p-20">
              <div className="counter text-left">
                <span className="counter-number">
                  {this.props.city_name} 최근 2년 업종 대분류 개·폐업 현황
                </span>
                <div className="counter-label text-uppercase mb-20"> </div>
                <p>
                  년도별 개·폐업 버튼 클릭시 해당 년도로 변경됩니다. <br />
                  그래프 버튼 클릭시 그래프가 변경됩니다.
                </p>
                <div className="example example-buttons text-center">
                  <div
                    className="btn-group"
                    aria-label="Default button group"
                    role="group"
                  >
                    <button
                      type="button"
                      className={
                        this.state.active1
                          ? this.state.activeBtnClass
                          : this.state.defaultBtnClass
                      }
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      onClick={this.close_19_click_handler}
                    >
                      <span className="text-uppercase">19년 폐업</span>
                    </button>
                    <button
                      type="button"
                      className={
                        this.state.active2
                          ? this.state.activeBtnClass
                          : this.state.defaultBtnClass
                      }
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      onClick={this.open_19_click_handler}
                    >
                      <span className="text-uppercase">19년 개업</span>
                    </button>
                    <button
                      type="button"
                      className={
                        this.state.active3
                          ? this.state.activeBtnClass
                          : this.state.defaultBtnClass
                      }
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      onClick={this.close_20_click_handler}
                    >
                      <span className="text-uppercase">20년 폐업</span>
                    </button>
                    <button
                      type="button"
                      className={
                        this.state.active4
                          ? this.state.activeBtnClass
                          : this.state.defaultBtnClass
                      }
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      onClick={this.open_20_click_handler}
                    >
                      <span className="text-uppercase">20년 개업</span>
                    </button>
                  </div>
                </div>
                <div className="counter-label text-uppercase">
                  <CategoryTabs
                    type_close_19={this.props.type_close_19}
                    type_open_19={this.props.type_open_19}
                    type_close_20={this.props.type_close_20}
                    type_open_20={this.props.type_open_20}
                    yearsValue={this.state.currentValue}
                    city_name={this.props.city_name}
                    numberWithCommas={this.props.numberWithCommas}
                    isRadarClickHandler={this.isRadarClickHandler}
                    isHorizontalClickHandler={this.isHorizontalClickHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

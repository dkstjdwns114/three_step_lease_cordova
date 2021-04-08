import React from "react";
import ChartistMonth from "../Chart/ChartistMonth";
import SmartTable from "../Table/SmartTable";

const MainMonthView = (props) => {
  return (
    <>
      <div className="col-xxl-12 col-md-12">
        <div className="card">
          <div className="card-block p-0 h-full">
            <div
              className="pt-5 px-15"
              style={{ height: "calc(100% - 250px)" }}
            >
              <div className="row">
                <div className="pt-20 px-20">
                  <p className="font-size-20 grey-700">{props.title}</p>
                  <p>{props.desc}</p>
                </div>

                <div className="col-xxl-12 col-md-12">
                  <div className="text-center">
                    <span className="center-block">
                      <i
                        className="icon md-circle blue-500 mr-5"
                        aria-hidden="true"
                      ></i>{" "}
                      2019년 폐업
                    </span>
                    <span className="ml-10 center-block">
                      <i
                        className="icon md-circle green-a300 mr-5"
                        aria-hidden="true"
                      ></i>{" "}
                      2019년 개업
                    </span>
                    <br />
                    <span className="center-block">
                      <i
                        className="icon md-circle red-500 mr-5"
                        aria-hidden="true"
                      ></i>{" "}
                      2020년 폐업
                    </span>
                    <span className="ml-10 center-block">
                      <i
                        className="icon md-circle purple-500 mr-5"
                        aria-hidden="true"
                      ></i>{" "}
                      2020년 개업
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-10 px-25">
              <div className="col-lg-12" id="main_month_chart">
                <ChartistMonth
                  month_close_19={props.month_close_19}
                  month_open_19={props.month_open_19}
                  month_close_20={props.month_close_20}
                  month_open_20={props.month_open_20}
                  numberWithCommas={props.numberWithCommas}
                />
              </div>
            </div>
            <SmartTable
              month_close_19={props.month_close_19}
              month_open_19={props.month_open_19}
              month_close_20={props.month_close_20}
              month_open_20={props.month_open_20}
              numberWithCommas={props.numberWithCommas}
              city_name={props.city_name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMonthView;

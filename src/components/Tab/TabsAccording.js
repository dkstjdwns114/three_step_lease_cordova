import React, { useEffect, useState } from "react";
import FixedHeaderTable from "../Table/FixedHeaderTable";

const TabsAccording = (props) => {
  return (
    <>
      <div className="col-xxl-12 col-lg-12 col-md-12">
        {/* <!-- Example Continuous Accordion --> */}
        <div className="card" id="same_address_table">
          <div className="card-block p-0 p-20 h-full">
            <div className="counter text-left">
              <span className="counter-number">
                {props.city_name} 2019년, 2020년
                <br />
                모두 폐업한 상가 주소 Top10
              </span>
              <div className="counter-label text-uppercase mb-20 card-shadow">
                {" "}
              </div>
              <div
                className="panel-group panel-group-continuous"
                id="exampleAccordionContinuous"
                aria-multiselectable="true"
                role="tablist"
              >
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousOne"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousOne"
                      aria-controls="exampleCollapseContinuousOne"
                      aria-expanded="true"
                    >
                      1. {props.most_close_20[0].address} / 총{" "}
                      {props.most_close_20[0].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse show"
                    id="exampleCollapseContinuousOne"
                    aria-labelledby="exampleHeadingContinuousOne"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[0].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousTwo"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousTwo"
                      aria-controls="exampleCollapseContinuousTwo"
                      aria-expanded="false"
                    >
                      2. {props.most_close_20[1].address} / 총{" "}
                      {props.most_close_20[1].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousTwo"
                    aria-labelledby="exampleHeadingContinuousTwo"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[1].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousThree"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousThree"
                      aria-controls="exampleCollapseContinuousThree"
                      aria-expanded="false"
                    >
                      3. {props.most_close_20[2].address} / 총{" "}
                      {props.most_close_20[2].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousThree"
                    aria-labelledby="exampleHeadingContinuousThree"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[2].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousFour"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousFour"
                      aria-controls="exampleCollapseContinuousFour"
                      aria-expanded="false"
                    >
                      4. {props.most_close_20[3].address} / 총{" "}
                      {props.most_close_20[3].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousFour"
                    aria-labelledby="exampleHeadingContinuousFour"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[3].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousFive"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousFive"
                      aria-controls="exampleCollapseContinuousFive"
                      aria-expanded="false"
                    >
                      5. {props.most_close_20[4].address} / 총{" "}
                      {props.most_close_20[4].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousFive"
                    aria-labelledby="exampleHeadingContinuousFive"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[4].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousSix"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousSix"
                      aria-controls="exampleCollapseContinuousSix"
                      aria-expanded="false"
                    >
                      6. {props.most_close_20[5].address} / 총{" "}
                      {props.most_close_20[5].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousSix"
                    aria-labelledby="exampleHeadingContinuousSix"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[5].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousSeven"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousSeven"
                      aria-controls="exampleCollapseContinuousSeven"
                      aria-expanded="false"
                    >
                      7. {props.most_close_20[6].address} / 총{" "}
                      {props.most_close_20[6].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousSeven"
                    aria-labelledby="exampleHeadingContinuousSeven"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[6].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousEight"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousEight"
                      aria-controls="exampleCollapseContinuousEight"
                      aria-expanded="false"
                    >
                      8. {props.most_close_20[7].address} / 총{" "}
                      {props.most_close_20[7].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousEight"
                    aria-labelledby="exampleHeadingContinuousEight"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[7].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousNine"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousNine"
                      aria-controls="exampleCollapseContinuousNine"
                      aria-expanded="false"
                    >
                      9. {props.most_close_20[8].address} / 총{" "}
                      {props.most_close_20[8].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousNine"
                    aria-labelledby="exampleHeadingContinuousNine"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[8].stores_info}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel mb-3">
                  <div
                    className="panel-heading"
                    id="exampleHeadingContinuousTen"
                    role="tab"
                  >
                    <a
                      className="panel-title pl-15 pr-40 collapsed"
                      data-parent="#exampleAccordionContinuous"
                      data-toggle="collapse"
                      href="#exampleCollapseContinuousTen"
                      aria-controls="exampleCollapseContinuousTen"
                      aria-expanded="false"
                    >
                      10. {props.most_close_20[9].address} / 총{" "}
                      {props.most_close_20[9].count}개 가게 폐업
                    </a>
                  </div>
                  <div
                    className="panel-collapse collapse"
                    id="exampleCollapseContinuousTen"
                    aria-labelledby="exampleHeadingContinuousTen"
                    role="tabpanel"
                  >
                    <div className="panel-body pl-0 pr-0">
                      <FixedHeaderTable
                        dataArr={props.most_close_20[9].stores_info}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Example Continuous Accordion --> */}
      </div>
    </>
  );
};

export default TabsAccording;

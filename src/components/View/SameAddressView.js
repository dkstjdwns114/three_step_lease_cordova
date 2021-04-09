import React, { Component } from "react";
import SameAddressDownLoadCsv from "../Csv/SameAddressDownLoadCsv";
import RoundCircleLoading from "../Loading/RoundCircleLoading";
import SameAddressMap from "../Map/SameAddressMap";

export default class SameAddressView extends Component {
  state = {
    isLoading: true,
    same_address_list: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`http://52.79.102.189:8080/api/same_address/${this.props.city_code}`)
      // fetch(`/api/same_address/${this.props.city_code}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isLoading: false,
          same_address_list: resData.same_address_list
        });
      });
  };

  numberWithCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <>
        <div className="col-xxl-12 col-md-12" id="same_address_map">
          <div className="card">
            <div className="card-block p-0 h-full">
              <div className="row">
                <div className="col-12 pt-20 px-30">
                  <p className="font-size-20 grey-700">
                    {this.props.city_name} 2019년, 2020년
                    <br />
                    모두 폐업한 상가 지도
                  </p>
                  {!this.state.isLoading && (
                    <>
                      {this.props.city_name === "전국" ? (
                        <p>
                          전국의 경우 성능상의 이유로 일부 데이터만 지도에
                          표시됩니다. 모든 데이터&nbsp;
                          <SameAddressDownLoadCsv
                            same_address_list={this.state.same_address_list}
                            city_name={this.props.city_name}
                          />
                        </p>
                      ) : (
                        <p>
                          지도에 표시된 모든 데이터&nbsp;
                          <SameAddressDownLoadCsv
                            same_address_list={this.state.same_address_list}
                            city_name={this.props.city_name}
                          />
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {this.state.isLoading ? (
                    <RoundCircleLoading />
                  ) : (
                    <>
                      <SameAddressMap
                        same_address_list={this.state.same_address_list}
                        city_hoall_lat={this.props.city_hoall_lat}
                        city_hoall_lng={this.props.city_hoall_lng}
                        same_address_map_level={
                          this.props.same_address_map_level
                        }
                        city_name={this.props.city_name}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

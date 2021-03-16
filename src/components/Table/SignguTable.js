import React from "react";

const signguTable = (props) => {
  return (
    <>
      {/* Bordered table */}
      <div className="card">
        <div className="card-header header-elements-inline">
          <h5 className="card-title" style={{ fontSize: "15px" }}>
            {props.cardTitle}
          </h5>
        </div>
        <div className="card-body">{props.cardDesc}</div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Rate</th>
                <th>Borough</th>
                <th>Total</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {props.contents.map((area, idx) => {
                return (
                  <tr key={area.name + idx} style={{ fontSize: "12px" }}>
                    <td>{idx + 1}</td>
                    <td>{area.name}</td>
                    <td>{props.numberComma(area.cnt)}</td>
                    <td>{area.trait ? area.trait : "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* /bordered table  */}
    </>
  );
};

export default signguTable;

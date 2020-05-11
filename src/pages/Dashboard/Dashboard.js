import React from "react";
import "./Dashboard.scss";
import logo from '../../assets/images/logo.PNG'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Header from '../../components/Header/Header'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'Things to do',
          field: "Things",
          rowDrag: true,
          width: 500,
        },
        {
           field: 'Owner',
        width: 140 },
        {
          field: 'Status',
          width: 140,
          editable : true
        },
        {
          headerName: 'Due date',
          field: 'duedate',
          width: 140,
        },
        {
          field: 'Priority',
          width: 140,
        },
      ],
      rowData: [
        {Things:"New item", Owner: "Toyota", Status: "Working on it",duedate:"Apr 9", Priority: "Urgent" },
        {Things:"New item", Owner: "Toyota", Status: "Waiting for reply",duedate:"Apr 9", Priority: "High" },
        {Things:"New item", Owner: "Toyota", Status: "Stuck",duedate:"Apr 9", Priority: "Medium" },
        {Things:"New item", Owner: "Toyota", Status: "Done",duedate:"Apr 9", Priority: "Low" }, 
      ]
    };
  }

  render() {
    return (
      <div className="dashboardMain">
        <div className="left-panel">
          <div className="topArea">
            <div className="logoarea">
              <img src={logo} className="logo" />
            </div>
            <span className="icon-notification iconcss">
            </span>
            <span className="icon-inbox iconcss">
              <span className="inboxNo"></span>
            </span>
          </div>
          <div className="bottomArea">
            <span className="icon-calendar iconcss">
            </span>
            <span className="icon-addUser iconcss">
            </span>
            <span className="icon-search iconcss"><span className="downArrow"></span>
            </span>
            <span className="icon-question iconcss">
            </span>
            <span className="icon-user UsercssIcon">
              <span className="user"></span>
            </span>
          </div>

        </div>
        <div className="right-panel">
          <div className="sideNav">
            <div className="topSec">
              <h6 className="smallTitle">Workspaces</h6>
              <span className="searchPart"><i className="icon-search" ></i>Filter boards..</span>
              <div className="namingSec">
                <a className="openDown">
                  <span className="downArrow"></span>
                  <span className="homePart"><i className="icon-home"></i>Main</span>
                </a>
                <i className="icon-plus"></i>
              </div>
              <span className="bluetxt">Web design</span>
              <span className="blacktxt">just demo</span>
            </div>
            <div className="bottomSec">
              <span className="dashboardTitle">Dashboards</span>
              <span>
                <a className="lastBtn">
                  Get the mobile app
                    <i className="icon-playstore blue"></i>
                  <i className="icon-apple black"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="mainTableSection">
            <div className="headerDeatail">
              <Header/>
            </div>
            <div className="tableSec">

              <div className="ag-theme-balham" style={{ height: '200px', width: '1120px' }}>
                <AgGridReact
                  columnDefs={this.state.columnDefs}
                  rowData={this.state.rowData}
                  rowDragManaged={true}
                  animateRows={true}
                  onGridReady={this.onGridReady}
                  rowData={this.state.rowData}>
                </AgGridReact>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default Dashboard;
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CustomizedDialog } from "./modal";
import { connectWeb3 } from "../../utils/contract";

const useStyles = makeStyles((theme) => ({
  topbar: {
    top: "0",
    height: "40%",
    width: "100%",
    position: "fixed",
    background: "linear-gradient(180deg, #0C0E41 0%, #324E75 100%)",
  },
  LogoutBtn: {
    background: "linear-gradient(5deg, #0C0E41 65%, #324E75 124%);",
    color: "#04dc04",
    border: "1px solid #04dc04",
    padding: "8px 40px",
    borderRadius: "25px",
    fontSize: "15px",
  },
  Logout: {
    float: "right",
  },
  abc: {
    textAlign: "center",
    padding: "15px",
  },
  createFundBtn: {
    marginTop: "20px",
    borderRadius: "24px",
    background: "#00CA9D",
    border: "1px solid #00CA9D",
    color: "white",
    padding: "10px 40px",
    height: "45px",
    textDecoration: "none",
  },
  FundBtn: {
    borderRadius: "35px",
    background: "#F29C1F",
    color: "white",
    padding: "5px 30px",
    textDecoration: "none",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
  },
  tableCard: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  table: {
    minHeight: "227px",
  },
  fundBtn: {
    background: "#F29C1F",
    borderRadius: "24px",
    border: "1px solid #F29C1F",
    width: "87px",
    height: "35px",
    color: "#FFFFFF",
  },
  connectBtn: {
    color: "#E2DEDE",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "24px",
    cursor: "pointer",
    "& :active": {
      transform: "scale(1.5)",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const rowData = [
    {
      date: "31/12/2020",
      fundValue: "$ 5,00,000",
      monthLeft: "2 / 8",
      frequency: "Monthly",
    },
    {
      date: "31/12/2020",
      fundValue: "$ 5,00,000",
      monthLeft: "2 / 8",
      frequency: "Monthly",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [isWalletConnected, setWalletConnection] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const connectWallet = () => {
    connectWeb3().then((data) => {
      setWalletConnection(data.connection);
    });
  };
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.topbar}>
          <div style={{ padding: "20px" }}>
            <Typography
              variant="h5"
              style={{ color: "white", paddingBottom: "7px" }}
            >
              <img src="./Cognitochain.png" alt="logo" />
              <span className={classes.Logout}>
                {isWalletConnected ? (
                  <button className={classes.LogoutBtn}>Log Out</button>
                ) : (
                  <span className={classes.connectBtn} onClick={connectWallet}>
                    Connect Wallet
                  </span>
                )}
              </span>
            </Typography>
            <div className={classes.abc}>
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                My Portfolio
              </Typography>
              <div
                style={{
                  color: "#F29C1F",
                  fontSize: "36px",
                  lineHeight: "47px",
                }}
              >
                $ 10,240
              </div>
              <div>
                <button
                  className={classes.createFundBtn}
                  onClick={handleClickOpen}
                >
                  Create Savings Pool
                </button>
                <CustomizedDialog
                  open={open}
                  onClick={handleClickOpen}
                  onClose={handleClose}
                ></CustomizedDialog>
              </div>
            </div>
            <div className={classes.tableCard}>
              <div>
                <Card className={classes.root}>
                  <h2
                    style={{
                      borderBottom: "1px solid grey",
                      padding: "0px 20px 15px",
                    }}
                  >
                    My Pools
                  </h2>
                  <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow className="">
                          <TableCell>Date</TableCell>
                          <TableCell align="right">Fund Values</TableCell>
                          <TableCell align="right">Month Left</TableCell>
                          <TableCell align="right">Frequency</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowData.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {item.date}
                            </TableCell>
                            <TableCell align="right">
                              {item.fundValue}
                            </TableCell>
                            <TableCell align="right">
                              {item.monthLeft}
                            </TableCell>
                            <TableCell align="right">
                              {item.frequency}
                            </TableCell>
                            <TableCell>
                              <button
                                className={classes.fundBtn}
                                onClick={handleClickOpen}
                              >
                                Bid
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </div>
              <div>
                <Card className={classes.root}>
                  <h2
                    style={{
                      borderBottom: "1px solid grey",
                      padding: "0px 20px 15px",
                    }}
                  >
                    Market
                  </h2>
                  <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow className="">
                          <TableCell>Date</TableCell>
                          <TableCell align="right">Fund Values</TableCell>
                          <TableCell align="right">Month Left</TableCell>
                          <TableCell align="right">Frequency</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowData.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {item.date}
                            </TableCell>
                            <TableCell align="right">
                              {item.fundValue}
                            </TableCell>
                            <TableCell align="right">
                              {item.monthLeft}
                            </TableCell>
                            <TableCell align="right">
                              {item.frequency}
                            </TableCell>
                            <TableCell>
                              <button
                                className={classes.fundBtn}
                                onClick={handleClickOpen}
                              >
                                Fund
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

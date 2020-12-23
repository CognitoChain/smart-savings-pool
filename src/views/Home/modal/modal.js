import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const CustomizedDialog = (props) => {
  return (
    <div>
      <Dialog
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
          Create Savings Pool
        </DialogTitle>
        <DialogContent dividers>
          <label
            for="Value"
            style={{
              color: "#6B9196",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Fund Value
          </label>
          <br />
          <input
            type="text"
            id="Value"
            name="Value"
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <br />
          <label
            for="Stats"
            style={{
              color: "#6B9196",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Slots
          </label>
          <br />
          <input
            type="text"
            id="Stats"
            name="Stats"
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <label
                for="Value"
                style={{
                  color: "#6B9196",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Frequency
              </label>
              <br />
              <FormControl
                variant="outlined"
                style={{ minWidth: "200px", marginTop: "7px" }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Weekly</MenuItem>
                  <MenuItem value={20}>Monthly</MenuItem>
                  <MenuItem value={30}>Yearly</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <label
                for="Value"
                style={{
                  color: "#6B9196",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Tenure
              </label>
              <br />
              <FormControl
                variant="outlined"
                style={{ minWidth: "200px", marginTop: "7px" }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>3 Months</MenuItem>
                  <MenuItem value={20}>6 Months</MenuItem>
                  <MenuItem value={30}>12 Months</MenuItem>
                  <MenuItem value={30}>24 Months</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              autoFocus
              onClick={props.onClose}
              style={{
                borderRadius: "24px",
                background: "#00CA9D",
                color: "white",
                padding: " 8px 40px",
                margin: "15px 0",
                border: "none",
                cursor: "pointer",
              }}
            >
              Create Fund
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default CustomizedDialog;
